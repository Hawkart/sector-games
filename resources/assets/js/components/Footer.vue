<template>
    <!-- START: Footer -->
    <footer class="nk-footer">

        <!--<div class="container">
            <div class="nk-gap-3"></div>
            <div class="row vertical-gap">
                <div class="col-md-6">
                    <div class="nk-widget">
                        <h4 class="nk-widget-title"><span class="text-main-1">Contact</span> With Us</h4>
                        <div class="nk-widget-content">
                            <form action="php/ajax-contact-form.php" class="nk-form nk-form-ajax">
                                <div class="row vertical-gap sm-gap">
                                    <div class="col-md-6">
                                        <input type="email" class="form-control required" name="email" placeholder="Email *">
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control required" name="name" placeholder="Name *">
                                    </div>
                                </div>
                                <div class="nk-gap"></div>
                                <textarea class="form-control required" name="message" rows="5" placeholder="Message *"></textarea>
                                <div class="nk-gap-1"></div>
                                <button class="nk-btn nk-btn-rounded nk-btn-color-white">
                                    <span>Send</span>
                                    <span class="icon"><i class="ion-paper-airplane"></i></span>
                                </button>
                                <div class="nk-form-response-success"></div>
                                <div class="nk-form-response-error"></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="nk-widget">
                        <h4 class="nk-widget-title"><span class="text-main-1">Latest</span> Posts</h4>
                        <div class="nk-widget-content">
                            <div class="row vertical-gap sm-gap">

                                <div class="col-lg-6">
                                    <div class="nk-widget-post-2">
                                        <a href="blog-article.html" class="nk-post-image">
                                            <img src="assets/images/post-1-sm.jpg" alt="">
                                        </a>
                                        <div class="nk-post-title"><a href="blog-article.html">Smell magic in the air. Or maybe barbecue</a></div>
                                        <div class="nk-post-date">
                                            <span class="fa fa-calendar"></span> Sep 18, 2018
                                            <span class="fa fa-comments"></span> <a href="#">4</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="nk-widget-post-2">
                                        <a href="blog-article.html" class="nk-post-image">
                                            <img src="assets/images/post-2-sm.jpg" alt="">
                                        </a>
                                        <div class="nk-post-title"><a href="blog-article.html">Grab your sword and fight the Horde</a></div>
                                        <div class="nk-post-date">
                                            <span class="fa fa-calendar"></span> Sep 5, 2018
                                            <span class="fa fa-comments"></span> <a href="#">7</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="nk-widget">
                        <h4 class="nk-widget-title"><span class="text-main-1">In</span> Twitter</h4>
                        <div class="nk-widget-content">
                            <div class="nk-twitter-list" data-twitter-count="1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nk-gap-3"></div>
        </div>-->

        <div class="nk-copyright">
            <div class="container">
                <div class="nk-copyright-left">
                Copyright &copy; Powered by <a href="https://sparta.games" target="_blank">Sparta.Games</a>
                </div>
                <div class="nk-copyright-right">
                    <socials-group class="nk-social-links-2"></socials-group>
                </div>
            </div>
        </div>
    </footer>
    <!-- END: Footer -->
</template>

<script>
    import SocialsGroup from "./SocialsGroup";

    export default {
        name: 'gfooter',
        components: {
            SocialsGroup
        }
    }
</script>