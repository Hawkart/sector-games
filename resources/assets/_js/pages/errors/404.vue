<template>
	<div class="nk-fullscreen-block">
		<div class="nk-fullscreen-block-top">
			<div class="text-center">
				<div class="nk-gap-4"></div>
				<router-link :to="{ name: 'home' }">
					<img src="/images/logo-2.png">
				</router-link>
				<div class="nk-gap-2"></div>
			</div>
		</div>
		<div class="nk-fullscreen-block-middle">
			<div class="container text-center">
				<div class="row">
					<div class="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
						<h1 class="text-main-1" style="font-size: 150px;">404</h1>

						<div class="nk-gap"></div>
						<h2 class="h4">You chose the wrong path!</h2>

						<div>Or such a page just doesn't exist... <br> Would you like to go back to the homepage?</div>
						<div class="nk-gap-3"></div>

						<router-link :to="{ name: 'home' }" class="nk-btn nk-btn-rounded nk-btn-color-white">
							Вернуться на главную
						</router-link>
					</div>
				</div>
				<div class="nk-gap-3"></div>
			</div>
		</div>
		<div class="nk-fullscreen-block-bottom">
			<div class="nk-gap-2"></div>
			<ul class="nk-social-links-2 nk-social-links-center">
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
			<div class="nk-gap-2"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'not-found',
  layout: 'default'
}
</script>
