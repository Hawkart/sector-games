<template>

    <div>
        <div class="nk-gap"></div>
        <div class="nk-pagination nk-pagination-center" v-if="pagination!=null && pagination.last_page>1">

            <router-link :to="getLink(pagination.current_page - 1)"  class="nk-pagination-prev" v-if="pagination.current_page > 1">
                <span class="ion-ios-arrow-back"></span>
            </router-link>

            <nav>
                 <router-link :to="getLink(page)"  v-for="page in pagesNumber" v-if="pagination.last_page > 1"
                             v-bind:class="[ page == isActived ? 'nk-pagination-current' : '']">
                    {{ page }}
                </router-link>
            </nav>

            <router-link :to="getLink(pagination.current_page + 1)" class="nk-pagination-next" v-if="pagination.current_page < pagination.last_page">
                <span class="ion-ios-arrow-forward"></span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pagination',
        props: ['pagination'],
        data() {
            return {
                offset: 12
            }
        },
        computed: {
            isActived: function () {
                return this.pagination.current_page;
            },
            pagesNumber: function () {
                if (!this.pagination.to) {
                    return [];
                }
                var from = this.pagination.current_page - this.offset;
                if (from < 1) {
                    from = 1;
                }
                var to = from + (this.offset * 2);
                if (to >= this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                var pagesArray = [];
                while (from <= to) {
                    pagesArray.push(from);
                    from++;
                }
                return pagesArray;
            }
        },
        methods: {
            getLink(page){
                let link = location.search;
                link = this.$route.path + this.updateUrlParameter(link, "page", page);
                return link;
            }
        }
    }
</script>