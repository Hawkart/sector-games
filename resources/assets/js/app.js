import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false

import moment from 'moment'
Vue.prototype.moment = moment

import VueCollapse from 'vue2-collapse'
Vue.use(VueCollapse)

import SocialSharing from 'vue-social-sharing'
Vue.use(SocialSharing)

window.$ = window.jQuery = require('jquery');

import Cookies from 'js-cookie'
import Echo from "laravel-echo"
window.io = require('socket.io-client');

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.config.apiHost + ':6002',  //window.location.hostname
    auth:
        {
            headers: {
                Authorization: 'Bearer ' + Cookies.get('token'),
            },
        }
});

/**
 **  Filters
 ***/
var truncateFilter = function(text, length, clamp){
    clamp = clamp || '...';
    var node = document.createElement('div');
    node.innerHTML = text;
    var content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
};
Vue.filter('truncate', truncateFilter);

/**
 **  Event bus
 **/
window.Event = new class {

    constructor() {
        this.vue = new Vue()
    }

    fire(event, data = null) {
        this.vue.$emit(event, data)
    }

    listen(event, callback) {
        this.vue.$on(event, callback)
    }
}

/**
 ** Global methods
 **/
Vue.mixin({
    methods: {
        getImageLink(image, t = false) {
            if (image !== undefined && image != null && image != "") {
                if (!image.includes("http:") && !image.includes("https:")) {
                    image = '/storage/' + image;
                }else{
                    return image;
                }
            } else {

                if (t) {
                    switch (t) {
                        case 'overlay_team':
                            image = '/storage/default/overlay_team.jpg';
                            break;
                        case 'overlay_game':
                            image = '/storage/default/overlay_game.jpg';
                            break;
                        case 'overlay_user':
                            image = '/storage/default/overlay_user.jpg';
                            break;

                        case 'avatar_user':
                            image = '/storage/default/avatar_user.jpg';
                            break;
                        case 'avatar_team':
                            image = '/storage/default/avatar_team.jpg';
                            break;
                    }
                } else {
                    image = '/storage/default/avatar_user.jpg';
                }

            }

            return window.config.apiHost+image;
        },
        updateUrlParameter(urlQueryString, key, value)
        {
            var newParam = key + '=' + value,
                params = '?' + newParam;

            var updateRegex = new RegExp('([\?&])' + key + '[^&]*');
            var removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');

            if(urlQueryString)
            {
                if( typeof value == 'undefined' || value == null || value == '' ) { // Remove param if value is empty

                    params = urlQueryString.replace(removeRegex, "$1");
                    params = params.replace( /[&;]$/, "" );

                } else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it

                    params = urlQueryString.replace(updateRegex, "$1" + newParam);

                } else { // Otherwise, add it to end of query string

                    params = urlQueryString + '&' + newParam;
                }
            }else{
                params = '?' + newParam;
            }

            return params;
        },
        dateConvertUTC(edate, k)
        {
            var d = new Date();
            var n = -180;//d.getTimezoneOffset(); //MSK
            var milliseconds;
            var newDate;
            edate = edate.replace(" ", "T");


            /*if(k<0){ k = -2; }else{ k = 0; }
            //for working in all browsers!!!!!!
            milliseconds = new Date(edate).getTime() + (k * n * 60 * 1000);
            newDate = new Date(milliseconds).toISOString();
            newDate = newDate.substr(0,10)+" "+newDate.substr(11,8);*/

            if(k<0){ k = -1; }else{ k = 0; }
            var newDate = this.moment.utc(edate).add(k*n/60, 'hours').format('YYYY-MM-DD HH:mm:ss');

            //console.log(edate+ "   "+newDate+"   "+ (k*n/60) +"    "+newDate2);

            return newDate;
        },
        datesConvertUTC(arDates, k)
        {
            var arNewDates = [];
            var newDate;

            for (var edate in arDates)
            {
                newDate = this.dateConvertUTC(edate, k);
                arNewDates[newDate] = arDates[edate];
            }

            return arNewDates;
        },
        UrlToArray: function(url) {
            var request = {};
            var pairs = url.substring(url.indexOf('?') + 1).split('&');
            for (var i = 0; i < pairs.length; i++) {
                if(!pairs[i])
                    continue;
                var pair = pairs[i].split('=');
                request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
            return request;
        },
        ArrayToUrl: function(array) {
            var pairs = [];
            for (var key in array)
                if (array.hasOwnProperty(key))

                    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(array[key]));
            return pairs.join('&');
        },
        UrlParamsMerge: function(queryStartParams)
        {
            if(location.search)
            {
                var paramsArray = this.UrlToArray(location.search);

                for (var prop in paramsArray)
                {
                    if (paramsArray.hasOwnProperty(prop))
                    {
                        queryStartParams[prop] = paramsArray[prop];
                    }
                }

                if(parseInt(paramsArray['_limit'])>0)
                    paramsArray['_offset'] = (parseInt(paramsArray['page'])-1)*parseInt(paramsArray['_limit']);
            }

            var query = this.ArrayToUrl(queryStartParams);

            return query;
        },
        slugTitle: function(title) {
            var slug = "";
            if(title!==null)
            {
                // Change to lower case
                var titleLower = title.toLowerCase();
                // Letter "e"
                slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
                // Letter "a"
                slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
                // Letter "o"
                slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
                // Letter "u"
                slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
                // Letter "d"
                slug = slug.replace(/đ/gi, 'd');
                // Trim the last whitespace
                slug = slug.replace(/\s*$/g, '');
                // Change whitespace to "-"
                slug = slug.replace(/\s+/g, '-');
            }

            return slug;
        },
        slickBracketInit: function(){
            $('.tournament-list').slick({
                infinite: false,
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 300,
                swipe: false,
                responsive: [
                    {
                        breakpoint: 1440,
                        settings: {
                            slidesToShow: 3,
                        }
                    },{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    },{
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            speed: 100,
                        }
                    }
                ]
            }).on('afterChange', function(event, slick, currentSlide) {
                var current = currentSlide,
                    visible = 4,
                    count = slick.slideCount;
                for (var i = 0; i < slick.originalSettings.responsive.length; i++) {
                    if (slick.originalSettings.responsive[i].breakpoint == slick.activeBreakpoint) {
                        visible = slick.originalSettings.responsive[i].settings.slidesToShow;
                    }
                }
                toggleSliderArr(current, visible, count);
                toggleRound(current);
            });

            $('.tournament-nav__list').slick({
                infinite: false,
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 300,
                swipe: false,
                responsive: [
                    {
                        breakpoint: 1440,
                        settings: {
                            slidesToShow: 3,
                        }
                    },{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    },{
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            speed: 100,
                        }
                    }
                ]
            });

            $('.tournament-head__list').slick({
                infinite: false,
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                speed: 300,
                swipe: false,
                responsive: [
                    {
                        breakpoint: 1440,
                        settings: {
                            slidesToShow: 3,
                        }
                    },{
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                        }
                    },{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        }
                    },{
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            speed: 100,
                        }
                    }
                ]
            });

            function toggleSliderArr(current, visible, count) {
                if (current == 0) {
                    $('.tournament-head__arr-prev, .tournament-nav__arr-prev').addClass('disabled');
                } else{
                    $('.tournament-head__arr-prev, .tournament-nav__arr-prev').removeClass('disabled');
                }
                if (current == (count - visible)) {
                    $('.tournament-head__arr-next, .tournament-nav__arr-next').addClass('disabled');
                } else{
                    $('.tournament-head__arr-next, .tournament-nav__arr-next').removeClass('disabled');
                }
            }

            function toggleRound(index){
                $('.tournament-nav__round-box').removeClass('active');
                $('.tournament-nav__round-box[data-round="' + (index + 1) + '"]').addClass('active');
                if($(window).width() <= 767){
                    $('.tournament-head__list, .tournament-nav__list, .tournament-list').slick('slickGoTo', index);
                }
            }

            if ($('.tournament-list').length) {
                var current = 0,
                    visible = $('.tournament-list .slick-active').length,
                    count = $('.tournament-list .slick-slide').length;
                toggleSliderArr(current, visible, count);
            }

            $(document).on('click', '.tournament-head__arr-prev, .tournament-nav__arr-prev', function() {
                $('.tournament-head__list, .tournament-nav__list, .tournament-list').slick('slickPrev');
            });
            $(document).on('click', '.tournament-head__arr-next, .tournament-nav__arr-next', function() {
                $('.tournament-head__list, .tournament-nav__list, .tournament-list').slick('slickNext');
            });
            $(document).on('click', '.tournament-nav__round-box', function() {
                var $this = $(this),
                    index = parseInt($this.attr('data-round')) - 1;
                toggleRound(index);
            });
        }
    }
});

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
