<template>
    <!-- START: Footer -->
    <footer class="nk-footer">

        <div class="container">
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
        </div>

        <div class="nk-copyright">
            <div class="container">
                <div class="nk-copyright-left">
                    Copyright &copy; 2018
                </div>
                <div class="nk-copyright-right">
                    <ul class="nk-social-links-2">
                        <li><a class="nk-social-rss" href="#"><span class="fa fa-rss"></span></a></li>
                        <li><a class="nk-social-twitch" href="#"><span class="fa fa-twitch"></span></a></li>
                        <li><a class="nk-social-steam" href="#"><span class="fa fa-steam"></span></a></li>
                        <li><a class="nk-social-facebook" href="#"><span class="fa fa-facebook"></span></a></li>
                        <li><a class="nk-social-google-plus" href="#"><span class="fa fa-google-plus"></span></a></li>
                        <li><a class="nk-social-twitter" href="https://twitter.com/nkdevv" target="_blank"><span class="fa fa-twitter"></span></a></li>
                        <li><a class="nk-social-pinterest" href="#"><span class="fa fa-pinterest-p"></span></a></li>

                        <!-- Additional Social Buttons
                            <li><a class="nk-social-behance" href="#"><span class="fa fa-behance"></span></a></li>
                            <li><a class="nk-social-bitbucket" href="#"><span class="fa fa-bitbucket"></span></a></li>
                            <li><a class="nk-social-dropbox" href="#"><span class="fa fa-dropbox"></span></a></li>
                            <li><a class="nk-social-dribbble" href="#"><span class="fa fa-dribbble"></span></a></li>
                            <li><a class="nk-social-deviantart" href="#"><span class="fa fa-deviantart"></span></a></li>
                            <li><a class="nk-social-flickr" href="#"><span class="fa fa-flickr"></span></a></li>
                            <li><a class="nk-social-foursquare" href="#"><span class="fa fa-foursquare"></span></a></li>
                            <li><a class="nk-social-github" href="#"><span class="fa fa-github"></span></a></li>
                            <li><a class="nk-social-instagram" href="#"><span class="fa fa-instagram"></span></a></li>
                            <li><a class="nk-social-linkedin" href="#"><span class="fa fa-linkedin"></span></a></li>
                            <li><a class="nk-social-medium" href="#"><span class="fa fa-medium"></span></a></li>
                            <li><a class="nk-social-odnoklassniki" href="#"><span class="fa fa-odnoklassniki"></span></a></li>
                            <li><a class="nk-social-paypal" href="#"><span class="fa fa-paypal"></span></a></li>
                            <li><a class="nk-social-reddit" href="#"><span class="fa fa-reddit"></span></a></li>
                            <li><a class="nk-social-skype" href="#"><span class="fa fa-skype"></span></a></li>
                            <li><a class="nk-social-soundcloud" href="#"><span class="fa fa-soundcloud"></span></a></li>
                            <li><a class="nk-social-slack" href="#"><span class="fa fa-slack"></span></a></li>
                            <li><a class="nk-social-tumblr" href="#"><span class="fa fa-tumblr"></span></a></li>
                            <li><a class="nk-social-vimeo" href="#"><span class="fa fa-vimeo"></span></a></li>
                            <li><a class="nk-social-vk" href="#"><span class="fa fa-vk"></span></a></li>
                            <li><a class="nk-social-wordpress" href="#"><span class="fa fa-wordpress"></span></a></li>
                            <li><a class="nk-social-youtube" href="#"><span class="fa fa-youtube-play"></span></a></li>
                        -->
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <!-- END: Footer -->
</template>

<script>
    export default {
        name: 'gfooter'
    }
</script>