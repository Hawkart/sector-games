import Vue from 'vue'
import $ from 'jquery'
//import Tether from 'tether'
import Meta from 'vue-meta'
import Router from 'vue-router'
import VModal from 'vue-js-modal'
import VueClipboards from 'vue-clipboards'
import VueMoment from 'vue-moment'

import './components'
import './util/interceptors'

Vue.config.productionTip = false

Vue.use(Meta)
Vue.use(Router)
Vue.use(VModal)
Vue.use(VueClipboards)
Vue.use(VueMoment)

window.jQuery = $
//window.Tether = Tether
require('bootstrap')

window._ = require('lodash');
window.$ = window.jQuery = require('jquery');
window.moment = require('moment');
//require('bootstrap-sass');
window.Vue = require('vue');
require('vue-resource');
require('select2');

import FullCalendar from 'vue-full-calendar'
Vue.use(FullCalendar)

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

//var VueBreadcrumbs = require('vue2-breadcrumbs');
window.axios = require('axios');

//window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.options.xhr = { withCredentials : true };

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

import moment from 'moment'
Vue.prototype.moment = moment

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

import Echo from "laravel-echo"
import Pusher from 'pusher-js'

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'd9bb5a86510edebf23af',
    cluster: 'eu',
    encrypted: true
});

/**
** Global methods
**/
Vue.mixin({
    methods: {
        getImageLink(image, t = false)
        {
            if(image!==undefined && image!=null && image!="")
            {
                if(!image.includes("http:") && !image.includes("https:"))
                {
                    image = '/storage/'+image;
                }
            }else{
                
                if(t)
                {
                    switch(t)
                    {
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
                }else{
                    image = '/storage/default/avatar_user.jpg';
                }
                                
            }
            
            return image;
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
        eventsConvertUTC(events, k)
        {
            var d = new Date();
            var n = d.getTimezoneOffset();
            //console.log("timezoneOffset="+n);
            var timezone = n/60;
            var schedule = [];
            
            if(events!=null)
            {
                events = events.forEach(function(e)
                {
                    var event = e.split(',');
                    var hour = parseInt(event[1]);
                    var newHour = hour+k*timezone;
                    var newDay = parseInt(event[0]);
                    
                    if(newHour>23)
                    {
                        newHour-=24; 
                        newDay++;
                    }
                    
                    if(newHour<0)
                    {
                        newHour=24+newHour; 
                        newDay--;
                    }
                    
                    if(newDay>6)
                    {
                       newDay=0; 
                    }
                    
                    if(newDay<0)
                    {
                       newDay=6; 
                    }
                    
                    if(parseInt(newHour)<10)
                        newHour = '0'+newHour;
                        
                    schedule.push(newDay+","+newHour);
                });
            }
            
            return schedule;
        },
        dateConvertUTC(edate, k)
        {
            var d = new Date();
            var n = d.getTimezoneOffset();
            var milliseconds;
            var newDate;
 
            if(k<0){ k = -2; }else{ k = 0; }
            
            //for working in all browsers!!!!!!
            edate = edate.replace(" ", "T");
            milliseconds = new Date(edate).getTime() + (k * n * 60 * 1000);
            
            newDate = new Date(milliseconds).toISOString();
            newDate = newDate.substr(0,10)+" "+newDate.substr(11,8);
               
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
        calculateBet(balance1, balance2)
        {
            var min = balance1>balance2 ? balance2 : balance1;
            return parseInt(min*0.2);
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
        }
    }
});