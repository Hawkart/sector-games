<template>
    <div>
    <div class="row" v-if="user!==null">
        <div class="col-md-4 col-sm-6 col-xs-12">
            <card title="Add balance">
                <form autocomplete="off">
                    <!--<img src="https://www.skrill.com/fileadmin/content/images/brand_centre/Skrill_Logos/skrill-85x37_en.gif" alt="Skrill banner 85x37" title="Use the Skrill Digital Wallet for all your online transactions."/>

                    <div class="form-group">
                        <label class="control-label mb-10">Name</label>
                        <input type="text" class="form-control" placeholder="name" v-model="user.name">
                    </div>

                    <div class="form-group">
                        <label class="control-label mb-10">Surnname</label>
                        <input type="text" class="form-control" placeholder="Surnname" v-model="user.last_name">
                    </div>

                    <div class="form-group">
                        <label class="control-label mb-10">Middle name</label>
                        <input type="text" class="form-control" placeholder="Middle name" v-model="user.second_name">
                    </div>

                    <div class="form-group">
                        <label class="control-label mb-10">Contact number</label>
                        <input type="text" class="form-control" v-model="user.phone">
                        <span class="help-block" v-if="error && response.phone">{{ response.phone[0] }}</span>
                    </div>-->

                    <div class="form-group mt-10">
                        <label class="control-label mb-10">Amount ($)</label>
                        <input type="number" class="form-control" name="amount" v-model="amount" id="amount" required>
                    </div>
                    <div class="form-group">
                        <div id="paypal-button"></div>
                    </div>
                </form>

            </card>
        </div>
    </div>
    <div class="row" v-if="transactions!==null">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <card title="Transactions">

                <div class="table-wrap">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered mb-0">
                            <thead>
                            <tr>
                                <th>Date</th>
                                <th>ID</th>
                                <th>Amount, $</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="transaction in transactions">
                                <td>{{moment(transaction.created_at, "YYYY-MM-DD h:mm:ss").fromNow()}}</td>
                                <td>{{transaction.external_id}}</td>
                                <td class="text-center"><span v-if="transaction.amount>0">+</span><span v-else>-</span>{{ Number(transaction.amount.toFixed(2))}}</td>
                                <td>{{transaction.description}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </card>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'
import Cookies from 'js-cookie'

export default {
    computed: mapGetters({
        user: 'authUser',
        authenticated: 'authCheck'
    }),
    data() {
        return {
            amount: 50,
            transactions: [],
            error: null,
            response: []
        }
    },
    mounted() {

        var _self = this;
        this.getTransactions();

        window.paypalCheckoutReady = function () {
            paypal.Button.render({

                env: window.Laravel.paypalMode, // sandbox | production

                // Show the buyer a 'Pay Now' button in the checkout flow
                commit: true,

                style: {
                    label: 'paypal',
                    size:  'medium',    // small | medium | large | responsive
                    shape: 'rect',     // pill | rect
                    color: 'blue',     // gold | blue | silver | black
                    tagline: false
                },

                // payment() is called when the button is clicked
                payment: function(resolve, reject) {

                    var CREATE_PAYMENT_URL = '/api/paypal/create';
                    var amount = parseInt(document.getElementById("amount").value);
                    if(amount==0)
                        return false;

                    //Hit the endpoint with a request
                    paypal.request.post(CREATE_PAYMENT_URL, {amount: amount, token: Cookies.get('token')})
                        .then(function(data) { resolve(data.id); })
                        .catch(function(err) { reject(err); });
                },

                // onAuthorize() is called when the buyer approves the payment
                onAuthorize: function(data, actions) {

                    // Set up a url on your server to execute the payment
                    var EXECUTE_URL = '/api/paypal/execute';

                    // Set up the data you need to pass to your server
                    var data = {
                        paymentID: data.paymentID,
                        payerID: data.payerID,
                        token: Cookies.get('token')
                    };

                    // Make a call to your server to execute the payment
                    return paypal.request.post(EXECUTE_URL, data)
                        .then(function (res) {

                            _self.$store.dispatch('fetchUser');
                            _self.getTransactions();

                            swal({
                                type: 'success',
                                title: 'Payment complete!'
                            });
                        })
                        .catch(function(err) {
                            swal({
                                type: 'error',
                                title: err
                            });
                        });
                }

            }, '#paypal-button');
        };
    },
    methods: {
        getTransactions()
        {
            axios.get('/api/users/'+this.user.id+'/transactions').then((response) => {

                var transactions = response.data;
                var _sf = this;

                transactions.forEach(function(transaction)
                {
                    transaction.created_at = _sf.dateConvertUTC(transaction.created_at, -1);
                });

                this.$set(this, 'transactions', transactions);
            });
        }
    }
};
</script>