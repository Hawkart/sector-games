<template>
<div class="row">
	<div class="col-lg-12 col-md-12 col-xs-12">
        <div class="panel panel-default card-view">
			<div class="panel-wrapper collapse in">
				<div class="panel-body">
                    <div class="row">
    					<div class="col-md-12 col-sm-12 col-xs-12">
                        
                            <div class="comments-app">
                                <h5 class="txt-dark">Comments</h5>
                                
                                <div class="comment-form form-wrap" v-if="user">
                                    <!-- Comment Avatar -->
                                    <div class="comment-avatar">
                                        <img :src="getImageLink(user.avatar)">
                                    </div>
                        
                                    <form class="form" name="form">
                                        <div class="form-row"  :class="{ 'has-error': errorComment }">
                                            <textarea class="form-control" placeholder="Add comment..." required v-model="message"></textarea>
                                            <span class="input help-block" v-if="errorComment">{{ errorComment }}</span>
                                        </div>
                                        
                                        <div class="form-row">
                                            <input class="form-control" placeholder="user name" type="text" disabled :value="user.name">
                                        </div>
                                        <div class="form-row">
                                            <input type="button" class="btn btn-primary" @click="saveComment" value="Add Comment">
                                        </div>
                                        
                                        <div class="alert alert-success alert-dismissable mt-20" v-if="success">
                                            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                                            <p>{{success}}</p>
                                        </div>
                                        
                                    </form>
                                </div>
        
                                <div class="comment-form" v-if="!authenticated">
                                    <div class="alert alert-warning alert-dismissable">
                        				<i class="zmdi zmdi-alert-circle-o pr-15 pull-left"></i><p class="pull-left"><router-link :to="{ name: 'auth.register' }"><u>Sign up</u>
                                        </router-link> or <router-link :to="{ name: 'auth.login' }"><u>sign in</u></router-link> to leave comments. </p>
                        				<div class="clearfix"></div>
                        			</div>
                                </div>
                                
                                <hr class="light-grey-hr mb-20 mt-10">
                                
                                <a class="btn btn-primary center-block mb-20" v-if="curPage>1" v-on:click="showPrevComments">Show previous comments</a>
                                
                                <!-- Comments List -->
                                <div class="comments" v-if="comments" v-for="comment in commentsData">
                                    <div class="comment">
                                        
                                        <!-- Comment Avatar -->
                                        <div class="comment-avatar">
                                            <img :src="getImageLink(comment.user.avatar)">
                                        </div>
                                        <!-- Comment Box -->
                                        <div class="comment-box">
                                            <div class="comment-text">{{comment.comment}}</div>
                                            <div class="comment-footer">
                                                <div class="comment-info">
                                                    <span class="comment-author">
                                                       <em>{{ comment.user.name}}</em>
                                                    </span>
                                                    <span class="comment-date">{{ comment.created_at}}</span>
                                                </div>
                                                <div class="comment-actions">
                                                    <ul class="list">
                                                        <li>
                                                            <!--<a v-on:click="openComment(comment.id)">Reply</a>-->
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="comment-form comment-v" v-if="commentBoxs[comment.id]">
                                            <div class="comment-avatar">
                                                <img :src="getImageLink(user.avatar)">
                                            </div>
                                            <form class="form" name="form">
                                            
                                                <div class="form-row"  :class="{ 'has-error': errorReply }">
                                                    <textarea class="input" placeholder="Add comment..." required v-model="message"></textarea>
                                                    <span class="input help-block" v-if="errorReply">{{ errorReply }}</span>
                                                </div>
                                                
                                                <div class="form-row">
                                                    <input class="input" placeholder="Email" type="text" :value="user.name">
                                                </div>
                                                <div class="form-row">
                                                    <input type="button" class="btn btn-primary fff" v-on:click="replyComment(comment.id)" value="Add Comment">
                                                </div>
                                            </form>
                                        </div>
                                        
                                       
                                        <div v-if="comment.replies">
                                            <div class="comments" v-for="replies in comment.replies">
                                                <div class="comment reply">
                                            
                                                    <div class="comment-avatar">
                                                        <img :src="getImageLink(replies.user.avatar)">
                                                    </div>
                                                    
                                                    <div class="comment-box">
                                                        <div class="comment-text">{{replies.comment}}</div>
                                                        <div class="comment-footer">
                                                            <div class="comment-info">
                                                                <span class="comment-author">
                                                                   {{replies.user.name}}
                                                                </span>
                                                                <span class="comment-date">{{replies.created_at}}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                <a class="btn btn-primary center-block" v-if="curPage<totalPages" v-on:click="showMoreComments">Show more comment</a>
                                
                            </div>
    	               </div>
                	</div>
                </div>
            </div>
        </div>
     </div>
