<template>
    <!-- START: Footer -->
    <footer class="nk-footer">

        <!--<div class="container footer-menu">
            <div class="nk-gap-3"></div>
            <div class="row vertical-gap">
                <div class="col-md-6">
                    <h4 class="nk-widget-title"><span class="text-main-1">{{$t('navigation')}}</span></h4>
                    <router-link :to="{ name: 'agreement' }" class="text-white">{{ $t('terms') }}</router-link>
                    <router-link :to="{ name: 'reglament' }" class="text-white">{{ $t('tournament_reglament') }}</router-link>
                    <router-link :to="{ name: 'rules' }" class="text-white">{{ $t('tournament_rules') }}</router-link>
                </div>
                <div class="col-md-6">
                    <h4 class="nk-widget-title"><span class="text-main-1">&nbsp;</span></h4>
                    <router-link :to="{ name: 'regulation' }" class="text-white">{{ $t('regulation') }}</router-link>

                </div>
            </div>
            <div class="nk-gap-2"></div>
        </div>-->
        <div class="nk-copyright">
            <div class="container">
                <div class="nk-copyright-left">
                    <router-link :to="{ name: 'agreement' }" class="text-white">{{ $t('terms') }}</router-link>
                </div>
                <div class="nk-copyright-right">
                    Copyright &copy; Powered by <a href="https://sparta.games" target="_blank">Sparta.Games</a>
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