</div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios'

    export default {
        name: 'comments',
        props: ['commentUrl'],
        data() {
            return {
                comments: [],
                commentreplies: [],
                comments: 0,
                commentBoxs: [],
                message: null,
                replyCommentBoxs: [],
                commentsData: [],
                viewcomment: [],
                show: [],
                errorComment: null,
                errorReply: null,
                success: null,
                curPage: 1,
                totalPages: 0
            }
        },
        
        computed: {
            ...mapGetters({
                user: 'authUser',
                authenticated: 'authCheck',
            })
        },

        methods: {
            fetchComments(page) 
            {
                axios.get('/api/comments/' + this.commentUrl+"?page="+page).then((response) => {
                    //this.commentsData = response.data.data                    
                    this.$set(this, 'commentsData', response.data.data);
                    this.$set(this, 'totalPages', response.data.last_page);
                    this.comments = 1;
                    //console.log(this.commentsData);
                });
            },
            showComments(index) {
                if (!this.viewcomment[index]) {
                    Vue.set(this.show, index, "hide");
                    Vue.set(this.viewcomment, index, 1);
                } else {
                    Vue.set(this.show, index, "view");
                    Vue.set(this.viewcomment, index, 0);
                }
            },
            openComment(index) {
                if (this.user) {
                    if (this.commentBoxs[index]) {
                        Vue.set(this.commentBoxs, index, 0);
                    } else {
                        Vue.set(this.commentBoxs, index, 1);
                    }
                }
                
                return false;
            },
            replyCommentBox(index) {
                if (this.user) {
                    if (this.replyCommentBoxs[index]) {
                        Vue.set(this.replyCommentBoxs, index, 0);
                    } else {
                        Vue.set(this.replyCommentBoxs, index, 1);
                    }
                }
            },
            saveComment() {
                if (this.message != null && this.message != ' ') {
                    this.errorComment = null;
                    this.success = null;
 
                    axios.post('/api/comments', {
                        url: this.commentUrl,
                        comment: this.message
                    }).then((res) => {
                        if (res.data.status) 
                        {
                            //info about moderation
                            this.message = null;
                            this.success = 'Your comment will be displayed after moderation';
                        }
                    });
                } else {
                    this.errorComment = "Please enter a comment to save";
                }
            },
            replyComment(commentId) {
                if (this.message != null && this.message != ' ') 
                {
                    this.errorReply = null;
                    
                    //console.log(commentId+" , "+index);
                    
                    axios.post('/api/comments', {
                        comment: this.message,
                        reply_id: commentId
                    }).then((res) => {
                        if (res.data.status) 
                        {                            
                            Vue.set(this.replyCommentBoxs, commentId, 0);
                            Vue.set(this.commentBoxs, commentId, 0);
                            this.message = null;
                        }
                    });
                } else {
                    this.errorReply = "Please enter a comment to save";
                }
            },
            showMoreComments(){
                this.curPage++;
                this.fetchComments(this.curPage);
            },
            showPrevComments(){
                this.curPage--;
                this.fetchComments(this.curPage);
            }
        },

        mounted() {
            //console.log("comments mounted");
            this.fetchComments(this.curPage);
        }
    }
</script>

<style>
.comments-app{
  margin: 20px auto;
  padding: 0 20px;
  width: 100%;
}

.comments-app .btn{
    max-width: 250px;
}

.comments-app h5{
    margin-bottom: 1.5em;
    text-align: center;
    text-shadow: 0 0 2px rgba(152, 152, 152, 1);
}

.comment-form{  }
.comment-form .comment-avatar{  }
.comment-v{
    margin-top : 5px;
}
.comment-form .form{ margin-left: 100px; }

.comment-form .form .form-row{ margin-bottom: 10px; }
.comment-form .form .form-row:last-child{ margin-bottom: 0; }

.comment-form .form .input{
  background-color: #fcfcfc;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
  color: #555f77;
  font-family: inherit;
  font-size: 14px;
  padding: 5px 10px;
  outline: none;
  width: 100%;

  -webkit-transition: 350ms box-shadow;
  -moz-transition: 350ms box-shadow;
  -ms-transition: 350ms box-shadow;
  -o-transition: 350ms box-shadow;
  transition: 350ms box-shadow;
}

.comment-form .form textarea{
  height: 100px;
  padding: 15px;
}

.comment-form .form label{
  color: #555f77;
  font-family: inherit;
  font-size: 14px;
}

.comment-form .form input[type=submit]{
  background-color: #555f77;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
  color: #fff;
  cursor: pointer;
  display: block;
  margin-left: auto;
  outline: none;
  padding: 6px 15px;

  -webkit-transition: 350ms box-shadow;
  -moz-transition: 350ms box-shadow;
  -ms-transition: 350ms box-shadow;
  -o-transition: 350ms box-shadow;
  transition: 350ms box-shadow;
}

.comment-form .form .input:focus,
.comment-form .form input[type=submit]:focus,
.comment-form .form input[type=submit]:hover{
  box-shadow: 0 2px 6px rgba(121, 137, 148, .55);
}

.comment-form .form.ng-submitted .input.ng-invalid,
.comment-form .form .input.ng-dirty.ng-invalid{
  box-shadow: 0 2px 6px rgba(212, 47, 47, .55) !important;
}

.comment-form .form .input.disabled {
    background-color: #E8E8E8;
}


.comments{  }

.comment-form,
.comment{
  margin-bottom: 20px;
  position: relative;
  z-index: 0;
}

.comment-form .comment-avatar,
.comment .comment-avatar{
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
  height: 80px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 80px;
}

.comment-form .comment-avatar img,
.comment .comment-avatar img{
  display: block;
  height: auto;
  width: 100%;
}

.comment .comment-box{
  background-color: #fcfcfc;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .15);
  margin-left: 100px;
  min-height: 60px;
  position: relative;
  padding: 15px;
}

.comment .comment-box:before,
.comment .comment-box:after{
  border-width: 10px 10px 10px 0;
  border-style: solid;
  border-color: transparent #FCFCFC;
  content: "";
  left: -10px;
  position: absolute;
  top: 20px;
}

.comment .comment-box:before{
  border-color: transparent rgba(0, 0, 0, .05);
   top: 22px;
}

.comment .comment-text{
  color: #555f77;
  font-size: 15px;
  margin-bottom: 25px;
}

.comment .comment-footer{
  color: #acb4c2;
  font-size: 13px;
}

.comment .comment-footer:after{
  content: "";
  display: table;
  clear: both;
}

.comment .comment-footer a{
  color: #acb4c2;
  text-decoration: none;

  -webkit-transition: 350ms color;
  -moz-transition: 350ms color;
  -ms-transition: 350ms color;
  -o-transition: 350ms color;
  transition: 350ms color;
}

.comment .comment-footer a:hover{
  color: #555f77;
  text-decoration: underline;
}

.comment .comment-info{
  float: left;
  width: 85%;
}

.comment .comment-author{ }
.comment .comment-date{ }

.comment .comment-date:before{
  content: "|";
  margin: 0 10px;
}

.comment-actions{
  float: left;
  text-align: right;
  width: 15%;
}

.reply{
    margin-top: 20px;
    margin-left: 100px;
}
.list{
    list-style: none;
    list-style-type: none;
    display: inline !important;
}
</style>