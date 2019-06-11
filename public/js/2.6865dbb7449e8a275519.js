webpackJsonp([2],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-flickity/src/flickity.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flickity = __webpack_require__("./node_modules/flickity/js/index.js");

var _flickity2 = _interopRequireDefault(_flickity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    options: Object
  },

  mounted: function mounted() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.$flickity.destroy();
    this.$flickity = null;
  },


  methods: {
    init: function init() {
      this.$flickity = new _flickity2.default(this.$el, this.options);
      this.$emit('init', this.$flickity);
    },
    flickity: function flickity() {
      return this.$flickity;
    },
    select: function select(index, isWrapped, isInstant) {
      this.$flickity.select(index, isWrapped, isInstant);
    },
    next: function next(isWrapped, isInstant) {
      this.$flickity.next(isWrapped, isInstant);
    },
    previous: function previous(isWrapped, isInstant) {
      this.$flickity.previous(isWrapped, isInstant);
    },
    selectCell: function selectCell(value, isWrapped, isInstant) {
      this.$flickity.selectCell(value, isWrapped, isInstant);
    },
    resize: function resize() {
      this.$flickity.resize();
    },
    reposition: function reposition() {
      this.$flickity.reposition();
    },
    prepend: function prepend(elements) {
      this.$flickity.prepend(elements);
    },
    append: function append(elements) {
      this.$flickity.append(elements);
    },
    insert: function insert(elements, index) {
      this.$flickity.insert(elements, index);
    },
    remove: function remove(elements) {
      this.$flickity.remove(elements);
    },
    playPlayer: function playPlayer() {
      this.$flickity.playPlayer();
    },
    stopPlayer: function stopPlayer() {
      this.$flickity.stopPlayer();
    },
    pausePlayer: function pausePlayer() {
      this.$flickity.pausePlayer();
    },
    unpausePlayer: function unpausePlayer() {
      this.$flickity.unpausePlayer();
    },
    rerender: function rerender() {
      this.$flickity.destroy();
      this.init();
    },
    destroy: function destroy() {
      this.$flickity.destroy();
    },
    reloadCells: function reloadCells() {
      this.$flickity.reloadCells();
    },
    getCellElements: function getCellElements() {
      return this.$flickity.getCellElements();
    },
    data: function data() {
      return _flickity2.default.data(this.$el);
    },
    on: function on(eventName, listener) {
      this.$flickity.on(eventName, listener);
    },
    off: function off(eventName, listener) {
      this.$flickity.off(eventName, listener);
    },
    once: function once(eventName, listener) {
      this.$flickity.once(eventName, listener);
    },
    selectedElement: function selectedElement() {
      return this.$flickity.selectedElement;
    },
    selectedElements: function selectedElements() {
      return this.$flickity.selectedElements;
    },
    selectedIndex: function selectedIndex() {
      return this.$flickity.selectedIndex;
    },
    cells: function cells() {
      return this.$flickity.cells;
    },
    slides: function slides() {
      return this.$flickity.slides;
    },
    disableDrag: function disableDrag() {
      this.$flickity.options.draggable = false;
      this.$flickity.updateDraggable();
    },
    enableDrag: function enableDrag() {
      this.$flickity.options.draggable = true;
      this.$flickity.updateDraggable();
    }
  }

};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/welcome.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _vuex = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _vueFlickity = __webpack_require__("./node_modules/vue-flickity/src/flickity.vue");

var _vueFlickity2 = _interopRequireDefault(_vueFlickity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    layout: 'default',

    metaInfo: function metaInfo() {
        return { title: this.$t('home') };
    },


    components: {
        Flickity: _vueFlickity2.default
    },

    data: function data() {
        return {
            title: window.config.appName,
            news: null,
            flickityOptions: {
                autoPlay: 3500,

                prevNextButtons: true,
                pageDots: false,
                wrapAround: true,
                adaptiveHeight: true
            },
            countSchools: 0,
            countPlayers: 0,
            countTeams: 0
        };
    },

    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)({
        user: 'auth/user',
        locale: 'lang/locale'
    }), {
        daysTo: function daysTo() {
            var d2 = new Date('Jun 20, 2018');
            var d3 = new Date();
            var ds = (d2.getTime() - d3.getTime()) / (1000 * 60 * 60 * 24);
            return Math.round(ds) + 1;
        }
    }),

    mounted: function mounted() {
        this.getPlayersCount();
        this.getTeamsCount();
        this.getSchoolsCount();
        this.moment.locale(this.locale);
    },


    methods: {
        getPlayersCount: function getPlayersCount() {
            var _this = this;

            var query = this.ArrayToUrl({
                'type': 'player',
                'institution_id-not': "null",
                "_limit": 1,
                '_fields': 'id'
            });

            _axios2.default.get('/api/users?' + query).then(function (response) {
                _this.$set(_this, 'countPlayers', response.data.total);
            });
        },
        getTeamsCount: function getTeamsCount() {
            var _this2 = this;

            var query = this.ArrayToUrl({
                "status-not": 2,
                "institution_id-not": "null",
                "_limit": 1,
                '_fields': 'id'
            });

            _axios2.default.get('/api/teams?' + query).then(function (response) {
                _this2.$set(_this2, 'countTeams', response.data.total);
            });
        },
        getSchoolsCount: function getSchoolsCount() {
            var _this3 = this;

            var query = this.ArrayToUrl({
                "_limit": 1,
                '_fields': 'id'
            });

            _axios2.default.get('/api/tournaments?' + query).then(function (response) {
                _this3.$set(_this3, 'countSchools', response.data.total);
            });
        }
    }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2af8bc48\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/flickity/dist/flickity.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*! Flickity v2.2.0\nhttps://flickity.metafizzy.co\n---------------------------------------------- */\n.flickity-enabled {\n  position: relative;\n}\n.flickity-enabled:focus { outline: none;\n}\n.flickity-viewport {\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n}\n.flickity-slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n/* draggable */\n.flickity-enabled.is-draggable {\n  -webkit-tap-highlight-color: transparent;\n          tap-highlight-color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.flickity-enabled.is-draggable .flickity-viewport {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n/* ---- flickity-button ---- */\n.flickity-button {\n  position: absolute;\n  background: hsla(0, 0%, 100%, 0.75);\n  border: none;\n  color: #333;\n}\n.flickity-button:hover {\n  background: white;\n  cursor: pointer;\n}\n.flickity-button:focus {\n  outline: none;\n  -webkit-box-shadow: 0 0 0 5px #19F;\n          box-shadow: 0 0 0 5px #19F;\n}\n.flickity-button:active {\n  opacity: 0.6;\n}\n.flickity-button:disabled {\n  opacity: 0.3;\n  cursor: auto;\n  /* prevent disabled button from capturing pointer up event. #716 */\n  pointer-events: none;\n}\n.flickity-button-icon {\n  fill: currentColor;\n}\n\n/* ---- previous/next buttons ---- */\n.flickity-prev-next-button {\n  top: 50%;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  /* vertically center */\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n.flickity-prev-next-button.previous { left: 10px;\n}\n.flickity-prev-next-button.next { right: 10px;\n}\n/* right to left */\n.flickity-rtl .flickity-prev-next-button.previous {\n  left: auto;\n  right: 10px;\n}\n.flickity-rtl .flickity-prev-next-button.next {\n  right: auto;\n  left: 10px;\n}\n.flickity-prev-next-button .flickity-button-icon {\n  position: absolute;\n  left: 20%;\n  top: 20%;\n  width: 60%;\n  height: 60%;\n}\n\n/* ---- page dots ---- */\n.flickity-page-dots {\n  position: absolute;\n  width: 100%;\n  bottom: -25px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n  line-height: 1;\n}\n.flickity-rtl .flickity-page-dots { direction: rtl;\n}\n.flickity-page-dots .dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 0 8px;\n  background: #333;\n  border-radius: 50%;\n  opacity: 0.25;\n  cursor: pointer;\n}\n.flickity-page-dots .dot.is-selected {\n  opacity: 1;\n}\n", "", {"version":3,"sources":["C:/xampp/htdocs/sector.local/node_modules/flickity/dist/flickity.css"],"names":[],"mappings":"AAAA;;iDAEiD;AAEjD;EACE,mBAAmB;CACpB;AAED,0BAA0B,cAAc;CAAE;AAE1C;EACE,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;CACd;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;;AAED,eAAe;AAEf;EACE,yCAAyC;UACjC,iCAAiC;EACzC,0BAA0B;KACvB,uBAAuB;MACtB,sBAAsB;UAClB,kBAAkB;CAC3B;AAED;EACE,aAAa;EACb,qBAAqB;EACrB,aAAa;CACd;AAED;EACE,yBAAyB;EACzB,iBAAiB;CAClB;;AAED,+BAA+B;AAE/B;EACE,mBAAmB;EACnB,oCAAoC;EACpC,aAAa;EACb,YAAY;CACb;AAED;EACE,kBAAkB;EAClB,gBAAgB;CACjB;AAED;EACE,cAAc;EACd,mCAA2B;UAA3B,2BAA2B;CAC5B;AAED;EACE,aAAa;CACd;AAED;EACE,aAAa;EACb,aAAa;EACb,mEAAmE;EACnE,qBAAqB;CACtB;AAED;EACE,mBAAmB;CACpB;;AAED,qCAAqC;AAErC;EACE,SAAS;EACT,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,oCAA4B;UAA5B,4BAA4B;CAC7B;AAED,sCAAsC,WAAW;CAAE;AACnD,kCAAkC,YAAY;CAAE;AAChD,mBAAmB;AACnB;EACE,WAAW;EACX,YAAY;CACb;AACD;EACE,YAAY;EACZ,WAAW;CACZ;AAED;EACE,mBAAmB;EACnB,UAAU;EACV,SAAS;EACT,WAAW;EACX,YAAY;CACb;;AAED,yBAAyB;AAEzB;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;CAChB;AAED,oCAAoC,eAAe;CAAE;AAErD;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,cAAc;EACd,gBAAgB;CACjB;AAED;EACE,WAAW;CACZ","file":"flickity.css","sourcesContent":["/*! Flickity v2.2.0\nhttps://flickity.metafizzy.co\n---------------------------------------------- */\n\n.flickity-enabled {\n  position: relative;\n}\n\n.flickity-enabled:focus { outline: none; }\n\n.flickity-viewport {\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n}\n\n.flickity-slider {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n/* draggable */\n\n.flickity-enabled.is-draggable {\n  -webkit-tap-highlight-color: transparent;\n          tap-highlight-color: transparent;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.flickity-enabled.is-draggable .flickity-viewport {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n/* ---- flickity-button ---- */\n\n.flickity-button {\n  position: absolute;\n  background: hsla(0, 0%, 100%, 0.75);\n  border: none;\n  color: #333;\n}\n\n.flickity-button:hover {\n  background: white;\n  cursor: pointer;\n}\n\n.flickity-button:focus {\n  outline: none;\n  box-shadow: 0 0 0 5px #19F;\n}\n\n.flickity-button:active {\n  opacity: 0.6;\n}\n\n.flickity-button:disabled {\n  opacity: 0.3;\n  cursor: auto;\n  /* prevent disabled button from capturing pointer up event. #716 */\n  pointer-events: none;\n}\n\n.flickity-button-icon {\n  fill: currentColor;\n}\n\n/* ---- previous/next buttons ---- */\n\n.flickity-prev-next-button {\n  top: 50%;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  /* vertically center */\n  transform: translateY(-50%);\n}\n\n.flickity-prev-next-button.previous { left: 10px; }\n.flickity-prev-next-button.next { right: 10px; }\n/* right to left */\n.flickity-rtl .flickity-prev-next-button.previous {\n  left: auto;\n  right: 10px;\n}\n.flickity-rtl .flickity-prev-next-button.next {\n  right: auto;\n  left: 10px;\n}\n\n.flickity-prev-next-button .flickity-button-icon {\n  position: absolute;\n  left: 20%;\n  top: 20%;\n  width: 60%;\n  height: 60%;\n}\n\n/* ---- page dots ---- */\n\n.flickity-page-dots {\n  position: absolute;\n  width: 100%;\n  bottom: -25px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  text-align: center;\n  line-height: 1;\n}\n\n.flickity-rtl .flickity-page-dots { direction: rtl; }\n\n.flickity-page-dots .dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 0 8px;\n  background: #333;\n  border-radius: 50%;\n  opacity: 0.25;\n  cursor: pointer;\n}\n\n.flickity-page-dots .dot.is-selected {\n  opacity: 1;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "./node_modules/flickity/js/add-remove-cell.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// add, remove cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/flickity/js/flickity.js"),
      __webpack_require__("./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {

'use strict';

// append cells to a document fragment
function getCellsFragment( cells ) {
  var fragment = document.createDocumentFragment();
  cells.forEach( function( cell ) {
    fragment.appendChild( cell.element );
  });
  return fragment;
}

// -------------------------- add/remove cell prototype -------------------------- //

var proto = Flickity.prototype;

/**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
proto.insert = function( elems, index ) {
  var cells = this._makeCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }
  var len = this.cells.length;
  // default to append
  index = index === undefined ? len : index;
  // add cells with document fragment
  var fragment = getCellsFragment( cells );
  // append to slider
  var isAppend = index == len;
  if ( isAppend ) {
    this.slider.appendChild( fragment );
  } else {
    var insertCellElement = this.cells[ index ].element;
    this.slider.insertBefore( fragment, insertCellElement );
  }
  // add to this.cells
  if ( index === 0 ) {
    // prepend, add to start
    this.cells = cells.concat( this.cells );
  } else if ( isAppend ) {
    // append, add to end
    this.cells = this.cells.concat( cells );
  } else {
    // insert in this.cells
    var endCells = this.cells.splice( index, len - index );
    this.cells = this.cells.concat( cells ).concat( endCells );
  }

  this._sizeCells( cells );
  this.cellChange( index, true );
};

proto.append = function( elems ) {
  this.insert( elems, this.cells.length );
};

proto.prepend = function( elems ) {
  this.insert( elems, 0 );
};

/**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
proto.remove = function( elems ) {
  var cells = this.getCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }

  var minCellIndex = this.cells.length - 1;
  // remove cells from collection & DOM
  cells.forEach( function( cell ) {
    cell.remove();
    var index = this.cells.indexOf( cell );
    minCellIndex = Math.min( index, minCellIndex );
    utils.removeFrom( this.cells, cell );
  }, this );

  this.cellChange( minCellIndex, true );
};

/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
proto.cellSizeChange = function( elem ) {
  var cell = this.getCell( elem );
  if ( !cell ) {
    return;
  }
  cell.getSize();

  var index = this.cells.indexOf( cell );
  this.cellChange( index );
};

/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 */
proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
  var prevSelectedElem = this.selectedElement;
  this._positionCells( changedCellIndex );
  this._getWrapShiftCells();
  this.setGallerySize();
  // update selectedIndex
  // try to maintain position & select previous selected element
  var cell = this.getCell( prevSelectedElem );
  if ( cell ) {
    this.selectedIndex = this.getCellSlideIndex( cell );
  }
  this.selectedIndex = Math.min( this.slides.length - 1, this.selectedIndex );

  this.emitEvent( 'cellChange', [ changedCellIndex ] );
  // position slider
  this.select( this.selectedIndex );
  // do not position slider after lazy load
  if ( isPositioningSlider ) {
    this.positionSliderAtSelected();
  }
};

// -----  ----- //

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/animate.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// animate
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( utils ) {
      return factory( window, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.animatePrototype = factory(
      window,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, utils ) {

'use strict';

// -------------------------- animate -------------------------- //

var proto = {};

proto.startAnimation = function() {
  if ( this.isAnimating ) {
    return;
  }

  this.isAnimating = true;
  this.restingFrames = 0;
  this.animate();
};

proto.animate = function() {
  this.applyDragForce();
  this.applySelectedAttraction();

  var previousX = this.x;

  this.integratePhysics();
  this.positionSlider();
  this.settle( previousX );
  // animate next frame
  if ( this.isAnimating ) {
    var _this = this;
    requestAnimationFrame( function animateFrame() {
      _this.animate();
    });
  }
};

proto.positionSlider = function() {
  var x = this.x;
  // wrap position around
  if ( this.options.wrapAround && this.cells.length > 1 ) {
    x = utils.modulo( x, this.slideableWidth );
    x = x - this.slideableWidth;
    this.shiftWrapCells( x );
  }

  this.setTranslateX( x, this.isAnimating );
  this.dispatchScrollEvent();
};

proto.setTranslateX = function( x, is3d ) {
  x += this.cursorPosition;
  // reverse if right-to-left and using transform
  x = this.options.rightToLeft ? -x : x;
  var translateX = this.getPositionValue( x );
  // use 3D tranforms for hardware acceleration on iOS
  // but use 2D when settled, for better font-rendering
  this.slider.style.transform = is3d ?
    'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
};

proto.dispatchScrollEvent = function() {
  var firstSlide = this.slides[0];
  if ( !firstSlide ) {
    return;
  }
  var positionX = -this.x - firstSlide.target;
  var progress = positionX / this.slidesWidth;
  this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
};

proto.positionSliderAtSelected = function() {
  if ( !this.cells.length ) {
    return;
  }
  this.x = -this.selectedSlide.target;
  this.velocity = 0; // stop wobble
  this.positionSlider();
};

proto.getPositionValue = function( position ) {
  if ( this.options.percentPosition ) {
    // percent position, round to 2 digits, like 12.34%
    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
  } else {
    // pixel positioning
    return Math.round( position ) + 'px';
  }
};

proto.settle = function( previousX ) {
  // keep track of frames where x hasn't moved
  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
    this.restingFrames++;
  }
  // stop animating if resting for 3 or more frames
  if ( this.restingFrames > 2 ) {
    this.isAnimating = false;
    delete this.isFreeScrolling;
    // render position with translateX when settled
    this.positionSlider();
    this.dispatchEvent( 'settle', null, [ this.selectedIndex ] );
  }
};

proto.shiftWrapCells = function( x ) {
  // shift before cells
  var beforeGap = this.cursorPosition + x;
  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
  // shift after cells
  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
  this._shiftCells( this.afterShiftCells, afterGap, 1 );
};

proto._shiftCells = function( cells, gap, shift ) {
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    var cellShift = gap > 0 ? shift : 0;
    cell.wrapShift( cellShift );
    gap -= cell.size.outerWidth;
  }
};

proto._unshiftCells = function( cells ) {
  if ( !cells || !cells.length ) {
    return;
  }
  for ( var i=0; i < cells.length; i++ ) {
    cells[i].wrapShift( 0 );
  }
};

// -------------------------- physics -------------------------- //

proto.integratePhysics = function() {
  this.x += this.velocity;
  this.velocity *= this.getFrictionFactor();
};

proto.applyForce = function( force ) {
  this.velocity += force;
};

proto.getFrictionFactor = function() {
  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
};

proto.getRestingPosition = function() {
  // my thanks to Steven Wittens, who simplified this math greatly
  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
};

proto.applyDragForce = function() {
  if ( !this.isDraggable || !this.isPointerDown ) {
    return;
  }
  // change the position to drag position by applying force
  var dragVelocity = this.dragX - this.x;
  var dragForce = dragVelocity - this.velocity;
  this.applyForce( dragForce );
};

proto.applySelectedAttraction = function() {
  // do not attract if pointer down or no slides
  var dragDown = this.isDraggable && this.isPointerDown;
  if ( dragDown || this.isFreeScrolling || !this.slides.length ) {
    return;
  }
  var distance = this.selectedSlide.target * -1 - this.x;
  var force = distance * this.options.selectedAttraction;
  this.applyForce( force );
};

return proto;

}));


/***/ }),

/***/ "./node_modules/flickity/js/cell.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity.Cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/get-size/get-size.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( getSize ) {
      return factory( window, getSize );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('get-size')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Cell = factory(
      window,
      window.getSize
    );
  }

}( window, function factory( window, getSize ) {

'use strict';

function Cell( elem, parent ) {
  this.element = elem;
  this.parent = parent;

  this.create();
}

var proto = Cell.prototype;

proto.create = function() {
  this.element.style.position = 'absolute';
  this.element.setAttribute( 'aria-hidden', 'true' );
  this.x = 0;
  this.shift = 0;
};

proto.destroy = function() {
  // reset style
  this.unselect();
  this.element.style.position = '';
  var side = this.parent.originSide;
  this.element.style[ side ] = '';
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

proto.setPosition = function( x ) {
  this.x = x;
  this.updateTarget();
  this.renderPosition( x );
};

// setDefaultTarget v1 method, backwards compatibility, remove in v3
proto.updateTarget = proto.setDefaultTarget = function() {
  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
  this.target = this.x + this.size[ marginProperty ] +
    this.size.width * this.parent.cellAlign;
};

proto.renderPosition = function( x ) {
  // render position of cell with in slider
  var side = this.parent.originSide;
  this.element.style[ side ] = this.parent.getPositionValue( x );
};

proto.select = function() {
  this.element.classList.add('is-selected');
  this.element.removeAttribute('aria-hidden');
};

proto.unselect = function() {
  this.element.classList.remove('is-selected');
  this.element.setAttribute( 'aria-hidden', 'true' );
};

/**
 * @param {Integer} factor - 0, 1, or -1
**/
proto.wrapShift = function( shift ) {
  this.shift = shift;
  this.renderPosition( this.x + this.parent.slideableWidth * shift );
};

proto.remove = function() {
  this.element.parentNode.removeChild( this.element );
};

return Cell;

}));


/***/ }),

/***/ "./node_modules/flickity/js/drag.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// drag
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/flickity/js/flickity.js"),
      __webpack_require__("./node_modules/unidragger/unidragger.js"),
      __webpack_require__("./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, Unidragger, utils ) {
      return factory( window, Flickity, Unidragger, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unidragger'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.Unidragger,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unidragger, utils ) {

'use strict';

// ----- defaults ----- //

utils.extend( Flickity.defaults, {
  draggable: '>1',
  dragThreshold: 3,
});

// ----- create ----- //

Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

var proto = Flickity.prototype;
utils.extend( proto, Unidragger.prototype );
proto._touchActionValue = 'pan-y';

// --------------------------  -------------------------- //

var isTouch = 'createTouch' in document;
var isTouchmoveScrollCanceled = false;

proto._createDrag = function() {
  this.on( 'activate', this.onActivateDrag );
  this.on( 'uiChange', this._uiChangeDrag );
  this.on( 'deactivate', this.onDeactivateDrag );
  this.on( 'cellChange', this.updateDraggable );
  // TODO updateDraggable on resize? if groupCells & slides change
  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
  // #457, RubaXa/Sortable#973
  if ( isTouch && !isTouchmoveScrollCanceled ) {
    window.addEventListener( 'touchmove', function() {});
    isTouchmoveScrollCanceled = true;
  }
};

proto.onActivateDrag = function() {
  this.handles = [ this.viewport ];
  this.bindHandles();
  this.updateDraggable();
};

proto.onDeactivateDrag = function() {
  this.unbindHandles();
  this.element.classList.remove('is-draggable');
};

proto.updateDraggable = function() {
  // disable dragging if less than 2 slides. #278
  if ( this.options.draggable == '>1' ) {
    this.isDraggable = this.slides.length > 1;
  } else {
    this.isDraggable = this.options.draggable;
  }
  if ( this.isDraggable ) {
    this.element.classList.add('is-draggable');
  } else {
    this.element.classList.remove('is-draggable');
  }
};

// backwards compatibility
proto.bindDrag = function() {
  this.options.draggable = true;
  this.updateDraggable();
};

proto.unbindDrag = function() {
  this.options.draggable = false;
  this.updateDraggable();
};

proto._uiChangeDrag = function() {
  delete this.isFreeScrolling;
};

// -------------------------- pointer events -------------------------- //

proto.pointerDown = function( event, pointer ) {
  if ( !this.isDraggable ) {
    this._pointerDownDefault( event, pointer );
    return;
  }
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }

  this._pointerDownPreventDefault( event );
  this.pointerDownFocus( event );
  // blur
  if ( document.activeElement != this.element ) {
    // do not blur if already focused
    this.pointerDownBlur();
  }

  // stop if it was moving
  this.dragX = this.x;
  this.viewport.classList.add('is-pointer-down');
  // track scrolling
  this.pointerDownScroll = getScrollPosition();
  window.addEventListener( 'scroll', this );

  this._pointerDownDefault( event, pointer );
};

// default pointerDown logic, used for staticClick
proto._pointerDownDefault = function( event, pointer ) {
  // track start event position
  // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
  this.pointerDownPointer = {
    pageX: pointer.pageX,
    pageY: pointer.pageY,
  };
  // bind move and end events
  this._bindPostStartEvents( event );
  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
};

var focusNodes = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true,
};

proto.pointerDownFocus = function( event ) {
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isFocusNode ) {
    this.focus();
  }
};

proto._pointerDownPreventDefault = function( event ) {
  var isTouchStart = event.type == 'touchstart';
  var isTouchPointer = event.pointerType == 'touch';
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isTouchStart && !isTouchPointer && !isFocusNode ) {
    event.preventDefault();
  }
};

// ----- move ----- //

proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > this.options.dragThreshold;
};

// ----- up ----- //

proto.pointerUp = function( event, pointer ) {
  delete this.isTouchScrolling;
  this.viewport.classList.remove('is-pointer-down');
  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
  this._dragPointerUp( event, pointer );
};

proto.pointerDone = function() {
  window.removeEventListener( 'scroll', this );
  delete this.pointerDownScroll;
};

// -------------------------- dragging -------------------------- //

proto.dragStart = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  this.dragStartPosition = this.x;
  this.startAnimation();
  window.removeEventListener( 'scroll', this );
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
};

proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  if ( !this.isDraggable ) {
    return;
  }
  event.preventDefault();

  this.previousDragX = this.dragX;
  // reverse if right-to-left
  var direction = this.options.rightToLeft ? -1 : 1;
  if ( this.options.wrapAround ) {
    // wrap around move. #589
    moveVector.x = moveVector.x % this.slideableWidth;
  }
  var dragX = this.dragStartPosition + moveVector.x * direction;

  if ( !this.options.wrapAround && this.slides.length ) {
    // slow drag
    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
  }

  this.dragX = dragX;

  this.dragMoveTime = new Date();
  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

proto.dragEnd = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  if ( this.options.freeScroll ) {
    this.isFreeScrolling = true;
  }
  // set selectedIndex based on where flick will end up
  var index = this.dragEndRestingSelect();

  if ( this.options.freeScroll && !this.options.wrapAround ) {
    // if free-scroll & not wrap around
    // do not free-scroll if going outside of bounding slides
    // so bounding slides can attract slider, and keep it in bounds
    var restingX = this.getRestingPosition();
    this.isFreeScrolling = -restingX > this.slides[0].target &&
      -restingX < this.getLastSlide().target;
  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
    // boost selection if selected index has not changed
    index += this.dragEndBoostSelect();
  }
  delete this.previousDragX;
  // apply selection
  // TODO refactor this, selecting here feels weird
  // HACK, set flag so dragging stays in correct direction
  this.isDragSelect = this.options.wrapAround;
  this.select( index );
  delete this.isDragSelect;
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

proto.dragEndRestingSelect = function() {
  var restingX = this.getRestingPosition();
  // how far away from selected slide
  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
  // get closet resting going up and going down
  var positiveResting = this._getClosestResting( restingX, distance, 1 );
  var negativeResting = this._getClosestResting( restingX, distance, -1 );
  // use closer resting for wrap-around
  var index = positiveResting.distance < negativeResting.distance ?
    positiveResting.index : negativeResting.index;
  return index;
};

/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
proto._getClosestResting = function( restingX, distance, increment ) {
  var index = this.selectedIndex;
  var minDistance = Infinity;
  var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
  while ( condition( distance, minDistance ) ) {
    // measure distance to next cell
    index += increment;
    minDistance = distance;
    distance = this.getSlideDistance( -restingX, index );
    if ( distance === null ) {
      break;
    }
    distance = Math.abs( distance );
  }
  return {
    distance: minDistance,
    // selected was previous index
    index: index - increment
  };
};

/**
 * measure distance between x and a slide target
 * @param {Number} x
 * @param {Integer} index - slide index
 */
proto.getSlideDistance = function( x, index ) {
  var len = this.slides.length;
  // wrap around if at least 2 slides
  var isWrapAround = this.options.wrapAround && len > 1;
  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
  var slide = this.slides[ slideIndex ];
  if ( !slide ) {
    return null;
  }
  // add distance for wrap-around slides
  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
  return x - ( slide.target + wrap );
};

proto.dragEndBoostSelect = function() {
  // do not boost if no previousDragX or dragMoveTime
  if ( this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100 ) {
    return 0;
  }

  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
  var delta = this.previousDragX - this.dragX;
  if ( distance > 0 && delta > 0 ) {
    // boost to next if moving towards the right, and positive velocity
    return 1;
  } else if ( distance < 0 && delta < 0 ) {
    // boost to previous if moving towards the left, and negative velocity
    return -1;
  }
  return 0;
};

// ----- staticClick ----- //

proto.staticClick = function( event, pointer ) {
  // get clickedCell, if cell was clicked
  var clickedCell = this.getParentCell( event.target );
  var cellElem = clickedCell && clickedCell.element;
  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
};

// ----- scroll ----- //

proto.onscroll = function() {
  var scroll = getScrollPosition();
  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
  // cancel click/tap if scroll is too much
  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
    this._pointerDone();
  }
};

// ----- utils ----- //

function getScrollPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}

// -----  ----- //

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/flickity.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Flickity main
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/ev-emitter/ev-emitter.js"),
      __webpack_require__("./node_modules/get-size/get-size.js"),
      __webpack_require__("./node_modules/fizzy-ui-utils/utils.js"),
      __webpack_require__("./node_modules/flickity/js/cell.js"),
      __webpack_require__("./node_modules/flickity/js/slide.js"),
      __webpack_require__("./node_modules/flickity/js/animate.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./cell'),
      require('./slide'),
      require('./animate')
    );
  } else {
    // browser global
    var _Flickity = window.Flickity;

    window.Flickity = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      _Flickity.Cell,
      _Flickity.Slide,
      _Flickity.animatePrototype
    );
  }

}( window, function factory( window, EvEmitter, getSize,
  utils, Cell, Slide, animatePrototype ) {

'use strict';

// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // do not initialize twice on same element
  if ( this.element.flickityGUID ) {
    var instance = instances[ this.element.flickityGUID ];
    instance.option( options );
    return instance;
  }

  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  // adaptiveHeight: false,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  namespaceJQueryEvents: true,
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

var proto = Flickity.prototype;
// inherit EventEmitter
utils.extend( proto, EvEmitter.prototype );

proto._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  this.viewport = document.createElement('div');
  this.viewport.className = 'flickity-viewport';
  this._createSlider();

  if ( this.options.resize || this.options.watchCSS ) {
    window.addEventListener( 'resize', this );
  }

  // add listeners from on option
  for ( var eventName in this.options.on ) {
    var listener = this.options.on[ eventName ];
    this.on( eventName, listener );
  }

  Flickity.createMethods.forEach( function( method ) {
    this[ method ]();
  }, this );

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

proto.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.element.classList.add('flickity-enabled');
  if ( this.options.rightToLeft ) {
    this.element.classList.add('flickity-rtl');
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );
  moveElements( cellElems, this.slider );
  this.viewport.appendChild( this.slider );
  this.element.appendChild( this.viewport );
  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    this.element.addEventListener( 'keydown', this );
  }

  this.emitEvent('activate');
  this.selectInitialIndex();
  // flag for initial activation, for using initialIndex
  this.isInitActivated = true;
  // ready event. #493
  this.dispatchEvent('ready');
};

// slider positions the cells
proto._createSlider = function() {
  // slider element does all the positioning
  var slider = document.createElement('div');
  slider.className = 'flickity-slider';
  slider.style[ this.originSide ] = 0;
  this.slider = slider;
};

proto._filterFindCellElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
proto.reloadCells = function() {
  // collection of item elements
  this.cells = this._makeCells( this.slider.children );
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
proto._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = cellElems.map( function( cellElem ) {
    return new Cell( cellElem, this );
  }, this );

  return cells;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.getLastSlide = function() {
  return this.slides[ this.slides.length - 1 ];
};

// positions all cells
proto.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
proto._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var len = this.cells.length;
  for ( var i=index; i < len; i++ ) {
    var cell = this.cells[i];
    cell.setPosition( cellX );
    cellX += cell.size.outerWidth;
    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // slides
  this.updateSlides();
  // contain slides target
  this._containSlides();
  // update slidesWidth
  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
proto._sizeCells = function( cells ) {
  cells.forEach( function( cell ) {
    cell.getSize();
  });
};

// --------------------------  -------------------------- //

proto.updateSlides = function() {
  this.slides = [];
  if ( !this.cells.length ) {
    return;
  }

  var slide = new Slide( this );
  this.slides.push( slide );
  var isOriginLeft = this.originSide == 'left';
  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

  var canCellFit = this._getCanCellFit();

  this.cells.forEach( function( cell, i ) {
    // just add cell if first cell in slide
    if ( !slide.cells.length ) {
      slide.addCell( cell );
      return;
    }

    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
      ( cell.size.outerWidth - cell.size[ nextMargin ] );

    if ( canCellFit.call( this, i, slideWidth ) ) {
      slide.addCell( cell );
    } else {
      // doesn't fit, new slide
      slide.updateTarget();

      slide = new Slide( this );
      this.slides.push( slide );
      slide.addCell( cell );
    }
  }, this );
  // last slide
  slide.updateTarget();
  // update .selectedSlide
  this.updateSelectedSlide();
};

proto._getCanCellFit = function() {
  var groupCells = this.options.groupCells;
  if ( !groupCells ) {
    return function() {
      return false;
    };
  } else if ( typeof groupCells == 'number' ) {
    // group by number. 3 -> [0,1,2], [3,4,5], ...
    var number = parseInt( groupCells, 10 );
    return function( i ) {
      return ( i % number ) !== 0;
    };
  }
  // default, group by width of slide
  // parse '75%
  var percentMatch = typeof groupCells == 'string' &&
    groupCells.match(/^(\d+)%$/);
  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
  return function( i, slideWidth ) {
    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
  };
};

// alias _init for jQuery plugin .flickity()
proto._init =
proto.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

proto.getSize = function() {
  this.size = getSize( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5
  },
  left: {
    left: 0,
    right: 1
  },
  right: {
    right: 0,
    left: 1
  }
};

proto.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

proto.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    var height = this.options.adaptiveHeight && this.selectedSlide ?
      this.selectedSlide.height : this.maxCellHeight;
    this.viewport.style.height = height + 'px';
  }
};

proto._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

proto._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell = this.cells[ cellIndex ];
    if ( !cell ) {
      break;
    }
    cells.push( cell );
    cellIndex += increment;
    gapX -= cell.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
proto._containSlides = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var isRightToLeft = this.options.rightToLeft;
  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // bounds
  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // contain each cell target
  this.slides.forEach( function( slide ) {
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      slide.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      slide.target = Math.max( slide.target, beginBound );
      slide.target = Math.min( slide.target, endBound );
    }
  }, this );
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    // default trigger with type if no event
    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
    var $event = type;
    if ( event ) {
      // create jQuery event
      var jQEvent = jQuery.Event( event );
      jQEvent.type = type;
      $event = jQEvent;
    }
    this.$element.trigger( $event, args );
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
proto.select = function( index, isWrap, isInstant ) {
  if ( !this.isActive ) {
    return;
  }
  index = parseInt( index, 10 );
  this._wrapSelect( index );

  if ( this.options.wrapAround || isWrap ) {
    index = utils.modulo( index, this.slides.length );
  }
  // bail if invalid index
  if ( !this.slides[ index ] ) {
    return;
  }
  var prevIndex = this.selectedIndex;
  this.selectedIndex = index;
  this.updateSelectedSlide();
  if ( isInstant ) {
    this.positionSliderAtSelected();
  } else {
    this.startAnimation();
  }
  if ( this.options.adaptiveHeight ) {
    this.setGallerySize();
  }
  // events
  this.dispatchEvent( 'select', null, [ index ] );
  // change event if new index
  if ( index != prevIndex ) {
    this.dispatchEvent( 'change', null, [ index ] );
  }
  // old v1 event name, remove in v3
  this.dispatchEvent('cellSelect');
};

// wraps position for wrapAround, to move to closest slide. #113
proto._wrapSelect = function( index ) {
  var len = this.slides.length;
  var isWrapping = this.options.wrapAround && len > 1;
  if ( !isWrapping ) {
    return index;
  }
  var wrapIndex = utils.modulo( index, len );
  // go to shortest
  var delta = Math.abs( wrapIndex - this.selectedIndex );
  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
  if ( !this.isDragSelect && backWrapDelta < delta ) {
    index += len;
  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
    index -= len;
  }
  // wrap position so slider is within normal area
  if ( index < 0 ) {
    this.x -= this.slideableWidth;
  } else if ( index >= len ) {
    this.x += this.slideableWidth;
  }
};

proto.previous = function( isWrap, isInstant ) {
  this.select( this.selectedIndex - 1, isWrap, isInstant );
};

proto.next = function( isWrap, isInstant ) {
  this.select( this.selectedIndex + 1, isWrap, isInstant );
};

proto.updateSelectedSlide = function() {
  var slide = this.slides[ this.selectedIndex ];
  // selectedIndex could be outside of slides, if triggered before resize()
  if ( !slide ) {
    return;
  }
  // unselect previous selected slide
  this.unselectSelectedSlide();
  // update new selected slide
  this.selectedSlide = slide;
  slide.select();
  this.selectedCells = slide.cells;
  this.selectedElements = slide.getCellElements();
  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
  // Remove in v3?
  this.selectedCell = slide.cells[0];
  this.selectedElement = this.selectedElements[0];
};

proto.unselectSelectedSlide = function() {
  if ( this.selectedSlide ) {
    this.selectedSlide.unselect();
  }
};

proto.selectInitialIndex = function() {
  var initialIndex = this.options.initialIndex;
  // already activated, select previous selectedIndex
  if ( this.isInitActivated ) {
    this.select( this.selectedIndex, false, true );
    return;
  }
  // select with selector string
  if ( initialIndex && typeof initialIndex == 'string' ) {
    var cell = this.queryCell( initialIndex );
    if ( cell ) {
      this.selectCell( initialIndex, false, true );
      return;
    }
  }

  var index = 0;
  // select with number
  if ( initialIndex && this.slides[ initialIndex ] ) {
    index = initialIndex;
  }
  // select instantly
  this.select( index, false, true );
};

/**
 * select slide from number or cell element
 * @param {Element or Number} elem
 */
proto.selectCell = function( value, isWrap, isInstant ) {
  // get cell
  var cell = this.queryCell( value );
  if ( !cell ) {
    return;
  }

  var index = this.getCellSlideIndex( cell );
  this.select( index, isWrap, isInstant );
};

proto.getCellSlideIndex = function( cell ) {
  // get index of slides that has cell
  for ( var i=0; i < this.slides.length; i++ ) {
    var slide = this.slides[i];
    var index = slide.cells.indexOf( cell );
    if ( index != -1 ) {
      return i;
    }
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
proto.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i=0; i < this.cells.length; i++ ) {
    var cell = this.cells[i];
    if ( cell.element == elem ) {
      return cell;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
proto.getCells = function( elems ) {
  elems = utils.makeArray( elems );
  var cells = [];
  elems.forEach( function( elem ) {
    var cell = this.getCell( elem );
    if ( cell ) {
      cells.push( cell );
    }
  }, this );
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
proto.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell = this.getCell( elem );
  if ( cell ) {
    return cell;
  }
  // try to get parent cell elem
  elem = utils.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
proto.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return this.selectedSlide.getCellElements();
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.slides.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
    var slide = this.slides[ slideIndex ];
    if ( slide ) {
      cellElems = cellElems.concat( slide.getCellElements() );
    }
  }
  return cellElems;
};

/**
 * select slide from number or cell element
 * @param {Element, Selector String, or Number} selector
 */
proto.queryCell = function( selector ) {
  if ( typeof selector == 'number' ) {
    // use number as index
    return this.cells[ selector ];
  }
  if ( typeof selector == 'string' ) {
    // do not select invalid selectors from hash: #123, #/. #791
    if ( selector.match(/^[#\.]?[\d\/]/) ) {
      return;
    }
    // use string as selector, get element
    selector = this.element.querySelector( selector );
  }
  // get cell from element
  return this.getCell( selector );
};

// -------------------------- events -------------------------- //

proto.uiChange = function() {
  this.emitEvent('uiChange');
};

// keep focus on element when child UI elements are clicked
proto.childUIPointerDown = function( event ) {
  // HACK iOS does not allow touch events to bubble up?!
  if ( event.type != 'touchstart' ) {
    event.preventDefault();
  }
  this.focus();
};

// ----- resize ----- //

proto.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils.debounceMethod( Flickity, 'onresize', 150 );

proto.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent('resize');
  // update selected index for group slides, instant
  // TODO: position can be lost between groups of various numbers
  var selectedElement = this.selectedElements && this.selectedElements[0];
  this.selectCell( selectedElement, false, true );
};

// watches the :after property, activates/deactivates
proto.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
proto.onkeydown = function( event ) {
  // only work if element is in focus
  var isNotFocused = document.activeElement && document.activeElement != this.element;
  if ( !this.options.accessibility ||isNotFocused ) {
    return;
  }

  var handler = Flickity.keyboardHandlers[ event.keyCode ];
  if ( handler ) {
    handler.call( this );
  }
};

Flickity.keyboardHandlers = {
  // left arrow
  37: function() {
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  },
  // right arrow
  39: function() {
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  },
};

// ----- focus ----- //

proto.focus = function() {
  // TODO remove scrollTo once focus options gets more support
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
  var prevScrollY = window.pageYOffset;
  this.element.focus({ preventScroll: true });
  // hack to fix scroll jump after focus, #76
  if ( window.pageYOffset != prevScrollY ) {
    window.scrollTo( window.pageXOffset, prevScrollY );
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
proto.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  this.element.classList.remove('flickity-enabled');
  this.element.classList.remove('flickity-rtl');
  this.unselectSelectedSlide();
  // destroy cells
  this.cells.forEach( function( cell ) {
    cell.destroy();
  });
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    this.element.removeEventListener( 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emitEvent('deactivate');
};

proto.destroy = function() {
  this.deactivate();
  window.removeEventListener( 'resize', this );
  this.allOff();
  this.emitEvent('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
Flickity.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

// set internal jQuery, for Webpack + jQuery v3, #478
Flickity.setJQuery = function( jq ) {
  jQuery = jq;
};

Flickity.Cell = Cell;
Flickity.Slide = Slide;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Flickity v2.2.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/flickity/js/flickity.js"),
      __webpack_require__("./node_modules/flickity/js/drag.js"),
      __webpack_require__("./node_modules/flickity/js/prev-next-button.js"),
      __webpack_require__("./node_modules/flickity/js/page-dots.js"),
      __webpack_require__("./node_modules/flickity/js/player.js"),
      __webpack_require__("./node_modules/flickity/js/add-remove-cell.js"),
      __webpack_require__("./node_modules/flickity/js/lazyload.js")
    ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('./flickity'),
      require('./drag'),
      require('./prev-next-button'),
      require('./page-dots'),
      require('./player'),
      require('./add-remove-cell'),
      require('./lazyload')
    );
  }

})( window, function factory( Flickity ) {
  /*jshint strict: false*/
  return Flickity;
});


/***/ }),

/***/ "./node_modules/flickity/js/lazyload.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// lazyload
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/flickity/js/flickity.js"),
      __webpack_require__("./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {
'use strict';

Flickity.createMethods.push('_createLazyload');
var proto = Flickity.prototype;

proto._createLazyload = function() {
  this.on( 'select', this.lazyLoad );
};

proto.lazyLoad = function() {
  var lazyLoad = this.options.lazyLoad;
  if ( !lazyLoad ) {
    return;
  }
  // get adjacent cells, use lazyLoad option for adjacent count
  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
  var cellElems = this.getAdjacentCellElements( adjCount );
  // get lazy images in those cells
  var lazyImages = [];
  cellElems.forEach( function( cellElem ) {
    var lazyCellImages = getCellLazyImages( cellElem );
    lazyImages = lazyImages.concat( lazyCellImages );
  });
  // load lazy images
  lazyImages.forEach( function( img ) {
    new LazyLoader( img, this );
  }, this );
};

function getCellLazyImages( cellElem ) {
  // check if cell element is lazy image
  if ( cellElem.nodeName == 'IMG' ) {
    var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
    var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
    var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');
    if ( lazyloadAttr || srcAttr || srcsetAttr ) {
      return [ cellElem ];
    }
  }
  // select lazy images in cell
  var lazySelector = 'img[data-flickity-lazyload], ' +
    'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
  var imgs = cellElem.querySelectorAll( lazySelector );
  return utils.makeArray( imgs );
}

// -------------------------- LazyLoader -------------------------- //

/**
 * class to handle loading images
 */
function LazyLoader( img, flickity ) {
  this.img = img;
  this.flickity = flickity;
  this.load();
}

LazyLoader.prototype.handleEvent = utils.handleEvent;

LazyLoader.prototype.load = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  // get src & srcset
  var src = this.img.getAttribute('data-flickity-lazyload') ||
    this.img.getAttribute('data-flickity-lazyload-src');
  var srcset = this.img.getAttribute('data-flickity-lazyload-srcset');
  // set src & serset
  this.img.src = src;
  if ( srcset ) {
    this.img.setAttribute( 'srcset', srcset );
  }
  // remove attr
  this.img.removeAttribute('data-flickity-lazyload');
  this.img.removeAttribute('data-flickity-lazyload-src');
  this.img.removeAttribute('data-flickity-lazyload-srcset');
};

LazyLoader.prototype.onload = function( event ) {
  this.complete( event, 'flickity-lazyloaded' );
};

LazyLoader.prototype.onerror = function( event ) {
  this.complete( event, 'flickity-lazyerror' );
};

LazyLoader.prototype.complete = function( event, className ) {
  // unbind events
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );

  var cell = this.flickity.getParentCell( this.img );
  var cellElem = cell && cell.element;
  this.flickity.cellSizeChange( cellElem );

  this.img.classList.add( className );
  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
};

// -----  ----- //

Flickity.LazyLoader = LazyLoader;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/page-dots.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// page dots
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/flickity/js/flickity.js"),
      __webpack_require__("./node_modules/unipointer/unipointer.js"),
      __webpack_require__("./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, Unipointer, utils ) {
      return factory( window, Flickity, Unipointer, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unipointer'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.Unipointer,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unipointer, utils ) {

// -------------------------- PageDots -------------------------- //

'use strict';

function PageDots( parent ) {
  this.parent = parent;
  this._create();
}

PageDots.prototype = Object.create( Unipointer.prototype );

PageDots.prototype._create = function() {
  // create holder element
  this.holder = document.createElement('ol');
  this.holder.className = 'flickity-page-dots';
  // create dots, array of elements
  this.dots = [];
  // events
  this.handleClick = this.onClick.bind( this );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PageDots.prototype.activate = function() {
  this.setDots();
  this.holder.addEventListener( 'click', this.handleClick );
  this.bindStartEvent( this.holder );
  // add to DOM
  this.parent.element.appendChild( this.holder );
};

PageDots.prototype.deactivate = function() {
  this.holder.removeEventListener( 'click', this.handleClick );
  this.unbindStartEvent( this.holder );
  // remove from DOM
  this.parent.element.removeChild( this.holder );
};

PageDots.prototype.setDots = function() {
  // get difference between number of slides and number of dots
  var delta = this.parent.slides.length - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

PageDots.prototype.addDots = function( count ) {
  var fragment = document.createDocumentFragment();
  var newDots = [];
  var length = this.dots.length;
  var max = length + count;

  for ( var i = length; i < max; i++ ) {
    var dot = document.createElement('li');
    dot.className = 'dot';
    dot.setAttribute( 'aria-label', 'Page dot ' + ( i + 1 ) );
    fragment.appendChild( dot );
    newDots.push( dot );
  }

  this.holder.appendChild( fragment );
  this.dots = this.dots.concat( newDots );
};

PageDots.prototype.removeDots = function( count ) {
  // remove from this.dots collection
  var removeDots = this.dots.splice( this.dots.length - count, count );
  // remove from DOM
  removeDots.forEach( function( dot ) {
    this.holder.removeChild( dot );
  }, this );
};

PageDots.prototype.updateSelected = function() {
  // remove selected class on previous
  if ( this.selectedDot ) {
    this.selectedDot.className = 'dot';
    this.selectedDot.removeAttribute('aria-current');
  }
  // don't proceed if no dots
  if ( !this.dots.length ) {
    return;
  }
  this.selectedDot = this.dots[ this.parent.selectedIndex ];
  this.selectedDot.className = 'dot is-selected';
  this.selectedDot.setAttribute( 'aria-current', 'step' );
};

PageDots.prototype.onTap = // old method name, backwards-compatible
PageDots.prototype.onClick = function( event ) {
  var target = event.target;
  // only care about dot clicks
  if ( target.nodeName != 'LI' ) {
    return;
  }

  this.parent.uiChange();
  var index = this.dots.indexOf( target );
  this.parent.select( index );
};

PageDots.prototype.destroy = function() {
  this.deactivate();
  this.allOff();
};

Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pageDots: true
});

Flickity.createMethods.push('_createPageDots');

var proto = Flickity.prototype;

proto._createPageDots = function() {
  if ( !this.options.pageDots ) {
    return;
  }
  this.pageDots = new PageDots( this );
  // events
  this.on( 'activate', this.activatePageDots );
  this.on( 'select', this.updateSelectedPageDots );
  this.on( 'cellChange', this.updatePageDots );
  this.on( 'resize', this.updatePageDots );
  this.on( 'deactivate', this.deactivatePageDots );
};

proto.activatePageDots = function() {
  this.pageDots.activate();
};

proto.updateSelectedPageDots = function() {
  this.pageDots.updateSelected();
};

proto.updatePageDots = function() {
  this.pageDots.setDots();
};

proto.deactivatePageDots = function() {
  this.pageDots.deactivate();
};

// -----  ----- //

Flickity.PageDots = PageDots;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/player.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// player & autoPlay
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/ev-emitter/ev-emitter.js"),
      __webpack_require__("./node_modules/fizzy-ui-utils/utils.js"),
      __webpack_require__("./node_modules/flickity/js/flickity.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, utils, Flickity ) {
      return factory( EvEmitter, utils, Flickity );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('ev-emitter'),
      require('fizzy-ui-utils'),
      require('./flickity')
    );
  } else {
    // browser global
    factory(
      window.EvEmitter,
      window.fizzyUIUtils,
      window.Flickity
    );
  }

}( window, function factory( EvEmitter, utils, Flickity ) {

'use strict';

// -------------------------- Player -------------------------- //

function Player( parent ) {
  this.parent = parent;
  this.state = 'stopped';
  // visibility change event handler
  this.onVisibilityChange = this.visibilityChange.bind( this );
  this.onVisibilityPlay = this.visibilityPlay.bind( this );
}

Player.prototype = Object.create( EvEmitter.prototype );

// start play
Player.prototype.play = function() {
  if ( this.state == 'playing' ) {
    return;
  }
  // do not play if page is hidden, start playing when page is visible
  var isPageHidden = document.hidden;
  if ( isPageHidden ) {
    document.addEventListener( 'visibilitychange', this.onVisibilityPlay );
    return;
  }

  this.state = 'playing';
  // listen to visibility change
  document.addEventListener( 'visibilitychange', this.onVisibilityChange );
  // start ticking
  this.tick();
};

Player.prototype.tick = function() {
  // do not tick if not playing
  if ( this.state != 'playing' ) {
    return;
  }

  var time = this.parent.options.autoPlay;
  // default to 3 seconds
  time = typeof time == 'number' ? time : 3000;
  var _this = this;
  // HACK: reset ticks if stopped and started within interval
  this.clear();
  this.timeout = setTimeout( function() {
    _this.parent.next( true );
    _this.tick();
  }, time );
};

Player.prototype.stop = function() {
  this.state = 'stopped';
  this.clear();
  // remove visibility change event
  document.removeEventListener( 'visibilitychange', this.onVisibilityChange );
};

Player.prototype.clear = function() {
  clearTimeout( this.timeout );
};

Player.prototype.pause = function() {
  if ( this.state == 'playing' ) {
    this.state = 'paused';
    this.clear();
  }
};

Player.prototype.unpause = function() {
  // re-start play if paused
  if ( this.state == 'paused' ) {
    this.play();
  }
};

// pause if page visibility is hidden, unpause if visible
Player.prototype.visibilityChange = function() {
  var isPageHidden = document.hidden;
  this[ isPageHidden ? 'pause' : 'unpause' ]();
};

Player.prototype.visibilityPlay = function() {
  this.play();
  document.removeEventListener( 'visibilitychange', this.onVisibilityPlay );
};

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pauseAutoPlayOnHover: true
});

Flickity.createMethods.push('_createPlayer');
var proto = Flickity.prototype;

proto._createPlayer = function() {
  this.player = new Player( this );

  this.on( 'activate', this.activatePlayer );
  this.on( 'uiChange', this.stopPlayer );
  this.on( 'pointerDown', this.stopPlayer );
  this.on( 'deactivate', this.deactivatePlayer );
};

proto.activatePlayer = function() {
  if ( !this.options.autoPlay ) {
    return;
  }
  this.player.play();
  this.element.addEventListener( 'mouseenter', this );
};

// Player API, don't hate the ... thanks I know where the door is

proto.playPlayer = function() {
  this.player.play();
};

proto.stopPlayer = function() {
  this.player.stop();
};

proto.pausePlayer = function() {
  this.player.pause();
};

proto.unpausePlayer = function() {
  this.player.unpause();
};

proto.deactivatePlayer = function() {
  this.player.stop();
  this.element.removeEventListener( 'mouseenter', this );
};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
proto.onmouseenter = function() {
  if ( !this.options.pauseAutoPlayOnHover ) {
    return;
  }
  this.player.pause();
  this.element.addEventListener( 'mouseleave', this );
};

// resume auto-play on hover off
proto.onmouseleave = function() {
  this.player.unpause();
  this.element.removeEventListener( 'mouseleave', this );
};

// -----  ----- //

Flickity.Player = Player;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/prev-next-button.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// prev/next buttons
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/flickity/js/flickity.js"),
      __webpack_require__("./node_modules/unipointer/unipointer.js"),
      __webpack_require__("./node_modules/fizzy-ui-utils/utils.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Flickity, Unipointer, utils ) {
      return factory( window, Flickity, Unipointer, utils );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unipointer'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.Unipointer,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unipointer, utils ) {
'use strict';

var svgURI = 'http://www.w3.org/2000/svg';

// -------------------------- PrevNextButton -------------------------- //

function PrevNextButton( direction, parent ) {
  this.direction = direction;
  this.parent = parent;
  this._create();
}

PrevNextButton.prototype = Object.create( Unipointer.prototype );

PrevNextButton.prototype._create = function() {
  // properties
  this.isEnabled = true;
  this.isPrevious = this.direction == -1;
  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
  this.isLeft = this.direction == leftDirection;

  var element = this.element = document.createElement('button');
  element.className = 'flickity-button flickity-prev-next-button';
  element.className += this.isPrevious ? ' previous' : ' next';
  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
  element.setAttribute( 'type', 'button' );
  // init as disabled
  this.disable();

  element.setAttribute( 'aria-label', this.isPrevious ? 'Previous' : 'Next' );

  // create arrow
  var svg = this.createSVG();
  element.appendChild( svg );
  // events
  this.parent.on( 'select', this.update.bind( this ) );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PrevNextButton.prototype.activate = function() {
  this.bindStartEvent( this.element );
  this.element.addEventListener( 'click', this );
  // add to DOM
  this.parent.element.appendChild( this.element );
};

PrevNextButton.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.element );
  // click events
  this.unbindStartEvent( this.element );
  this.element.removeEventListener( 'click', this );
};

PrevNextButton.prototype.createSVG = function() {
  var svg = document.createElementNS( svgURI, 'svg');
  svg.setAttribute( 'class', 'flickity-button-icon' );
  svg.setAttribute( 'viewBox', '0 0 100 100' );
  var path = document.createElementNS( svgURI, 'path');
  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
  path.setAttribute( 'd', pathMovements );
  path.setAttribute( 'class', 'arrow' );
  // rotate arrow
  if ( !this.isLeft ) {
    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
  }
  svg.appendChild( path );
  return svg;
};

// get SVG path movmement
function getArrowMovements( shape ) {
  // use shape as movement if string
  if ( typeof shape == 'string' ) {
    return shape;
  }
  // create movement string
  return 'M ' + shape.x0 + ',50' +
    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
    ' L ' + shape.x3 + ',50 ' +
    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
    ' Z';
}

PrevNextButton.prototype.handleEvent = utils.handleEvent;

PrevNextButton.prototype.onclick = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.parent.uiChange();
  var method = this.isPrevious ? 'previous' : 'next';
  this.parent[ method ]();
};

// -----  ----- //

PrevNextButton.prototype.enable = function() {
  if ( this.isEnabled ) {
    return;
  }
  this.element.disabled = false;
  this.isEnabled = true;
};

PrevNextButton.prototype.disable = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.element.disabled = true;
  this.isEnabled = false;
};

PrevNextButton.prototype.update = function() {
  // index of first or last slide, if previous or next
  var slides = this.parent.slides;
  // enable is wrapAround and at least 2 slides
  if ( this.parent.options.wrapAround && slides.length > 1 ) {
    this.enable();
    return;
  }
  var lastIndex = slides.length ? slides.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;
  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
  this[ method ]();
};

PrevNextButton.prototype.destroy = function() {
  this.deactivate();
  this.allOff();
};

// -------------------------- Flickity prototype -------------------------- //

utils.extend( Flickity.defaults, {
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30
  }
});

Flickity.createMethods.push('_createPrevNextButtons');
var proto = Flickity.prototype;

proto._createPrevNextButtons = function() {
  if ( !this.options.prevNextButtons ) {
    return;
  }

  this.prevButton = new PrevNextButton( -1, this );
  this.nextButton = new PrevNextButton( 1, this );

  this.on( 'activate', this.activatePrevNextButtons );
};

proto.activatePrevNextButtons = function() {
  this.prevButton.activate();
  this.nextButton.activate();
  this.on( 'deactivate', this.deactivatePrevNextButtons );
};

proto.deactivatePrevNextButtons = function() {
  this.prevButton.deactivate();
  this.nextButton.deactivate();
  this.off( 'deactivate', this.deactivatePrevNextButtons );
};

// --------------------------  -------------------------- //

Flickity.PrevNextButton = PrevNextButton;

return Flickity;

}));


/***/ }),

/***/ "./node_modules/flickity/js/slide.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// slide
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Slide = factory();
  }

}( window, function factory() {
'use strict';

function Slide( parent ) {
  this.parent = parent;
  this.isOriginLeft = parent.originSide == 'left';
  this.cells = [];
  this.outerWidth = 0;
  this.height = 0;
}

var proto = Slide.prototype;

proto.addCell = function( cell ) {
  this.cells.push( cell );
  this.outerWidth += cell.size.outerWidth;
  this.height = Math.max( cell.size.outerHeight, this.height );
  // first cell stuff
  if ( this.cells.length == 1 ) {
    this.x = cell.x; // x comes from first cell
    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
    this.firstMargin = cell.size[ beginMargin ];
  }
};

proto.updateTarget = function() {
  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
  var lastCell = this.getLastCell();
  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.select = function() {
  this.cells.forEach( function( cell ) {
    cell.select();
  });
};

proto.unselect = function() {
  this.cells.forEach( function( cell ) {
    cell.unselect();
  });
};

proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

return Slide;

}));


/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "./node_modules/unidragger/unidragger.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/unipointer/unipointer.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( Unipointer ) {
      return factory( window, Unipointer );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.Unidragger = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {

'use strict';

// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
proto._bindHandles = function( isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  // bind each handle
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
  var touchAction = isAdd ? this._touchActionValue : '';
  for ( var i=0; i < this.handles.length; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isAdd );
    handle[ bindMethod ]( 'click', this );
    // touch-action: none to override browser touch gestures. metafizzy/flickity#540
    if ( window.PointerEvent ) {
      handle.style.touchAction = touchAction;
    }
  }
};

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = function( event, pointer ) {
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }
  // track start event position
  this.pointerDownPointer = pointer;

  event.preventDefault();
  this.pointerDownBlur();
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  SELECT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

// dismiss inputs with text fields. flickity#403, flickity#404
proto.okayPointerDown = function( event ) {
  var isCursorNode = cursorNodes[ event.target.nodeName ];
  var isClickType = clickTypes[ event.target.type ];
  var isOkay = !isCursorNode || isClickType;
  if ( !isOkay ) {
    this._pointerReset();
  }
  return isOkay;
};

// kludge to blur previously focused input
proto.pointerDownBlur = function() {
  var focused = document.activeElement;
  // do not blur body for IE10, metafizzy/flickity#117
  var canBlur = focused && focused.blur && focused != document.body;
  if ( canBlur ) {
    focused.blur();
  }
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
proto._dragPointerMove = function( event, pointer ) {
  var moveVector = {
    x: pointer.pageX - this.pointerDownPointer.pageX,
    y: pointer.pageY - this.pointerDownPointer.pageY
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

proto._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = function( event, pointer ) {
  this.isDragging = true;
  // prevent clicks
  this.isPreventingClicks = true;
  this.dragStart( event, pointer );
};

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
proto._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  setTimeout( function() {
    delete this.isPreventingClicks;
  }.bind( this ) );

  this.dragEnd( event, pointer );
};

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    event.preventDefault();
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  this.staticClick( event, pointer );

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    setTimeout( function() {
      delete this.isIgnoringMouseUp;
    }.bind( this ), 400 );
  }
};

proto.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));


/***/ }),

/***/ "./node_modules/unipointer/unipointer.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__("./node_modules/ev-emitter/ev-emitter.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.Unipointer = factory(
      window,
      window.EvEmitter
    );
  }

}( window, function factory( window, EvEmitter ) {

'use strict';

function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
proto._bindStartEvent = function( elem, isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

  // default to mouse events
  var startEvent = 'mousedown';
  if ( window.PointerEvent ) {
    // Pointer Events
    startEvent = 'pointerdown';
  } else if ( 'ontouchstart' in window ) {
    // Touch Events. iOS Safari
    startEvent = 'touchstart';
  }
  elem[ bindMethod ]( startEvent, this );
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  this._pointerReset();
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto._pointerReset = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));


/***/ }),

/***/ "./node_modules/vue-flickity/src/flickity.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_vue_loader_lib_selector_type_script_index_0_flickity_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vue-flickity/src/flickity.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_vue_loader_lib_selector_type_script_index_0_flickity_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_vue_loader_lib_selector_type_script_index_0_flickity_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_vue_loader_lib_selector_type_script_index_0_flickity_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_vue_loader_lib_selector_type_script_index_0_flickity_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_2af8bc48_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_flickity_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2af8bc48\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-flickity/src/flickity.vue");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2af8bc48\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/flickity/dist/flickity.css")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_vue_loader_lib_selector_type_script_index_0_flickity_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_2af8bc48_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_flickity_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules/vue-flickity/src/flickity.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2af8bc48", Component.options)
  } else {
    hotAPI.reload("data-v-2af8bc48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2af8bc48\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vue-flickity/src/flickity.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2af8bc48", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5e02b7d5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/welcome.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("h2", { staticClass: "text-center" }, [
      _c("span", [
        _c("span", { staticClass: "text-main-1" }, [
          _vm._v(_vm._s(_vm.$t("youth")))
        ]),
        _vm._v(" " + _vm._s(_vm.$t("cybersports_league")))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c(
            "flickity",
            { ref: "flickity", attrs: { options: _vm.flickityOptions } },
            [
              _c(
                "div",
                {
                  staticClass: "carousel-cell",
                  staticStyle: {
                    "background-image": "url('/images/slider/slide_1.png')"
                  }
                },
                [
                  _c("h3", [
                    _vm._v("МУЛЬТИДИСЦИПЛИНАРНЫЙ КИБЕРСПОРТИВНЫЙ "),
                    _c("br"),
                    _vm._v("ФЕСТИВАЛЬ SECTOR ")
                  ]),
                  _vm._v(" "),
                  _vm.daysTo > 0
                    ? _c("h4", { staticClass: "text-main-1" }, [
                        _vm._v("Регистрация начнется через "),
                        _c("strong", [_vm._v(_vm._s(_vm.daysTo))]),
                        _vm._v(" дня ")
                      ])
                    : _c(
                        "h4",
                        { staticClass: "text-main-1" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "nk-btn nk-btn-rounded nk-btn-color-main-1 text-white",
                              attrs: { to: { name: "register" } }
                            },
                            [
                              _vm._v(
                                "\n                      зарегистрируйтесь"
                              )
                            ]
                          )
                        ],
                        1
                      )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "carousel-cell",
                  staticStyle: {
                    "background-image": "url('/images/slider/slide_2.png')"
                  }
                },
                [
                  _c("h3", [
                    _vm._v("Яркое событие с лучшими командами "),
                    _c("br"),
                    _vm._v(" мира и огромными призовыми")
                  ]),
                  _vm._v(" "),
                  _vm.daysTo > 0
                    ? _c("h4", { staticClass: "text-main-1" }, [
                        _vm._v("Регистрация начнется через "),
                        _c("strong", [_vm._v(_vm._s(_vm.daysTo))]),
                        _vm._v(" дня ")
                      ])
                    : _c(
                        "h4",
                        { staticClass: "text-main-1" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "nk-btn nk-btn-rounded nk-btn-color-main-1 text-white",
                              attrs: { to: { name: "register" } }
                            },
                            [
                              _vm._v(
                                "\n                          зарегистрируйтесь"
                              )
                            ]
                          )
                        ],
                        1
                      )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "carousel-cell",
                  staticStyle: {
                    "background-image": "url('/images/slider/slide_3.png')"
                  }
                },
                [
                  _c("h3", [_vm._v("Возможность выиграть автомобиль")]),
                  _vm._v(" "),
                  _vm.daysTo > 0
                    ? _c("h4", { staticClass: "text-main-1" }, [
                        _vm._v("Регистрация начнется через "),
                        _c("strong", [_vm._v(_vm._s(_vm.daysTo))]),
                        _vm._v(" дня ")
                      ])
                    : _c(
                        "h4",
                        { staticClass: "text-main-1" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "nk-btn nk-btn-rounded nk-btn-color-main-1 text-white",
                              attrs: { to: { name: "register" } }
                            },
                            [
                              _vm._v(
                                "\n                          зарегистрируйтесь"
                              )
                            ]
                          )
                        ],
                        1
                      )
                ]
              )
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "nk-gap-2" }),
    _vm._v(" "),
    _c("div", { staticClass: "row vertical-gap" }, [
      _c("div", { staticClass: "col-lg-4" }, [
        _c("div", { staticClass: "nk-feature-1" }, [
          _c(
            "div",
            { staticClass: "nk-feature-icon" },
            [_c("fa", { attrs: { icon: "users" } })],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "nk-feature-cont" }, [
            _c("h3", { staticClass: "nk-feature-title" }, [
              _vm._v(_vm._s(_vm.countTeams))
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "nk-feature-title text-main-1" }, [
              _vm._v(_vm._s(_vm.$t("teams")))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4" }, [
        _c("div", { staticClass: "nk-feature-1" }, [
          _c(
            "div",
            { staticClass: "nk-feature-icon" },
            [_c("fa", { attrs: { icon: "gamepad" } })],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "nk-feature-cont" }, [
            _c("h3", { staticClass: "nk-feature-title" }, [
              _vm._v(_vm._s(_vm.countPlayers))
            ]),
            _vm._v(" "),
            _c("h4", { staticClass: "nk-feature-title text-main-1" }, [
              _vm._v(_vm._s(_vm.$t("players")))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4" }, [
        _c("div", { staticClass: "nk-feature-1" }, [
          _c(
            "div",
            { staticClass: "nk-feature-icon" },
            [_c("fas", { attrs: { icon: "trophy" } })],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "nk-feature-cont" }, [
            _c("h3", { staticClass: "nk-feature-title" }, [
              _vm._v(_vm._s(_vm.countSchools))
            ]),
            _vm._v(" "),
            _c("h3", { staticClass: "nk-feature-title text-main-1" }, [
              _vm._v(_vm._s(_vm.$t("tournaments")))
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "nk-gap-2" })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5e02b7d5", esExports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2af8bc48\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/flickity/dist/flickity.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2af8bc48\",\"scoped\":false,\"hasInlineConfig\":true}!./node_modules/flickity/dist/flickity.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0c5c33b2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2af8bc48\",\"scoped\":false,\"hasInlineConfig\":true}!./flickity.css", function() {
     var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2af8bc48\",\"scoped\":false,\"hasInlineConfig\":true}!./flickity.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/assets/js/pages/welcome.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-2\"],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"transform-runtime\",\"transform-async-to-generator\"],\"comments\":false}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/welcome.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e02b7d5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_welcome_vue__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5e02b7d5\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/welcome.vue");
var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_es2015_stage_2_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_transform_runtime_transform_async_to_generator_comments_false_node_modules_vue_loader_lib_selector_type_script_index_0_welcome_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5e02b7d5_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_welcome_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/welcome.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e02b7d5", Component.options)
  } else {
    hotAPI.reload("data-v-5e02b7d5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3Z1ZS1mbGlja2l0eS9zcmMvZmxpY2tpdHkudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9kaXN0L2ZsaWNraXR5LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3Rvci9tYXRjaGVzLXNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9hZGQtcmVtb3ZlLWNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2FuaW1hdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2RyYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2ZsaWNraXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvbGF6eWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3BhZ2UtZG90cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9wcmV2LW5leHQtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9zbGlkZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZ2V0LXNpemUvZ2V0LXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VuaWRyYWdnZXIvdW5pZHJhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdW5pcG9pbnRlci91bmlwb2ludGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtZmxpY2tpdHkvc3JjL2ZsaWNraXR5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWZsaWNraXR5L3NyYy9mbGlja2l0eS52dWU/MTcyNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlPzIyNGMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2Rpc3QvZmxpY2tpdHkuY3NzPzg4M2EiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBU0E7QUFDQTtBQUNBO0FBREEsR0FEQTs7QUFLQSxTQUxBLHFCQUtBO0FBQ0E7QUFDQSxHQVBBO0FBU0EsZUFUQSwyQkFTQTtBQUNBO0FBQ0E7QUFDQSxHQVpBOzs7QUFjQTtBQUlBLFFBSkEsa0JBSUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQWNBLFlBZEEsc0JBY0E7QUFDQTtBQUNBLEtBaEJBO0FBNkJBLFVBN0JBLGtCQTZCQSxLQTdCQSxFQTZCQSxTQTdCQSxFQTZCQSxTQTdCQSxFQTZCQTtBQUNBO0FBQ0EsS0EvQkE7QUF1Q0EsUUF2Q0EsZ0JBdUNBLFNBdkNBLEVBdUNBLFNBdkNBLEVBdUNBO0FBQ0E7QUFDQSxLQXpDQTtBQWlEQSxZQWpEQSxvQkFpREEsU0FqREEsRUFpREEsU0FqREEsRUFpREE7QUFDQTtBQUNBLEtBbkRBO0FBNERBLGNBNURBLHNCQTRE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SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUM7Ozs7Ozs7O0FDckdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxJQUF5QztBQUNoRDtBQUNBLElBQUksaUNBQVE7QUFDWixNQUFNLDZEQUFZO0FBQ2xCLE1BQU0sOERBQXVCO0FBQzdCLE1BQU0sNkRBQXNCO0FBQzVCLEtBQUssbUNBQUU7QUFDUDtBQUNBLEtBQUs7QUFBQSxvR0FBQztBQUNOLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPLElBQUksWUFBWSxPQUFPLFVBQVUsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCLEVBQUUsc0JBQXNCLGVBQWU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOzs7Ozs7OztBQ3hZRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBeUM7QUFDaEQ7QUFDQSxJQUFJLGlDQUFRO0FBQ1osTUFBTSw4REFBdUI7QUFDN0IsTUFBTSwwREFBbUI7QUFDekIsTUFBTSw2REFBc0I7QUFDNUIsTUFBTSx5REFBUTtBQUNkLE1BQU0sMERBQVM7QUFDZixNQUFNLDREQUFXO0FBQ2pCLEtBQUssbUNBQUU7QUFDUDtBQUNBLEtBQUs7QUFBQSxvR0FBQztBQUNOLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsaUNBQWlDO0FBQzVDLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQzs7Ozs7Ozs7QUNsTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLElBQXlDO0FBQ2hEO0FBQ0EsSUFBSSxvQ0FBUSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0dBQUU7QUFDckIsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFF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QUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDNU9BOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLGtPQUF1TDtBQUM3TSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsYUFBYSxtQkFBTyxDQUFDLHdEQUFnRCxnQ0FBZ0M7QUFDckc7QUFDQSxHQUFHLEtBQVU7QUFDYjtBQUNBO0FBQ0EsMEdBQTBHLGtGQUFrRjtBQUM1TCxtSEFBbUgsa0ZBQWtGO0FBQ3JNO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7QUNwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdURBQStEO0FBQ2hHO0FBQzRiO0FBQ2E7QUFDemM7QUFDb1E7QUFDcFE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx3V0FBYztBQUNoQixFQUFFLGdPQUFnQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsR0FBRztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFYyxnRkFBaUIiLCJmaWxlIjoianMvMi42ODY1ZGJiNzQ0OWU4YTI3NTUxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8c2xvdC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBGbGlja2l0eSBmcm9tICdmbGlja2l0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IHtcbiAgICBvcHRpb25zOiBPYmplY3QsXG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfSxcblxuICBiZWZvcmVEZXN0cm95KCkge1xuICAgIHRoaXMuJGZsaWNraXR5LmRlc3Ryb3koKTtcbiAgICB0aGlzLiRmbGlja2l0eSA9IG51bGw7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYSBuZXcgZmxpY2tpdHkgYW5kIGVtaXQgaW5pdCBldmVudC5cbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgdGhpcy4kZmxpY2tpdHkgPSBuZXcgRmxpY2tpdHkodGhpcy4kZWwsIHRoaXMub3B0aW9ucyk7XG4gICAgICB0aGlzLiRlbWl0KCdpbml0JywgdGhpcy4kZmxpY2tpdHkpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgZmxpY2tpdHkgaW5zdGFuY2UgdG8gYWNjZXNzIGRpcmVjdGx5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtGbGlja2l0eX1cbiAgICAgKi9cbiAgICBmbGlja2l0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRmbGlja2l0eTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VsZWN0aW5nIFNsaWRlc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogU2VsZWN0IGEgc2xpZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNXcmFwcGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0luc3RhbnRcbiAgICAgKi9cbiAgICBzZWxlY3QoaW5kZXgsIGlzV3JhcHBlZCwgaXNJbnN0YW50KSB7XG4gICAgICB0aGlzLiRmbGlja2l0eS5zZWxlY3QoaW5kZXgsIGlzV3JhcHBlZCwgaXNJbnN0YW50KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIHRvIHRoZSBuZXh0IHNsaWRlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzV3JhcHBlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNJbnN0YW50XG4gICAgICovXG4gICAgbmV4dChpc1dyYXBwZWQsIGlzSW5zdGFudCkge1xuICAgICAgdGhpcy4kZmxpY2tpdHkubmV4dChpc1dyYXBwZWQsIGlzSW5zdGFudCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENoYW5nZSB0byB0aGUgcHJldmlvdXMgc2xpZGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNXcmFwcGVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0luc3RhbnRcbiAgICAgKi9cbiAgICBwcmV2aW91cyhpc1dyYXBwZWQsIGlzSW5zdGFudCkge1xuICAgICAgdGhpcy4kZmxpY2tpdHkucHJldmlvdXMoaXNXcmFwcGVkLCBpc0luc3RhbnQpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZWxlY3QgYSBjZWxsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzV3JhcHBlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNJbnN0YW50XG4gICAgICovXG4gICAgc2VsZWN0Q2VsbCh2YWx1ZSwgaXNXcmFwcGVkLCBpc0luc3RhbnQpIHtcbiAgICAgIHRoaXMuJGZsaWNraXR5LnNlbGVjdENlbGwodmFsdWUsIGlzV3JhcHBlZCwgaXNJbnN0YW50KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2l6aW5nIGFuZCBQb3NpdGlvbmluZ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhIHJlc2l6ZSBldmVudFxuICAgICAqL1xuICAgIHJlc2l6ZSgpIHtcbiAgICAgIHRoaXMuJGZsaWNraXR5LnJlc2l6ZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGEgcmVwb3NpdGlvbiBldmVudFxuICAgICAqL1xuICAgIHJlcG9zaXRpb24oKSB7XG4gICAgICB0aGlzLiRmbGlja2l0eS5yZXBvc2l0aW9uKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZGluZyBhbmQgcmVtb3ZpbmcgY2VsbHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFByZXBlbmQgZWxlbWVudHMgdG8gZmxpY2tpdHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YXJyYXl8SFRNTEVsZW1lbnR8Tm9kZUxpc3R9IGVsZW1lbnRzXG4gICAgICovXG4gICAgcHJlcGVuZChlbGVtZW50cykge1xuICAgICAgdGhpcy4kZmxpY2tpdHkucHJlcGVuZChlbGVtZW50cyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZCBlbGVtZW50cyB0byBmbGlja2l0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHthcnJheXxIVE1MRWxlbWVudHxOb2RlTGlzdH0gZWxlbWVudHNcbiAgICAgKi9cbiAgICBhcHBlbmQoZWxlbWVudHMpIHtcbiAgICAgIHRoaXMuJGZsaWNraXR5LmFwcGVuZChlbGVtZW50cyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluc2VydCBlbGVtZW50cyBhdCBhIGdpdmVuIGluZGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2FycmF5fEhUTUxFbGVtZW50fE5vZGVMaXN0fSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgICAqL1xuICAgIGluc2VydChlbGVtZW50cywgaW5kZXgpIHtcbiAgICAgIHRoaXMuJGZsaWNraXR5Lmluc2VydChlbGVtZW50cywgaW5kZXgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudHMgZnJvbSBmbGlja2l0eVxuICAgICAqXG4gICAgICogQHBhcmFtIHthcnJheXxIVE1MRWxlbWVudHxOb2RlTGlzdH0gZWxlbWVudHNcbiAgICAgKi9cbiAgICByZW1vdmUoZWxlbWVudHMpIHtcbiAgICAgIHRoaXMuJGZsaWNraXR5LnJlbW92ZShlbGVtZW50cyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBsYXllclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhIHBsYXlQbGF5ZXIgZXZlbnRcbiAgICAgKi9cbiAgICBwbGF5UGxheWVyKCkge1xuICAgICAgdGhpcy4kZmxpY2tpdHkucGxheVBsYXllcigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGEgc3RvcFBsYXllciBldmVudFxuICAgICAqL1xuICAgIHN0b3BQbGF5ZXIoKSB7XG4gICAgICB0aGlzLiRmbGlja2l0eS5zdG9wUGxheWVyKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgYSBwYXVzZVBsYXllciBldmVudFxuICAgICAqL1xuICAgIHBhdXNlUGxheWVyKCkge1xuICAgICAgdGhpcy4kZmxpY2tpdHkucGF1c2VQbGF5ZXIoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhIHVucGF1c2VQbGF5ZXIgZXZlbnRcbiAgICAgKi9cbiAgICB1bnBhdXNlUGxheWVyKCkge1xuICAgICAgdGhpcy4kZmxpY2tpdHkudW5wYXVzZVBsYXllcigpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGEgcmVyZW5kZXIgZXZlbnRcbiAgICAgKi9cbiAgICByZXJlbmRlcigpIHtcbiAgICAgIHRoaXMuJGZsaWNraXR5LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBVdGlsaXRpZXNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIERlc3Ryb3kgdGhlIGZsaWNraXR5IGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIHRoaXMuJGZsaWNraXR5LmRlc3Ryb3koKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhIHJlcmVuZGVyIGV2ZW50XG4gICAgICovXG4gICAgcmVsb2FkQ2VsbHMoKSB7XG4gICAgICB0aGlzLiRmbGlja2l0eS5yZWxvYWRDZWxscygpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNlbGwgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuICAgIGdldENlbGxFbGVtZW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRmbGlja2l0eS5nZXRDZWxsRWxlbWVudHMoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGZsaWNraXR5IGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0ZsaWNraXR5fVxuICAgICAqL1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4gRmxpY2tpdHkuZGF0YSh0aGlzLiRlbCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEV2ZW50c1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGFuIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgKi9cbiAgICBvbihldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICB0aGlzLiRmbGlja2l0eS5vbihldmVudE5hbWUsIGxpc3RlbmVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFuIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgKi9cbiAgICBvZmYoZXZlbnROYW1lLCBsaXN0ZW5lcikge1xuICAgICAgdGhpcy4kZmxpY2tpdHkub2ZmKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2ggYW4gZXZlbnQgb25jZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICovXG4gICAgb25jZShldmVudE5hbWUsIGxpc3RlbmVyKSB7XG4gICAgICB0aGlzLiRmbGlja2l0eS5vbmNlKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0aWVzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHNlbGVjdGVkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICAgICAqL1xuICAgIHNlbGVjdGVkRWxlbWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRmbGlja2l0eS5zZWxlY3RlZEVsZW1lbnQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2FycmF5fVxuICAgICAqL1xuICAgIHNlbGVjdGVkRWxlbWVudHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZmxpY2tpdHkuc2VsZWN0ZWRFbGVtZW50cztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBzZWxlY3RlZCBpbmRleFxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHNlbGVjdGVkSW5kZXgoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZmxpY2tpdHkuc2VsZWN0ZWRJbmRleDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBjZWxsc1xuICAgICAqXG4gICAgICogQHJldHVybiB7YXJyYXl9XG4gICAgICovXG4gICAgY2VsbHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZmxpY2tpdHkuY2VsbHM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgc2xpZGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHthcnJheX1cbiAgICAgKi9cbiAgICBzbGlkZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kZmxpY2tpdHkuc2xpZGVzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGRyYWdnaW5nIG9mIHNsaWRlclxuICAgICAqL1xuICAgIGRpc2FibGVEcmFnKCkge1xuICAgICAgdGhpcy4kZmxpY2tpdHkub3B0aW9ucy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGZsaWNraXR5LnVwZGF0ZURyYWdnYWJsZSgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGUgZHJhZ2dpbmcgb2Ygc2xpZGVyXG4gICAgICovXG4gICAgZW5hYmxlRHJhZygpIHtcbiAgICAgIHRoaXMuJGZsaWNraXR5Lm9wdGlvbnMuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuJGZsaWNraXR5LnVwZGF0ZURyYWdnYWJsZSgpO1xuICAgIH0sXG4gIH0sXG5cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNyYz1cImZsaWNraXR5L2Rpc3QvZmxpY2tpdHkuY3NzXCI+PC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBub2RlX21vZHVsZXMvdnVlLWZsaWNraXR5L3NyYy9mbGlja2l0eS52dWUiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8c3Bhbj48c3BhbiBjbGFzcz1cInRleHQtbWFpbi0xXCI+e3skdCgneW91dGgnKX19PC9zcGFuPiB7eyR0KCdjeWJlcnNwb3J0c19sZWFndWUnKX19PC9zcGFuPlxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgIDxmbGlja2l0eSByZWY9XCJmbGlja2l0eVwiIDpvcHRpb25zPVwiZmxpY2tpdHlPcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNlbGxcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9zbGlkZXIvc2xpZGVfMS5wbmcnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+0JzQo9Cb0KzQotCY0JTQmNCh0KbQmNCf0JvQmNCd0JDQoNCd0KvQmSDQmtCY0JHQldCg0KHQn9Ce0KDQotCY0JLQndCr0JkgPGJyLz7QpNCV0KHQotCY0JLQkNCb0KwgU0VDVE9SIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtbWFpbi0xXCIgdi1pZj1cImRheXNUbz4wXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvdCw0YfQvdC10YLRgdGPINGH0LXRgNC10LcgPHN0cm9uZz57e2RheXNUb319PC9zdHJvbmc+INC00L3RjyA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LW1haW4tMVwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyZWdpc3RlcicgfVwiIGNsYXNzPVwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNlbGxcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9zbGlkZXIvc2xpZGVfMi5wbmcnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+0K/RgNC60L7QtSDRgdC+0LHRi9GC0LjQtSDRgSDQu9GD0YfRiNC40LzQuCDQutC+0LzQsNC90LTQsNC80LggPGJyLz4g0LzQuNGA0LAg0Lgg0L7Qs9GA0L7QvNC90YvQvNC4INC/0YDQuNC30L7QstGL0LzQuDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtbWFpbi0xXCIgdi1pZj1cImRheXNUbz4wXCI+0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvdCw0YfQvdC10YLRgdGPINGH0LXRgNC10LcgPHN0cm9uZz57e2RheXNUb319PC9zdHJvbmc+INC00L3RjyA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LW1haW4tMVwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdyZWdpc3RlcicgfVwiIGNsYXNzPVwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINC30LDRgNC10LPQuNGB0YLRgNC40YDRg9C50YLQtdGB0Yw8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1jZWxsXCIgIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvaW1hZ2VzL3NsaWRlci9zbGlkZV8zLnBuZycpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMz7QktC+0LfQvNC+0LbQvdC+0YHRgtGMINCy0YvQuNCz0YDQsNGC0Ywg0LDQstGC0L7QvNC+0LHQuNC70Yw8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LW1haW4tMVwiIHYtaWY9XCJkYXlzVG8+MFwiPtCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L3QsNGH0L3QtdGC0YHRjyDRh9C10YDQtdC3IDxzdHJvbmc+e3tkYXlzVG99fTwvc3Ryb25nPiDQtNC90Y8gPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1tYWluLTFcIiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncmVnaXN0ZXInIH1cIiBjbGFzcz1cIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZmxpY2tpdHk+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWdhcC0yXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB2ZXJ0aWNhbC1nYXBcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWZlYXR1cmUtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZmVhdHVyZS1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInVzZXJzXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWZlYXR1cmUtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibmstZmVhdHVyZS10aXRsZVwiPnt7Y291bnRUZWFtc319PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm5rLWZlYXR1cmUtdGl0bGUgdGV4dC1tYWluLTFcIj57eyR0KCd0ZWFtcycpfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmstZmVhdHVyZS0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1mZWF0dXJlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwiZ2FtZXBhZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1mZWF0dXJlLWNvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cIm5rLWZlYXR1cmUtdGl0bGVcIj57e2NvdW50UGxheWVyc319PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm5rLWZlYXR1cmUtdGl0bGUgdGV4dC1tYWluLTFcIj57eyR0KCdwbGF5ZXJzJyl9fTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuay1mZWF0dXJlLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWZlYXR1cmUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhcyBpY29uPVwidHJvcGh5XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5rLWZlYXR1cmUtY29udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibmstZmVhdHVyZS10aXRsZVwiPnt7Y291bnRTY2hvb2xzfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwibmstZmVhdHVyZS10aXRsZSB0ZXh0LW1haW4tMVwiPnt7JHQoJ3RvdXJuYW1lbnRzJyl9fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJuay1nYXAtMlwiPjwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBGbGlja2l0eSBmcm9tICd2dWUtZmxpY2tpdHknO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxheW91dDogJ2RlZmF1bHQnLFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnaG9tZScpIH1cbiAgfSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRmxpY2tpdHlcbiAgICB9LFxuXG4gIGRhdGE6ICgpID0+ICh7XG4gICAgdGl0bGU6IHdpbmRvdy5jb25maWcuYXBwTmFtZSxcbiAgICBuZXdzOiBudWxsLFxuICAgIGZsaWNraXR5T3B0aW9uczoge1xuICAgICAgICBhdXRvUGxheTogMzUwMCxcbiAgICAgICAgLy9pbml0aWFsSW5kZXg6IDMsXG4gICAgICAgIHByZXZOZXh0QnV0dG9uczogdHJ1ZSxcbiAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxuICAgICAgICB3cmFwQXJvdW5kOiB0cnVlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICAgIH0sXG5cdGNvdW50U2Nob29sczogMCxcblx0Y291bnRQbGF5ZXJzOiAwLFxuXHRjb3VudFRlYW1zOiAwXG4gIH0pLFxuXG4gIGNvbXB1dGVkOntcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgIHVzZXI6ICdhdXRoL3VzZXInLFxuICAgICAgICAgIGxvY2FsZTogJ2xhbmcvbG9jYWxlJyxcbiAgICAgIH0pLFxuXHQgIGRheXNUbzogZnVuY3Rpb24gKClcbiAgICAgIHtcblx0XHR2YXIgZDIgPSBuZXcgRGF0ZSgnSnVuIDIwLCAyMDE4Jyk7XG5cdFx0dmFyIGQzID0gbmV3IERhdGUoKTtcblx0XHR2YXIgZHMgPSAoZDIuZ2V0VGltZSgpLWQzLmdldFRpbWUoKSkgLyAoMTAwMCo2MCo2MCoyNCk7XG5cdFx0cmV0dXJuIE1hdGgucm91bmQoZHMpKzE7XG5cdCAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG5cdCAgdGhpcy5nZXRQbGF5ZXJzQ291bnQoKTtcblx0ICB0aGlzLmdldFRlYW1zQ291bnQoKTtcblx0ICB0aGlzLmdldFNjaG9vbHNDb3VudCgpO1xuICAgICAgdGhpcy5tb21lbnQubG9jYWxlKHRoaXMubG9jYWxlKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG5cdCAgZ2V0UGxheWVyc0NvdW50KClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gdGhpcy5BcnJheVRvVXJsKHtcbiAgICAgICAgICAgICAgICAvL1wiYWN0aXZlXCIgOiAxLFxuICAgICAgICAgICAgICAgICd0eXBlJyA6ICdwbGF5ZXInLFxuXHRcdFx0XHQnaW5zdGl0dXRpb25faWQtbm90JzogXCJudWxsXCIsXG4gICAgICAgICAgICAgICAgXCJfbGltaXRcIiA6IDEsXG4gICAgICAgICAgICAgICAgJ19maWVsZHMnIDogJ2lkJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS91c2Vycz8nK3F1ZXJ5KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCAnY291bnRQbGF5ZXJzJywgcmVzcG9uc2UuZGF0YS50b3RhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VGVhbXNDb3VudCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IHRoaXMuQXJyYXlUb1VybCh7XG4gICAgICAgICAgICAgICAgXCJzdGF0dXMtbm90XCIgOiAyLFxuXHRcdFx0XHRcImluc3RpdHV0aW9uX2lkLW5vdFwiOiBcIm51bGxcIixcbiAgICAgICAgICAgICAgICBcIl9saW1pdFwiIDogMSxcbiAgICAgICAgICAgICAgICAnX2ZpZWxkcycgOiAnaWQnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RlYW1zPycrcXVlcnkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsICdjb3VudFRlYW1zJywgcmVzcG9uc2UuZGF0YS50b3RhbClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRTY2hvb2xzQ291bnQoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcXVlcnkgPSB0aGlzLkFycmF5VG9Vcmwoe1xuICAgICAgICAgICAgICAgIFwiX2xpbWl0XCIgOiAxLFxuICAgICAgICAgICAgICAgICdfZmllbGRzJyA6ICdpZCdcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdG91cm5hbWVudHM/JytxdWVyeSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywgJ2NvdW50U2Nob29scycsIHJlc3BvbnNlLmRhdGEudG90YWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWUiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgRmxpY2tpdHkgdjIuMi4wXFxuaHR0cHM6Ly9mbGlja2l0eS5tZXRhZml6enkuY29cXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuLmZsaWNraXR5LWVuYWJsZWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZmxpY2tpdHktZW5hYmxlZDpmb2N1cyB7IG91dGxpbmU6IG5vbmU7XFxufVxcbi5mbGlja2l0eS12aWV3cG9ydCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZmxpY2tpdHktc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBkcmFnZ2FibGUgKi9cXG4uZmxpY2tpdHktZW5hYmxlZC5pcy1kcmFnZ2FibGUge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uZmxpY2tpdHktZW5hYmxlZC5pcy1kcmFnZ2FibGUgLmZsaWNraXR5LXZpZXdwb3J0IHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xcbiAgY3Vyc29yOiBncmFiO1xcbn1cXG4uZmxpY2tpdHktZW5hYmxlZC5pcy1kcmFnZ2FibGUgLmZsaWNraXR5LXZpZXdwb3J0LmlzLXBvaW50ZXItZG93biB7XFxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XFxuICBjdXJzb3I6IGdyYWJiaW5nO1xcbn1cXG5cXG4vKiAtLS0tIGZsaWNraXR5LWJ1dHRvbiAtLS0tICovXFxuLmZsaWNraXR5LWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDAsIDAlLCAxMDAlLCAwLjc1KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uZmxpY2tpdHktYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZmxpY2tpdHktYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDVweCAjMTlGO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA1cHggIzE5RjtcXG59XFxuLmZsaWNraXR5LWJ1dHRvbjphY3RpdmUge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG4uZmxpY2tpdHktYnV0dG9uOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGN1cnNvcjogYXV0bztcXG4gIC8qIHByZXZlbnQgZGlzYWJsZWQgYnV0dG9uIGZyb20gY2FwdHVyaW5nIHBvaW50ZXIgdXAgZXZlbnQuICM3MTYgKi9cXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZmxpY2tpdHktYnV0dG9uLWljb24ge1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG5cXG4vKiAtLS0tIHByZXZpb3VzL25leHQgYnV0dG9ucyAtLS0tICovXFxuLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ge1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogNDRweDtcXG4gIGhlaWdodDogNDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIC8qIHZlcnRpY2FsbHkgY2VudGVyICovXFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG4uZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbi5wcmV2aW91cyB7IGxlZnQ6IDEwcHg7XFxufVxcbi5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLm5leHQgeyByaWdodDogMTBweDtcXG59XFxuLyogcmlnaHQgdG8gbGVmdCAqL1xcbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG4uZmxpY2tpdHktcnRsIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLm5leHQge1xcbiAgcmlnaHQ6IGF1dG87XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4uZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbiAuZmxpY2tpdHktYnV0dG9uLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjAlO1xcbiAgdG9wOiAyMCU7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi8qIC0tLS0gcGFnZSBkb3RzIC0tLS0gKi9cXG4uZmxpY2tpdHktcGFnZS1kb3RzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAtMjVweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXBhZ2UtZG90cyB7IGRpcmVjdGlvbjogcnRsO1xcbn1cXG4uZmxpY2tpdHktcGFnZS1kb3RzIC5kb3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBtYXJnaW46IDAgOHB4O1xcbiAgYmFja2dyb3VuZDogIzMzMztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIG9wYWNpdHk6IDAuMjU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5mbGlja2l0eS1wYWdlLWRvdHMgLmRvdC5pcy1zZWxlY3RlZCB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiQzoveGFtcHAvaHRkb2NzL3NlY3Rvci5sb2NhbC9ub2RlX21vZHVsZXMvZmxpY2tpdHkvZGlzdC9mbGlja2l0eS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O2lEQUVpRDtBQUVqRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUVELDBCQUEwQixjQUFjO0NBQUU7QUFFMUM7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQsZUFBZTtBQUVmO0VBQ0UseUNBQXlDO1VBQ2pDLGlDQUFpQztFQUN6QywwQkFBMEI7S0FDdkIsdUJBQXVCO01BQ3RCLHNCQUFzQjtVQUNsQixrQkFBa0I7Q0FDM0I7QUFFRDtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsYUFBYTtDQUNkO0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0NBQ2xCOztBQUVELCtCQUErQjtBQUUvQjtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLFlBQVk7Q0FDYjtBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsY0FBYztFQUNkLG1DQUEyQjtVQUEzQiwyQkFBMkI7Q0FDNUI7QUFFRDtFQUNFLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtRUFBbUU7RUFDbkUscUJBQXFCO0NBQ3RCO0FBRUQ7RUFDRSxtQkFBbUI7Q0FDcEI7O0FBRUQscUNBQXFDO0FBRXJDO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixvQ0FBNEI7VUFBNUIsNEJBQTRCO0NBQzdCO0FBRUQsc0NBQXNDLFdBQVc7Q0FBRTtBQUNuRCxrQ0FBa0MsWUFBWTtDQUFFO0FBQ2hELG1CQUFtQjtBQUNuQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7RUFDWixXQUFXO0NBQ1o7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0NBQ2I7O0FBRUQseUJBQXlCO0FBRXpCO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEI7QUFFRCxvQ0FBb0MsZUFBZTtDQUFFO0FBRXJEO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UsV0FBVztDQUNaXCIsXCJmaWxlXCI6XCJmbGlja2l0eS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIEZsaWNraXR5IHYyLjIuMFxcbmh0dHBzOi8vZmxpY2tpdHkubWV0YWZpenp5LmNvXFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5mbGlja2l0eS1lbmFibGVkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZsaWNraXR5LWVuYWJsZWQ6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmZsaWNraXR5LXZpZXdwb3J0IHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5mbGlja2l0eS1zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIGRyYWdnYWJsZSAqL1xcblxcbi5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICB0YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSAuZmxpY2tpdHktdmlld3BvcnQge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XFxuICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5mbGlja2l0eS1lbmFibGVkLmlzLWRyYWdnYWJsZSAuZmxpY2tpdHktdmlld3BvcnQuaXMtcG9pbnRlci1kb3duIHtcXG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcXG4gIGN1cnNvcjogZ3JhYmJpbmc7XFxufVxcblxcbi8qIC0tLS0gZmxpY2tpdHktYnV0dG9uIC0tLS0gKi9cXG5cXG4uZmxpY2tpdHktYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIDAuNzUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5mbGlja2l0eS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mbGlja2l0eS1idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCAjMTlGO1xcbn1cXG5cXG4uZmxpY2tpdHktYnV0dG9uOmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwLjY7XFxufVxcblxcbi5mbGlja2l0eS1idXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgY3Vyc29yOiBhdXRvO1xcbiAgLyogcHJldmVudCBkaXNhYmxlZCBidXR0b24gZnJvbSBjYXB0dXJpbmcgcG9pbnRlciB1cCBldmVudC4gIzcxNiAqL1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5mbGlja2l0eS1idXR0b24taWNvbiB7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi8qIC0tLS0gcHJldmlvdXMvbmV4dCBidXR0b25zIC0tLS0gKi9cXG5cXG4uZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbiB7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiA0NHB4O1xcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgLyogdmVydGljYWxseSBjZW50ZXIgKi9cXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMgeyBsZWZ0OiAxMHB4OyB9XFxuLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ubmV4dCB7IHJpZ2h0OiAxMHB4OyB9XFxuLyogcmlnaHQgdG8gbGVmdCAqL1xcbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXByZXYtbmV4dC1idXR0b24ucHJldmlvdXMge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAxMHB4O1xcbn1cXG4uZmxpY2tpdHktcnRsIC5mbGlja2l0eS1wcmV2LW5leHQtYnV0dG9uLm5leHQge1xcbiAgcmlnaHQ6IGF1dG87XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbiAuZmxpY2tpdHktYnV0dG9uLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMjAlO1xcbiAgdG9wOiAyMCU7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA2MCU7XFxufVxcblxcbi8qIC0tLS0gcGFnZSBkb3RzIC0tLS0gKi9cXG5cXG4uZmxpY2tpdHktcGFnZS1kb3RzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAtMjVweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbi5mbGlja2l0eS1ydGwgLmZsaWNraXR5LXBhZ2UtZG90cyB7IGRpcmVjdGlvbjogcnRsOyB9XFxuXFxuLmZsaWNraXR5LXBhZ2UtZG90cyAuZG90IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luOiAwIDhweDtcXG4gIGJhY2tncm91bmQ6ICMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBvcGFjaXR5OiAwLjI1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmxpY2tpdHktcGFnZS1kb3RzIC5kb3QuaXMtc2VsZWN0ZWQge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJhZjhiYzQ4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2Rpc3QvZmxpY2tpdHkuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYWY4YmM0OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9kaXN0L2ZsaWNraXR5LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiAqIG1hdGNoZXNTZWxlY3RvciB2Mi4wLjJcbiAqIG1hdGNoZXNTZWxlY3RvciggZWxlbWVudCwgJy5zZWxlY3RvcicgKVxuICogTUlUIGxpY2Vuc2VcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlLCB1bnVzZWQ6IHRydWUgKi9cblxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvKmdsb2JhbCBkZWZpbmU6IGZhbHNlLCBtb2R1bGU6IGZhbHNlICovXG4gICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBmYWN0b3J5ICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5tYXRjaGVzU2VsZWN0b3IgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG1hdGNoZXNNZXRob2QgPSAoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBFbGVtUHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBzdGFuZGFyZCBtZXRob2QgbmFtZSBmaXJzdFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXMgKSB7XG4gICAgICByZXR1cm4gJ21hdGNoZXMnO1xuICAgIH1cbiAgICAvLyBjaGVjayB1bi1wcmVmaXhlZFxuICAgIGlmICggRWxlbVByb3RvLm1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiAnbWF0Y2hlc1NlbGVjdG9yJztcbiAgICB9XG4gICAgLy8gY2hlY2sgdmVuZG9yIHByZWZpeGVzXG4gICAgdmFyIHByZWZpeGVzID0gWyAnd2Via2l0JywgJ21veicsICdtcycsICdvJyBdO1xuXG4gICAgZm9yICggdmFyIGk9MDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrICkge1xuICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgICAgdmFyIG1ldGhvZCA9IHByZWZpeCArICdNYXRjaGVzU2VsZWN0b3InO1xuICAgICAgaWYgKCBFbGVtUHJvdG9bIG1ldGhvZCBdICkge1xuICAgICAgICByZXR1cm4gbWV0aG9kO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcblxuICByZXR1cm4gZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBzZWxlY3RvciApIHtcbiAgICByZXR1cm4gZWxlbVsgbWF0Y2hlc01ldGhvZCBdKCBzZWxlY3RvciApO1xuICB9O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Rlc2FuZHJvLW1hdGNoZXMtc2VsZWN0b3IvbWF0Y2hlcy1zZWxlY3Rvci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiAqIEV2RW1pdHRlciB2MS4xLjBcbiAqIExpbCcgZXZlbnQgZW1pdHRlclxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4vKiBqc2hpbnQgdW51c2VkOiB0cnVlLCB1bmRlZjogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHdpbmRvdyAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRCAtIFJlcXVpcmVKU1xuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTIC0gQnJvd3NlcmlmeSwgV2VicGFja1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XG4gIH1cblxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gRXZFbWl0dGVyKCkge31cblxudmFyIHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcblxucHJvdG8ub24gPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2V0IGV2ZW50cyBoYXNoXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIC8vIHNldCBsaXN0ZW5lcnMgYXJyYXlcbiAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xuICAvLyBvbmx5IGFkZCBvbmNlXG4gIGlmICggbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICkgPT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gYWRkIGV2ZW50XG4gIHRoaXMub24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKTtcbiAgLy8gc2V0IG9uY2UgZmxhZ1xuICAvLyBzZXQgb25jZUV2ZW50cyBoYXNoXG4gIHZhciBvbmNlRXZlbnRzID0gdGhpcy5fb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgfHwge307XG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxuICB2YXIgb25jZUxpc3RlbmVycyA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gfHwge307XG4gIC8vIHNldCBmbGFnXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8ub2ZmID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcbiAgaWYgKCAhbGlzdGVuZXJzIHx8ICFsaXN0ZW5lcnMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZiggbGlzdGVuZXIgKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gY29weSBvdmVyIHRvIGF2b2lkIGludGVyZmVyZW5jZSBpZiAub2ZmKCkgaW4gbGlzdGVuZXJcbiAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLnNsaWNlKDApO1xuICBhcmdzID0gYXJncyB8fCBbXTtcbiAgLy8gb25jZSBzdHVmZlxuICB2YXIgb25jZUxpc3RlbmVycyA9IHRoaXMuX29uY2VFdmVudHMgJiYgdGhpcy5fb25jZUV2ZW50c1sgZXZlbnROYW1lIF07XG5cbiAgZm9yICggdmFyIGk9MDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV1cbiAgICB2YXIgaXNPbmNlID0gb25jZUxpc3RlbmVycyAmJiBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIGlmICggaXNPbmNlICkge1xuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXG4gICAgICAvLyByZW1vdmUgYmVmb3JlIHRyaWdnZXIgdG8gcHJldmVudCByZWN1cnNpb25cbiAgICAgIHRoaXMub2ZmKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcbiAgICAgIGRlbGV0ZSBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXG4gICAgbGlzdGVuZXIuYXBwbHkoIHRoaXMsIGFyZ3MgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uYWxsT2ZmID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLl9ldmVudHM7XG4gIGRlbGV0ZSB0aGlzLl9vbmNlRXZlbnRzO1xufTtcblxucmV0dXJuIEV2RW1pdHRlcjtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZXYtZW1pdHRlci9ldi1lbWl0dGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9ldi1lbWl0dGVyL2V2LWVtaXR0ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLyoqXG4gKiBGaXp6eSBVSSB1dGlscyB2Mi4wLjdcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qanNoaW50IHN0cmljdDogZmFsc2UgKi8gLypnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG5cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICdkZXNhbmRyby1tYXRjaGVzLXNlbGVjdG9yL21hdGNoZXMtc2VsZWN0b3InXG4gICAgXSwgZnVuY3Rpb24oIG1hdGNoZXNTZWxlY3RvciApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIG1hdGNoZXNTZWxlY3RvciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZGVzYW5kcm8tbWF0Y2hlcy1zZWxlY3RvcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5maXp6eVVJVXRpbHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93Lm1hdGNoZXNTZWxlY3RvclxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIG1hdGNoZXNTZWxlY3RvciApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSB7fTtcblxuLy8gLS0tLS0gZXh0ZW5kIC0tLS0tIC8vXG5cbi8vIGV4dGVuZHMgb2JqZWN0c1xudXRpbHMuZXh0ZW5kID0gZnVuY3Rpb24oIGEsIGIgKSB7XG4gIGZvciAoIHZhciBwcm9wIGluIGIgKSB7XG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xuICB9XG4gIHJldHVybiBhO1xufTtcblxuLy8gLS0tLS0gbW9kdWxvIC0tLS0tIC8vXG5cbnV0aWxzLm1vZHVsbyA9IGZ1bmN0aW9uKCBudW0sIGRpdiApIHtcbiAgcmV0dXJuICggKCBudW0gJSBkaXYgKSArIGRpdiApICUgZGl2O1xufTtcblxuLy8gLS0tLS0gbWFrZUFycmF5IC0tLS0tIC8vXG5cbnZhciBhcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxudXRpbHMubWFrZUFycmF5ID0gZnVuY3Rpb24oIG9iaiApIHtcbiAgaWYgKCBBcnJheS5pc0FycmF5KCBvYmogKSApIHtcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcbiAgICByZXR1cm4gb2JqO1xuICB9XG4gIC8vIHJldHVybiBlbXB0eSBhcnJheSBpZiB1bmRlZmluZWQgb3IgbnVsbC4gIzZcbiAgaWYgKCBvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQgKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGlzQXJyYXlMaWtlID0gdHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJztcbiAgaWYgKCBpc0FycmF5TGlrZSApIHtcbiAgICAvLyBjb252ZXJ0IG5vZGVMaXN0IHRvIGFycmF5XG4gICAgcmV0dXJuIGFycmF5U2xpY2UuY2FsbCggb2JqICk7XG4gIH1cblxuICAvLyBhcnJheSBvZiBzaW5nbGUgaW5kZXhcbiAgcmV0dXJuIFsgb2JqIF07XG59O1xuXG4vLyAtLS0tLSByZW1vdmVGcm9tIC0tLS0tIC8vXG5cbnV0aWxzLnJlbW92ZUZyb20gPSBmdW5jdGlvbiggYXJ5LCBvYmogKSB7XG4gIHZhciBpbmRleCA9IGFyeS5pbmRleE9mKCBvYmogKTtcbiAgaWYgKCBpbmRleCAhPSAtMSApIHtcbiAgICBhcnkuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59O1xuXG4vLyAtLS0tLSBnZXRQYXJlbnQgLS0tLS0gLy9cblxudXRpbHMuZ2V0UGFyZW50ID0gZnVuY3Rpb24oIGVsZW0sIHNlbGVjdG9yICkge1xuICB3aGlsZSAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtICE9IGRvY3VtZW50LmJvZHkgKSB7XG4gICAgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cbiAgfVxufTtcblxuLy8gLS0tLS0gZ2V0UXVlcnlFbGVtZW50IC0tLS0tIC8vXG5cbi8vIHVzZSBlbGVtZW50IGFzIHNlbGVjdG9yIHN0cmluZ1xudXRpbHMuZ2V0UXVlcnlFbGVtZW50ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuICByZXR1cm4gZWxlbTtcbn07XG5cbi8vIC0tLS0tIGhhbmRsZUV2ZW50IC0tLS0tIC8vXG5cbi8vIGVuYWJsZSAub250eXBlIHRvIHRyaWdnZXIgZnJvbSAuYWRkRXZlbnRMaXN0ZW5lciggZWxlbSwgJ3R5cGUnIClcbnV0aWxzLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGZpbHRlckZpbmRFbGVtZW50cyAtLS0tLSAvL1xuXG51dGlscy5maWx0ZXJGaW5kRWxlbWVudHMgPSBmdW5jdGlvbiggZWxlbXMsIHNlbGVjdG9yICkge1xuICAvLyBtYWtlIGFycmF5IG9mIGVsZW1zXG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB2YXIgZmZFbGVtcyA9IFtdO1xuXG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIC8vIGNoZWNrIHRoYXQgZWxlbSBpcyBhbiBhY3R1YWwgZWxlbWVudFxuICAgIGlmICggISggZWxlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGFkZCBlbGVtIGlmIG5vIHNlbGVjdG9yXG4gICAgaWYgKCAhc2VsZWN0b3IgKSB7XG4gICAgICBmZkVsZW1zLnB1c2goIGVsZW0gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGEgc2VsZWN0b3JcbiAgICAvLyBmaWx0ZXJcbiAgICBpZiAoIG1hdGNoZXNTZWxlY3RvciggZWxlbSwgc2VsZWN0b3IgKSApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggZWxlbSApO1xuICAgIH1cbiAgICAvLyBmaW5kIGNoaWxkcmVuXG4gICAgdmFyIGNoaWxkRWxlbXMgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICk7XG4gICAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgICBmb3IgKCB2YXIgaT0wOyBpIDwgY2hpbGRFbGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICAgIGZmRWxlbXMucHVzaCggY2hpbGRFbGVtc1tpXSApO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGZmRWxlbXM7XG59O1xuXG4vLyAtLS0tLSBkZWJvdW5jZU1ldGhvZCAtLS0tLSAvL1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCA9IGZ1bmN0aW9uKCBfY2xhc3MsIG1ldGhvZE5hbWUsIHRocmVzaG9sZCApIHtcbiAgdGhyZXNob2xkID0gdGhyZXNob2xkIHx8IDEwMDtcbiAgLy8gb3JpZ2luYWwgbWV0aG9kXG4gIHZhciBtZXRob2QgPSBfY2xhc3MucHJvdG90eXBlWyBtZXRob2ROYW1lIF07XG4gIHZhciB0aW1lb3V0TmFtZSA9IG1ldGhvZE5hbWUgKyAnVGltZW91dCc7XG5cbiAgX2NsYXNzLnByb3RvdHlwZVsgbWV0aG9kTmFtZSBdID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzWyB0aW1lb3V0TmFtZSBdO1xuICAgIGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICB0aGlzWyB0aW1lb3V0TmFtZSBdID0gc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBtZXRob2QuYXBwbHkoIF90aGlzLCBhcmdzICk7XG4gICAgICBkZWxldGUgX3RoaXNbIHRpbWVvdXROYW1lIF07XG4gICAgfSwgdGhyZXNob2xkICk7XG4gIH07XG59O1xuXG4vLyAtLS0tLSBkb2NSZWFkeSAtLS0tLSAvL1xuXG51dGlscy5kb2NSZWFkeSA9IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgdmFyIHJlYWR5U3RhdGUgPSBkb2N1bWVudC5yZWFkeVN0YXRlO1xuICBpZiAoIHJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJyB8fCByZWFkeVN0YXRlID09ICdpbnRlcmFjdGl2ZScgKSB7XG4gICAgLy8gZG8gYXN5bmMgdG8gYWxsb3cgZm9yIG90aGVyIHNjcmlwdHMgdG8gcnVuLiBtZXRhZml6enkvZmxpY2tpdHkjNDQxXG4gICAgc2V0VGltZW91dCggY2FsbGJhY2sgKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NQ29udGVudExvYWRlZCcsIGNhbGxiYWNrICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIGh0bWxJbml0IC0tLS0tIC8vXG5cbi8vIGh0dHA6Ly9qYW1lc3JvYmVydHMubmFtZS9ibG9nLzIwMTAvMDIvMjIvc3RyaW5nLWZ1bmN0aW9ucy1mb3ItamF2YXNjcmlwdC10cmltLXRvLWNhbWVsLWNhc2UtdG8tZGFzaGVkLWFuZC10by11bmRlcnNjb3JlL1xudXRpbHMudG9EYXNoZWQgPSBmdW5jdGlvbiggc3RyICkge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoIC8oLikoW0EtWl0pL2csIGZ1bmN0aW9uKCBtYXRjaCwgJDEsICQyICkge1xuICAgIHJldHVybiAkMSArICctJyArICQyO1xuICB9KS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcbi8qKlxuICogYWxsb3cgdXNlciB0byBpbml0aWFsaXplIGNsYXNzZXMgdmlhIFtkYXRhLW5hbWVzcGFjZV0gb3IgLmpzLW5hbWVzcGFjZSBjbGFzc1xuICogaHRtbEluaXQoIFdpZGdldCwgJ3dpZGdldE5hbWUnIClcbiAqIG9wdGlvbnMgYXJlIHBhcnNlZCBmcm9tIGRhdGEtbmFtZXNwYWNlLW9wdGlvbnNcbiAqL1xudXRpbHMuaHRtbEluaXQgPSBmdW5jdGlvbiggV2lkZ2V0Q2xhc3MsIG5hbWVzcGFjZSApIHtcbiAgdXRpbHMuZG9jUmVhZHkoIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXNoZWROYW1lc3BhY2UgPSB1dGlscy50b0Rhc2hlZCggbmFtZXNwYWNlICk7XG4gICAgdmFyIGRhdGFBdHRyID0gJ2RhdGEtJyArIGRhc2hlZE5hbWVzcGFjZTtcbiAgICB2YXIgZGF0YUF0dHJFbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdbJyArIGRhdGFBdHRyICsgJ10nICk7XG4gICAgdmFyIGpzRGFzaEVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5qcy0nICsgZGFzaGVkTmFtZXNwYWNlICk7XG4gICAgdmFyIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBkYXRhQXR0ckVsZW1zIClcbiAgICAgIC5jb25jYXQoIHV0aWxzLm1ha2VBcnJheSgganNEYXNoRWxlbXMgKSApO1xuICAgIHZhciBkYXRhT3B0aW9uc0F0dHIgPSBkYXRhQXR0ciArICctb3B0aW9ucyc7XG4gICAgdmFyIGpRdWVyeSA9IHdpbmRvdy5qUXVlcnk7XG5cbiAgICBlbGVtcy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbSApIHtcbiAgICAgIHZhciBhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFBdHRyICkgfHxcbiAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUoIGRhdGFPcHRpb25zQXR0ciApO1xuICAgICAgdmFyIG9wdGlvbnM7XG4gICAgICB0cnkge1xuICAgICAgICBvcHRpb25zID0gYXR0ciAmJiBKU09OLnBhcnNlKCBhdHRyICk7XG4gICAgICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvciwgZG8gbm90IGluaXRpYWxpemVcbiAgICAgICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoICdFcnJvciBwYXJzaW5nICcgKyBkYXRhQXR0ciArICcgb24gJyArIGVsZW0uY2xhc3NOYW1lICtcbiAgICAgICAgICAnOiAnICsgZXJyb3IgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbml0aWFsaXplXG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgV2lkZ2V0Q2xhc3MoIGVsZW0sIG9wdGlvbnMgKTtcbiAgICAgIC8vIG1ha2UgYXZhaWxhYmxlIHZpYSAkKCkuZGF0YSgnbmFtZXNwYWNlJylcbiAgICAgIGlmICggalF1ZXJ5ICkge1xuICAgICAgICBqUXVlcnkuZGF0YSggZWxlbSwgbmFtZXNwYWNlLCBpbnN0YW5jZSApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH0pO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiB1dGlscztcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZml6enktdWktdXRpbHMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Zpenp5LXVpLXV0aWxzL3V0aWxzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIGFkZCwgcmVtb3ZlIGNlbGxcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBhcHBlbmQgY2VsbHMgdG8gYSBkb2N1bWVudCBmcmFnbWVudFxuZnVuY3Rpb24gZ2V0Q2VsbHNGcmFnbWVudCggY2VsbHMgKSB7XG4gIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY2VsbHMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGwgKSB7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGNlbGwuZWxlbWVudCApO1xuICB9KTtcbiAgcmV0dXJuIGZyYWdtZW50O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhZGQvcmVtb3ZlIGNlbGwgcHJvdG90eXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxuLyoqXG4gKiBJbnNlcnQsIHByZXBlbmQsIG9yIGFwcGVuZCBjZWxsc1xuICogQHBhcmFtIHtFbGVtZW50LCBBcnJheSwgTm9kZUxpc3R9IGVsZW1zXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGluZGV4XG4gKi9cbnByb3RvLmluc2VydCA9IGZ1bmN0aW9uKCBlbGVtcywgaW5kZXggKSB7XG4gIHZhciBjZWxscyA9IHRoaXMuX21ha2VDZWxscyggZWxlbXMgKTtcbiAgaWYgKCAhY2VsbHMgfHwgIWNlbGxzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGxlbiA9IHRoaXMuY2VsbHMubGVuZ3RoO1xuICAvLyBkZWZhdWx0IHRvIGFwcGVuZFxuICBpbmRleCA9IGluZGV4ID09PSB1bmRlZmluZWQgPyBsZW4gOiBpbmRleDtcbiAgLy8gYWRkIGNlbGxzIHdpdGggZG9jdW1lbnQgZnJhZ21lbnRcbiAgdmFyIGZyYWdtZW50ID0gZ2V0Q2VsbHNGcmFnbWVudCggY2VsbHMgKTtcbiAgLy8gYXBwZW5kIHRvIHNsaWRlclxuICB2YXIgaXNBcHBlbmQgPSBpbmRleCA9PSBsZW47XG4gIGlmICggaXNBcHBlbmQgKSB7XG4gICAgdGhpcy5zbGlkZXIuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc2VydENlbGxFbGVtZW50ID0gdGhpcy5jZWxsc1sgaW5kZXggXS5lbGVtZW50O1xuICAgIHRoaXMuc2xpZGVyLmluc2VydEJlZm9yZSggZnJhZ21lbnQsIGluc2VydENlbGxFbGVtZW50ICk7XG4gIH1cbiAgLy8gYWRkIHRvIHRoaXMuY2VsbHNcbiAgaWYgKCBpbmRleCA9PT0gMCApIHtcbiAgICAvLyBwcmVwZW5kLCBhZGQgdG8gc3RhcnRcbiAgICB0aGlzLmNlbGxzID0gY2VsbHMuY29uY2F0KCB0aGlzLmNlbGxzICk7XG4gIH0gZWxzZSBpZiAoIGlzQXBwZW5kICkge1xuICAgIC8vIGFwcGVuZCwgYWRkIHRvIGVuZFxuICAgIHRoaXMuY2VsbHMgPSB0aGlzLmNlbGxzLmNvbmNhdCggY2VsbHMgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpbnNlcnQgaW4gdGhpcy5jZWxsc1xuICAgIHZhciBlbmRDZWxscyA9IHRoaXMuY2VsbHMuc3BsaWNlKCBpbmRleCwgbGVuIC0gaW5kZXggKTtcbiAgICB0aGlzLmNlbGxzID0gdGhpcy5jZWxscy5jb25jYXQoIGNlbGxzICkuY29uY2F0KCBlbmRDZWxscyApO1xuICB9XG5cbiAgdGhpcy5fc2l6ZUNlbGxzKCBjZWxscyApO1xuICB0aGlzLmNlbGxDaGFuZ2UoIGluZGV4LCB0cnVlICk7XG59O1xuXG5wcm90by5hcHBlbmQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHRoaXMuaW5zZXJ0KCBlbGVtcywgdGhpcy5jZWxscy5sZW5ndGggKTtcbn07XG5cbnByb3RvLnByZXBlbmQgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHRoaXMuaW5zZXJ0KCBlbGVtcywgMCApO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgY2VsbHNcbiAqIEBwYXJhbSB7RWxlbWVudCwgQXJyYXksIE5vZGVMaXN0fSBlbGVtc1xuICovXG5wcm90by5yZW1vdmUgPSBmdW5jdGlvbiggZWxlbXMgKSB7XG4gIHZhciBjZWxscyA9IHRoaXMuZ2V0Q2VsbHMoIGVsZW1zICk7XG4gIGlmICggIWNlbGxzIHx8ICFjZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG1pbkNlbGxJbmRleCA9IHRoaXMuY2VsbHMubGVuZ3RoIC0gMTtcbiAgLy8gcmVtb3ZlIGNlbGxzIGZyb20gY29sbGVjdGlvbiAmIERPTVxuICBjZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLnJlbW92ZSgpO1xuICAgIHZhciBpbmRleCA9IHRoaXMuY2VsbHMuaW5kZXhPZiggY2VsbCApO1xuICAgIG1pbkNlbGxJbmRleCA9IE1hdGgubWluKCBpbmRleCwgbWluQ2VsbEluZGV4ICk7XG4gICAgdXRpbHMucmVtb3ZlRnJvbSggdGhpcy5jZWxscywgY2VsbCApO1xuICB9LCB0aGlzICk7XG5cbiAgdGhpcy5jZWxsQ2hhbmdlKCBtaW5DZWxsSW5kZXgsIHRydWUgKTtcbn07XG5cbi8qKlxuICogbG9naWMgdG8gYmUgcnVuIGFmdGVyIGEgY2VsbCdzIHNpemUgY2hhbmdlc1xuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtIC0gY2VsbCdzIGVsZW1lbnRcbiAqL1xucHJvdG8uY2VsbFNpemVDaGFuZ2UgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgdmFyIGNlbGwgPSB0aGlzLmdldENlbGwoIGVsZW0gKTtcbiAgaWYgKCAhY2VsbCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY2VsbC5nZXRTaXplKCk7XG5cbiAgdmFyIGluZGV4ID0gdGhpcy5jZWxscy5pbmRleE9mKCBjZWxsICk7XG4gIHRoaXMuY2VsbENoYW5nZSggaW5kZXggKTtcbn07XG5cbi8qKlxuICogbG9naWMgYW55IHRpbWUgYSBjZWxsIGlzIGNoYW5nZWQ6IGFkZGVkLCByZW1vdmVkLCBvciBzaXplIGNoYW5nZWRcbiAqIEBwYXJhbSB7SW50ZWdlcn0gY2hhbmdlZENlbGxJbmRleCAtIGluZGV4IG9mIHRoZSBjaGFuZ2VkIGNlbGwsIG9wdGlvbmFsXG4gKi9cbnByb3RvLmNlbGxDaGFuZ2UgPSBmdW5jdGlvbiggY2hhbmdlZENlbGxJbmRleCwgaXNQb3NpdGlvbmluZ1NsaWRlciApIHtcbiAgdmFyIHByZXZTZWxlY3RlZEVsZW0gPSB0aGlzLnNlbGVjdGVkRWxlbWVudDtcbiAgdGhpcy5fcG9zaXRpb25DZWxscyggY2hhbmdlZENlbGxJbmRleCApO1xuICB0aGlzLl9nZXRXcmFwU2hpZnRDZWxscygpO1xuICB0aGlzLnNldEdhbGxlcnlTaXplKCk7XG4gIC8vIHVwZGF0ZSBzZWxlY3RlZEluZGV4XG4gIC8vIHRyeSB0byBtYWludGFpbiBwb3NpdGlvbiAmIHNlbGVjdCBwcmV2aW91cyBzZWxlY3RlZCBlbGVtZW50XG4gIHZhciBjZWxsID0gdGhpcy5nZXRDZWxsKCBwcmV2U2VsZWN0ZWRFbGVtICk7XG4gIGlmICggY2VsbCApIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmdldENlbGxTbGlkZUluZGV4KCBjZWxsICk7XG4gIH1cbiAgdGhpcy5zZWxlY3RlZEluZGV4ID0gTWF0aC5taW4oIHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEsIHRoaXMuc2VsZWN0ZWRJbmRleCApO1xuXG4gIHRoaXMuZW1pdEV2ZW50KCAnY2VsbENoYW5nZScsIFsgY2hhbmdlZENlbGxJbmRleCBdICk7XG4gIC8vIHBvc2l0aW9uIHNsaWRlclxuICB0aGlzLnNlbGVjdCggdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIC8vIGRvIG5vdCBwb3NpdGlvbiBzbGlkZXIgYWZ0ZXIgbGF6eSBsb2FkXG4gIGlmICggaXNQb3NpdGlvbmluZ1NsaWRlciApIHtcbiAgICB0aGlzLnBvc2l0aW9uU2xpZGVyQXRTZWxlY3RlZCgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9hZGQtcmVtb3ZlLWNlbGwuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2FkZC1yZW1vdmUtY2VsbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBhbmltYXRlXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgIF0sIGZ1bmN0aW9uKCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIHV0aWxzICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5GbGlja2l0eSA9IHdpbmRvdy5GbGlja2l0eSB8fCB7fTtcbiAgICB3aW5kb3cuRmxpY2tpdHkuYW5pbWF0ZVByb3RvdHlwZSA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgdXRpbHMgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYW5pbWF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgcHJvdG8gPSB7fTtcblxucHJvdG8uc3RhcnRBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzQW5pbWF0aW5nICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xuICB0aGlzLnJlc3RpbmdGcmFtZXMgPSAwO1xuICB0aGlzLmFuaW1hdGUoKTtcbn07XG5cbnByb3RvLmFuaW1hdGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5hcHBseURyYWdGb3JjZSgpO1xuICB0aGlzLmFwcGx5U2VsZWN0ZWRBdHRyYWN0aW9uKCk7XG5cbiAgdmFyIHByZXZpb3VzWCA9IHRoaXMueDtcblxuICB0aGlzLmludGVncmF0ZVBoeXNpY3MoKTtcbiAgdGhpcy5wb3NpdGlvblNsaWRlcigpO1xuICB0aGlzLnNldHRsZSggcHJldmlvdXNYICk7XG4gIC8vIGFuaW1hdGUgbmV4dCBmcmFtZVxuICBpZiAoIHRoaXMuaXNBbmltYXRpbmcgKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIGZ1bmN0aW9uIGFuaW1hdGVGcmFtZSgpIHtcbiAgICAgIF90aGlzLmFuaW1hdGUoKTtcbiAgICB9KTtcbiAgfVxufTtcblxucHJvdG8ucG9zaXRpb25TbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHggPSB0aGlzLng7XG4gIC8vIHdyYXAgcG9zaXRpb24gYXJvdW5kXG4gIGlmICggdGhpcy5vcHRpb25zLndyYXBBcm91bmQgJiYgdGhpcy5jZWxscy5sZW5ndGggPiAxICkge1xuICAgIHggPSB1dGlscy5tb2R1bG8oIHgsIHRoaXMuc2xpZGVhYmxlV2lkdGggKTtcbiAgICB4ID0geCAtIHRoaXMuc2xpZGVhYmxlV2lkdGg7XG4gICAgdGhpcy5zaGlmdFdyYXBDZWxscyggeCApO1xuICB9XG5cbiAgdGhpcy5zZXRUcmFuc2xhdGVYKCB4LCB0aGlzLmlzQW5pbWF0aW5nICk7XG4gIHRoaXMuZGlzcGF0Y2hTY3JvbGxFdmVudCgpO1xufTtcblxucHJvdG8uc2V0VHJhbnNsYXRlWCA9IGZ1bmN0aW9uKCB4LCBpczNkICkge1xuICB4ICs9IHRoaXMuY3Vyc29yUG9zaXRpb247XG4gIC8vIHJldmVyc2UgaWYgcmlnaHQtdG8tbGVmdCBhbmQgdXNpbmcgdHJhbnNmb3JtXG4gIHggPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgPyAteCA6IHg7XG4gIHZhciB0cmFuc2xhdGVYID0gdGhpcy5nZXRQb3NpdGlvblZhbHVlKCB4ICk7XG4gIC8vIHVzZSAzRCB0cmFuZm9ybXMgZm9yIGhhcmR3YXJlIGFjY2VsZXJhdGlvbiBvbiBpT1NcbiAgLy8gYnV0IHVzZSAyRCB3aGVuIHNldHRsZWQsIGZvciBiZXR0ZXIgZm9udC1yZW5kZXJpbmdcbiAgdGhpcy5zbGlkZXIuc3R5bGUudHJhbnNmb3JtID0gaXMzZCA/XG4gICAgJ3RyYW5zbGF0ZTNkKCcgKyB0cmFuc2xhdGVYICsgJywwLDApJyA6ICd0cmFuc2xhdGVYKCcgKyB0cmFuc2xhdGVYICsgJyknO1xufTtcblxucHJvdG8uZGlzcGF0Y2hTY3JvbGxFdmVudCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZmlyc3RTbGlkZSA9IHRoaXMuc2xpZGVzWzBdO1xuICBpZiAoICFmaXJzdFNsaWRlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcG9zaXRpb25YID0gLXRoaXMueCAtIGZpcnN0U2xpZGUudGFyZ2V0O1xuICB2YXIgcHJvZ3Jlc3MgPSBwb3NpdGlvblggLyB0aGlzLnNsaWRlc1dpZHRoO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdzY3JvbGwnLCBudWxsLCBbIHByb2dyZXNzLCBwb3NpdGlvblggXSApO1xufTtcblxucHJvdG8ucG9zaXRpb25TbGlkZXJBdFNlbGVjdGVkID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnggPSAtdGhpcy5zZWxlY3RlZFNsaWRlLnRhcmdldDtcbiAgdGhpcy52ZWxvY2l0eSA9IDA7IC8vIHN0b3Agd29iYmxlXG4gIHRoaXMucG9zaXRpb25TbGlkZXIoKTtcbn07XG5cbnByb3RvLmdldFBvc2l0aW9uVmFsdWUgPSBmdW5jdGlvbiggcG9zaXRpb24gKSB7XG4gIGlmICggdGhpcy5vcHRpb25zLnBlcmNlbnRQb3NpdGlvbiApIHtcbiAgICAvLyBwZXJjZW50IHBvc2l0aW9uLCByb3VuZCB0byAyIGRpZ2l0cywgbGlrZSAxMi4zNCVcbiAgICByZXR1cm4gKCBNYXRoLnJvdW5kKCAoIHBvc2l0aW9uIC8gdGhpcy5zaXplLmlubmVyV2lkdGggKSAqIDEwMDAwICkgKiAwLjAxICkrICclJztcbiAgfSBlbHNlIHtcbiAgICAvLyBwaXhlbCBwb3NpdGlvbmluZ1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBwb3NpdGlvbiApICsgJ3B4JztcbiAgfVxufTtcblxucHJvdG8uc2V0dGxlID0gZnVuY3Rpb24oIHByZXZpb3VzWCApIHtcbiAgLy8ga2VlcCB0cmFjayBvZiBmcmFtZXMgd2hlcmUgeCBoYXNuJ3QgbW92ZWRcbiAgaWYgKCAhdGhpcy5pc1BvaW50ZXJEb3duICYmIE1hdGgucm91bmQoIHRoaXMueCAqIDEwMCApID09IE1hdGgucm91bmQoIHByZXZpb3VzWCAqIDEwMCApICkge1xuICAgIHRoaXMucmVzdGluZ0ZyYW1lcysrO1xuICB9XG4gIC8vIHN0b3AgYW5pbWF0aW5nIGlmIHJlc3RpbmcgZm9yIDMgb3IgbW9yZSBmcmFtZXNcbiAgaWYgKCB0aGlzLnJlc3RpbmdGcmFtZXMgPiAyICkge1xuICAgIHRoaXMuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICBkZWxldGUgdGhpcy5pc0ZyZWVTY3JvbGxpbmc7XG4gICAgLy8gcmVuZGVyIHBvc2l0aW9uIHdpdGggdHJhbnNsYXRlWCB3aGVuIHNldHRsZWRcbiAgICB0aGlzLnBvc2l0aW9uU2xpZGVyKCk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnc2V0dGxlJywgbnVsbCwgWyB0aGlzLnNlbGVjdGVkSW5kZXggXSApO1xuICB9XG59O1xuXG5wcm90by5zaGlmdFdyYXBDZWxscyA9IGZ1bmN0aW9uKCB4ICkge1xuICAvLyBzaGlmdCBiZWZvcmUgY2VsbHNcbiAgdmFyIGJlZm9yZUdhcCA9IHRoaXMuY3Vyc29yUG9zaXRpb24gKyB4O1xuICB0aGlzLl9zaGlmdENlbGxzKCB0aGlzLmJlZm9yZVNoaWZ0Q2VsbHMsIGJlZm9yZUdhcCwgLTEgKTtcbiAgLy8gc2hpZnQgYWZ0ZXIgY2VsbHNcbiAgdmFyIGFmdGVyR2FwID0gdGhpcy5zaXplLmlubmVyV2lkdGggLSAoIHggKyB0aGlzLnNsaWRlYWJsZVdpZHRoICsgdGhpcy5jdXJzb3JQb3NpdGlvbiApO1xuICB0aGlzLl9zaGlmdENlbGxzKCB0aGlzLmFmdGVyU2hpZnRDZWxscywgYWZ0ZXJHYXAsIDEgKTtcbn07XG5cbnByb3RvLl9zaGlmdENlbGxzID0gZnVuY3Rpb24oIGNlbGxzLCBnYXAsIHNoaWZ0ICkge1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgY2VsbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGNlbGwgPSBjZWxsc1tpXTtcbiAgICB2YXIgY2VsbFNoaWZ0ID0gZ2FwID4gMCA/IHNoaWZ0IDogMDtcbiAgICBjZWxsLndyYXBTaGlmdCggY2VsbFNoaWZ0ICk7XG4gICAgZ2FwIC09IGNlbGwuc2l6ZS5vdXRlcldpZHRoO1xuICB9XG59O1xuXG5wcm90by5fdW5zaGlmdENlbGxzID0gZnVuY3Rpb24oIGNlbGxzICkge1xuICBpZiAoICFjZWxscyB8fCAhY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKCB2YXIgaT0wOyBpIDwgY2VsbHMubGVuZ3RoOyBpKysgKSB7XG4gICAgY2VsbHNbaV0ud3JhcFNoaWZ0KCAwICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBoeXNpY3MgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8uaW50ZWdyYXRlUGh5c2ljcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eTtcbiAgdGhpcy52ZWxvY2l0eSAqPSB0aGlzLmdldEZyaWN0aW9uRmFjdG9yKCk7XG59O1xuXG5wcm90by5hcHBseUZvcmNlID0gZnVuY3Rpb24oIGZvcmNlICkge1xuICB0aGlzLnZlbG9jaXR5ICs9IGZvcmNlO1xufTtcblxucHJvdG8uZ2V0RnJpY3Rpb25GYWN0b3IgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIDEgLSB0aGlzLm9wdGlvbnNbIHRoaXMuaXNGcmVlU2Nyb2xsaW5nID8gJ2ZyZWVTY3JvbGxGcmljdGlvbicgOiAnZnJpY3Rpb24nIF07XG59O1xuXG5wcm90by5nZXRSZXN0aW5nUG9zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgLy8gbXkgdGhhbmtzIHRvIFN0ZXZlbiBXaXR0ZW5zLCB3aG8gc2ltcGxpZmllZCB0aGlzIG1hdGggZ3JlYXRseVxuICByZXR1cm4gdGhpcy54ICsgdGhpcy52ZWxvY2l0eSAvICggMSAtIHRoaXMuZ2V0RnJpY3Rpb25GYWN0b3IoKSApO1xufTtcblxucHJvdG8uYXBwbHlEcmFnRm9yY2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc0RyYWdnYWJsZSB8fCAhdGhpcy5pc1BvaW50ZXJEb3duICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBjaGFuZ2UgdGhlIHBvc2l0aW9uIHRvIGRyYWcgcG9zaXRpb24gYnkgYXBwbHlpbmcgZm9yY2VcbiAgdmFyIGRyYWdWZWxvY2l0eSA9IHRoaXMuZHJhZ1ggLSB0aGlzLng7XG4gIHZhciBkcmFnRm9yY2UgPSBkcmFnVmVsb2NpdHkgLSB0aGlzLnZlbG9jaXR5O1xuICB0aGlzLmFwcGx5Rm9yY2UoIGRyYWdGb3JjZSApO1xufTtcblxucHJvdG8uYXBwbHlTZWxlY3RlZEF0dHJhY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgLy8gZG8gbm90IGF0dHJhY3QgaWYgcG9pbnRlciBkb3duIG9yIG5vIHNsaWRlc1xuICB2YXIgZHJhZ0Rvd24gPSB0aGlzLmlzRHJhZ2dhYmxlICYmIHRoaXMuaXNQb2ludGVyRG93bjtcbiAgaWYgKCBkcmFnRG93biB8fCB0aGlzLmlzRnJlZVNjcm9sbGluZyB8fCAhdGhpcy5zbGlkZXMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgZGlzdGFuY2UgPSB0aGlzLnNlbGVjdGVkU2xpZGUudGFyZ2V0ICogLTEgLSB0aGlzLng7XG4gIHZhciBmb3JjZSA9IGRpc3RhbmNlICogdGhpcy5vcHRpb25zLnNlbGVjdGVkQXR0cmFjdGlvbjtcbiAgdGhpcy5hcHBseUZvcmNlKCBmb3JjZSApO1xufTtcblxucmV0dXJuIHByb3RvO1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9hbmltYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9hbmltYXRlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIEZsaWNraXR5LkNlbGxcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnXG4gICAgXSwgZnVuY3Rpb24oIGdldFNpemUgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBnZXRTaXplICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdnZXQtc2l6ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5GbGlja2l0eSA9IHdpbmRvdy5GbGlja2l0eSB8fCB7fTtcbiAgICB3aW5kb3cuRmxpY2tpdHkuQ2VsbCA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuZ2V0U2l6ZVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIGdldFNpemUgKSB7XG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gQ2VsbCggZWxlbSwgcGFyZW50ICkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICB0aGlzLmNyZWF0ZSgpO1xufVxuXG52YXIgcHJvdG8gPSBDZWxsLnByb3RvdHlwZTtcblxucHJvdG8uY3JlYXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuICB0aGlzLnggPSAwO1xuICB0aGlzLnNoaWZ0ID0gMDtcbn07XG5cbnByb3RvLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVzZXQgc3R5bGVcbiAgdGhpcy51bnNlbGVjdCgpO1xuICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgdmFyIHNpZGUgPSB0aGlzLnBhcmVudC5vcmlnaW5TaWRlO1xuICB0aGlzLmVsZW1lbnQuc3R5bGVbIHNpZGUgXSA9ICcnO1xufTtcblxucHJvdG8uZ2V0U2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnNpemUgPSBnZXRTaXplKCB0aGlzLmVsZW1lbnQgKTtcbn07XG5cbnByb3RvLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oIHggKSB7XG4gIHRoaXMueCA9IHg7XG4gIHRoaXMudXBkYXRlVGFyZ2V0KCk7XG4gIHRoaXMucmVuZGVyUG9zaXRpb24oIHggKTtcbn07XG5cbi8vIHNldERlZmF1bHRUYXJnZXQgdjEgbWV0aG9kLCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgcmVtb3ZlIGluIHYzXG5wcm90by51cGRhdGVUYXJnZXQgPSBwcm90by5zZXREZWZhdWx0VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtYXJnaW5Qcm9wZXJ0eSA9IHRoaXMucGFyZW50Lm9yaWdpblNpZGUgPT0gJ2xlZnQnID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0JztcbiAgdGhpcy50YXJnZXQgPSB0aGlzLnggKyB0aGlzLnNpemVbIG1hcmdpblByb3BlcnR5IF0gK1xuICAgIHRoaXMuc2l6ZS53aWR0aCAqIHRoaXMucGFyZW50LmNlbGxBbGlnbjtcbn07XG5cbnByb3RvLnJlbmRlclBvc2l0aW9uID0gZnVuY3Rpb24oIHggKSB7XG4gIC8vIHJlbmRlciBwb3NpdGlvbiBvZiBjZWxsIHdpdGggaW4gc2xpZGVyXG4gIHZhciBzaWRlID0gdGhpcy5wYXJlbnQub3JpZ2luU2lkZTtcbiAgdGhpcy5lbGVtZW50LnN0eWxlWyBzaWRlIF0gPSB0aGlzLnBhcmVudC5nZXRQb3NpdGlvblZhbHVlKCB4ICk7XG59O1xuXG5wcm90by5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLXNlbGVjdGVkJyk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG59O1xuXG5wcm90by51bnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2VsZWN0ZWQnKTtcbiAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SW50ZWdlcn0gZmFjdG9yIC0gMCwgMSwgb3IgLTFcbioqL1xucHJvdG8ud3JhcFNoaWZ0ID0gZnVuY3Rpb24oIHNoaWZ0ICkge1xuICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gIHRoaXMucmVuZGVyUG9zaXRpb24oIHRoaXMueCArIHRoaXMucGFyZW50LnNsaWRlYWJsZVdpZHRoICogc2hpZnQgKTtcbn07XG5cbnByb3RvLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5lbGVtZW50ICk7XG59O1xuXG5yZXR1cm4gQ2VsbDtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvY2VsbC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvY2VsbC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBkcmFnXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJy4vZmxpY2tpdHknLFxuICAgICAgJ3VuaWRyYWdnZXIvdW5pZHJhZ2dlcicsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCBVbmlkcmFnZ2VyLCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlkcmFnZ2VyLCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgndW5pZHJhZ2dlcicpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuRmxpY2tpdHkgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LlVuaWRyYWdnZXIsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFVuaWRyYWdnZXIsIHV0aWxzICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIC0tLS0tIGRlZmF1bHRzIC0tLS0tIC8vXG5cbnV0aWxzLmV4dGVuZCggRmxpY2tpdHkuZGVmYXVsdHMsIHtcbiAgZHJhZ2dhYmxlOiAnPjEnLFxuICBkcmFnVGhyZXNob2xkOiAzLFxufSk7XG5cbi8vIC0tLS0tIGNyZWF0ZSAtLS0tLSAvL1xuXG5GbGlja2l0eS5jcmVhdGVNZXRob2RzLnB1c2goJ19jcmVhdGVEcmFnJyk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRyYWcgcHJvdG90eXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcbnV0aWxzLmV4dGVuZCggcHJvdG8sIFVuaWRyYWdnZXIucHJvdG90eXBlICk7XG5wcm90by5fdG91Y2hBY3Rpb25WYWx1ZSA9ICdwYW4teSc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgaXNUb3VjaCA9ICdjcmVhdGVUb3VjaCcgaW4gZG9jdW1lbnQ7XG52YXIgaXNUb3VjaG1vdmVTY3JvbGxDYW5jZWxlZCA9IGZhbHNlO1xuXG5wcm90by5fY3JlYXRlRHJhZyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9uKCAnYWN0aXZhdGUnLCB0aGlzLm9uQWN0aXZhdGVEcmFnICk7XG4gIHRoaXMub24oICd1aUNoYW5nZScsIHRoaXMuX3VpQ2hhbmdlRHJhZyApO1xuICB0aGlzLm9uKCAnZGVhY3RpdmF0ZScsIHRoaXMub25EZWFjdGl2YXRlRHJhZyApO1xuICB0aGlzLm9uKCAnY2VsbENoYW5nZScsIHRoaXMudXBkYXRlRHJhZ2dhYmxlICk7XG4gIC8vIFRPRE8gdXBkYXRlRHJhZ2dhYmxlIG9uIHJlc2l6ZT8gaWYgZ3JvdXBDZWxscyAmIHNsaWRlcyBjaGFuZ2VcbiAgLy8gSEFDSyAtIGFkZCBzZWVtaW5nbHkgaW5ub2N1b3VzIGhhbmRsZXIgdG8gZml4IGlPUyAxMCBzY3JvbGwgYmVoYXZpb3JcbiAgLy8gIzQ1NywgUnViYVhhL1NvcnRhYmxlIzk3M1xuICBpZiAoIGlzVG91Y2ggJiYgIWlzVG91Y2htb3ZlU2Nyb2xsQ2FuY2VsZWQgKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBmdW5jdGlvbigpIHt9KTtcbiAgICBpc1RvdWNobW92ZVNjcm9sbENhbmNlbGVkID0gdHJ1ZTtcbiAgfVxufTtcblxucHJvdG8ub25BY3RpdmF0ZURyYWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5oYW5kbGVzID0gWyB0aGlzLnZpZXdwb3J0IF07XG4gIHRoaXMuYmluZEhhbmRsZXMoKTtcbiAgdGhpcy51cGRhdGVEcmFnZ2FibGUoKTtcbn07XG5cbnByb3RvLm9uRGVhY3RpdmF0ZURyYWcgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy51bmJpbmRIYW5kbGVzKCk7XG4gIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kcmFnZ2FibGUnKTtcbn07XG5cbnByb3RvLnVwZGF0ZURyYWdnYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBkaXNhYmxlIGRyYWdnaW5nIGlmIGxlc3MgdGhhbiAyIHNsaWRlcy4gIzI3OFxuICBpZiAoIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUgPT0gJz4xJyApIHtcbiAgICB0aGlzLmlzRHJhZ2dhYmxlID0gdGhpcy5zbGlkZXMubGVuZ3RoID4gMTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzRHJhZ2dhYmxlID0gdGhpcy5vcHRpb25zLmRyYWdnYWJsZTtcbiAgfVxuICBpZiAoIHRoaXMuaXNEcmFnZ2FibGUgKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWRyYWdnYWJsZScpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kcmFnZ2FibGUnKTtcbiAgfVxufTtcblxuLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbnByb3RvLmJpbmREcmFnID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub3B0aW9ucy5kcmFnZ2FibGUgPSB0cnVlO1xuICB0aGlzLnVwZGF0ZURyYWdnYWJsZSgpO1xufTtcblxucHJvdG8udW5iaW5kRHJhZyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlID0gZmFsc2U7XG4gIHRoaXMudXBkYXRlRHJhZ2dhYmxlKCk7XG59O1xuXG5wcm90by5fdWlDaGFuZ2VEcmFnID0gZnVuY3Rpb24oKSB7XG4gIGRlbGV0ZSB0aGlzLmlzRnJlZVNjcm9sbGluZztcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBvaW50ZXIgZXZlbnRzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnByb3RvLnBvaW50ZXJEb3duID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICBpZiAoICF0aGlzLmlzRHJhZ2dhYmxlICkge1xuICAgIHRoaXMuX3BvaW50ZXJEb3duRGVmYXVsdCggZXZlbnQsIHBvaW50ZXIgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGlzT2theSA9IHRoaXMub2theVBvaW50ZXJEb3duKCBldmVudCApO1xuICBpZiAoICFpc09rYXkgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5fcG9pbnRlckRvd25QcmV2ZW50RGVmYXVsdCggZXZlbnQgKTtcbiAgdGhpcy5wb2ludGVyRG93bkZvY3VzKCBldmVudCApO1xuICAvLyBibHVyXG4gIGlmICggZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPSB0aGlzLmVsZW1lbnQgKSB7XG4gICAgLy8gZG8gbm90IGJsdXIgaWYgYWxyZWFkeSBmb2N1c2VkXG4gICAgdGhpcy5wb2ludGVyRG93bkJsdXIoKTtcbiAgfVxuXG4gIC8vIHN0b3AgaWYgaXQgd2FzIG1vdmluZ1xuICB0aGlzLmRyYWdYID0gdGhpcy54O1xuICB0aGlzLnZpZXdwb3J0LmNsYXNzTGlzdC5hZGQoJ2lzLXBvaW50ZXItZG93bicpO1xuICAvLyB0cmFjayBzY3JvbGxpbmdcbiAgdGhpcy5wb2ludGVyRG93blNjcm9sbCA9IGdldFNjcm9sbFBvc2l0aW9uKCk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnc2Nyb2xsJywgdGhpcyApO1xuXG4gIHRoaXMuX3BvaW50ZXJEb3duRGVmYXVsdCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbi8vIGRlZmF1bHQgcG9pbnRlckRvd24gbG9naWMsIHVzZWQgZm9yIHN0YXRpY0NsaWNrXG5wcm90by5fcG9pbnRlckRvd25EZWZhdWx0ID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICAvLyB0cmFjayBzdGFydCBldmVudCBwb3NpdGlvblxuICAvLyBTYWZhcmkgOSBvdmVycmlkZXMgcGFnZVggYW5kIHBhZ2VZLiBUaGVzZSB2YWx1ZXMgbmVlZHMgdG8gYmUgY29waWVkLiAjNzc5XG4gIHRoaXMucG9pbnRlckRvd25Qb2ludGVyID0ge1xuICAgIHBhZ2VYOiBwb2ludGVyLnBhZ2VYLFxuICAgIHBhZ2VZOiBwb2ludGVyLnBhZ2VZLFxuICB9O1xuICAvLyBiaW5kIG1vdmUgYW5kIGVuZCBldmVudHNcbiAgdGhpcy5fYmluZFBvc3RTdGFydEV2ZW50cyggZXZlbnQgKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAncG9pbnRlckRvd24nLCBldmVudCwgWyBwb2ludGVyIF0gKTtcbn07XG5cbnZhciBmb2N1c05vZGVzID0ge1xuICBJTlBVVDogdHJ1ZSxcbiAgVEVYVEFSRUE6IHRydWUsXG4gIFNFTEVDVDogdHJ1ZSxcbn07XG5cbnByb3RvLnBvaW50ZXJEb3duRm9jdXMgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBpc0ZvY3VzTm9kZSA9IGZvY3VzTm9kZXNbIGV2ZW50LnRhcmdldC5ub2RlTmFtZSBdO1xuICBpZiAoICFpc0ZvY3VzTm9kZSApIHtcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH1cbn07XG5cbnByb3RvLl9wb2ludGVyRG93blByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgaXNUb3VjaFN0YXJ0ID0gZXZlbnQudHlwZSA9PSAndG91Y2hzdGFydCc7XG4gIHZhciBpc1RvdWNoUG9pbnRlciA9IGV2ZW50LnBvaW50ZXJUeXBlID09ICd0b3VjaCc7XG4gIHZhciBpc0ZvY3VzTm9kZSA9IGZvY3VzTm9kZXNbIGV2ZW50LnRhcmdldC5ub2RlTmFtZSBdO1xuICBpZiAoICFpc1RvdWNoU3RhcnQgJiYgIWlzVG91Y2hQb2ludGVyICYmICFpc0ZvY3VzTm9kZSApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59O1xuXG4vLyAtLS0tLSBtb3ZlIC0tLS0tIC8vXG5cbnByb3RvLmhhc0RyYWdTdGFydGVkID0gZnVuY3Rpb24oIG1vdmVWZWN0b3IgKSB7XG4gIHJldHVybiBNYXRoLmFicyggbW92ZVZlY3Rvci54ICkgPiB0aGlzLm9wdGlvbnMuZHJhZ1RocmVzaG9sZDtcbn07XG5cbi8vIC0tLS0tIHVwIC0tLS0tIC8vXG5cbnByb3RvLnBvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgZGVsZXRlIHRoaXMuaXNUb3VjaFNjcm9sbGluZztcbiAgdGhpcy52aWV3cG9ydC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1wb2ludGVyLWRvd24nKTtcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAncG9pbnRlclVwJywgZXZlbnQsIFsgcG9pbnRlciBdICk7XG4gIHRoaXMuX2RyYWdQb2ludGVyVXAoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG5wcm90by5wb2ludGVyRG9uZSA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Njcm9sbCcsIHRoaXMgKTtcbiAgZGVsZXRlIHRoaXMucG9pbnRlckRvd25TY3JvbGw7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkcmFnZ2luZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5wcm90by5kcmFnU3RhcnQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIGlmICggIXRoaXMuaXNEcmFnZ2FibGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB0aGlzLng7XG4gIHRoaXMuc3RhcnRBbmltYXRpb24oKTtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdzY3JvbGwnLCB0aGlzICk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2RyYWdTdGFydCcsIGV2ZW50LCBbIHBvaW50ZXIgXSApO1xufTtcblxucHJvdG8ucG9pbnRlck1vdmUgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHZhciBtb3ZlVmVjdG9yID0gdGhpcy5fZHJhZ1BvaW50ZXJNb3ZlKCBldmVudCwgcG9pbnRlciApO1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdwb2ludGVyTW92ZScsIGV2ZW50LCBbIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xuICB0aGlzLl9kcmFnTW92ZSggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKTtcbn07XG5cbnByb3RvLmRyYWdNb3ZlID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICkge1xuICBpZiAoICF0aGlzLmlzRHJhZ2dhYmxlICkge1xuICAgIHJldHVybjtcbiAgfVxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIHRoaXMucHJldmlvdXNEcmFnWCA9IHRoaXMuZHJhZ1g7XG4gIC8vIHJldmVyc2UgaWYgcmlnaHQtdG8tbGVmdFxuICB2YXIgZGlyZWN0aW9uID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0ID8gLTEgOiAxO1xuICBpZiAoIHRoaXMub3B0aW9ucy53cmFwQXJvdW5kICkge1xuICAgIC8vIHdyYXAgYXJvdW5kIG1vdmUuICM1ODlcbiAgICBtb3ZlVmVjdG9yLnggPSBtb3ZlVmVjdG9yLnggJSB0aGlzLnNsaWRlYWJsZVdpZHRoO1xuICB9XG4gIHZhciBkcmFnWCA9IHRoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gKyBtb3ZlVmVjdG9yLnggKiBkaXJlY3Rpb247XG5cbiAgaWYgKCAhdGhpcy5vcHRpb25zLndyYXBBcm91bmQgJiYgdGhpcy5zbGlkZXMubGVuZ3RoICkge1xuICAgIC8vIHNsb3cgZHJhZ1xuICAgIHZhciBvcmlnaW5Cb3VuZCA9IE1hdGgubWF4KCAtdGhpcy5zbGlkZXNbMF0udGFyZ2V0LCB0aGlzLmRyYWdTdGFydFBvc2l0aW9uICk7XG4gICAgZHJhZ1ggPSBkcmFnWCA+IG9yaWdpbkJvdW5kID8gKCBkcmFnWCArIG9yaWdpbkJvdW5kICkgKiAwLjUgOiBkcmFnWDtcbiAgICB2YXIgZW5kQm91bmQgPSBNYXRoLm1pbiggLXRoaXMuZ2V0TGFzdFNsaWRlKCkudGFyZ2V0LCB0aGlzLmRyYWdTdGFydFBvc2l0aW9uICk7XG4gICAgZHJhZ1ggPSBkcmFnWCA8IGVuZEJvdW5kID8gKCBkcmFnWCArIGVuZEJvdW5kICkgKiAwLjUgOiBkcmFnWDtcbiAgfVxuXG4gIHRoaXMuZHJhZ1ggPSBkcmFnWDtcblxuICB0aGlzLmRyYWdNb3ZlVGltZSA9IG5ldyBEYXRlKCk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ2RyYWdNb3ZlJywgZXZlbnQsIFsgcG9pbnRlciwgbW92ZVZlY3RvciBdICk7XG59O1xuXG5wcm90by5kcmFnRW5kID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICBpZiAoICF0aGlzLmlzRHJhZ2dhYmxlICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoIHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsICkge1xuICAgIHRoaXMuaXNGcmVlU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgfVxuICAvLyBzZXQgc2VsZWN0ZWRJbmRleCBiYXNlZCBvbiB3aGVyZSBmbGljayB3aWxsIGVuZCB1cFxuICB2YXIgaW5kZXggPSB0aGlzLmRyYWdFbmRSZXN0aW5nU2VsZWN0KCk7XG5cbiAgaWYgKCB0aGlzLm9wdGlvbnMuZnJlZVNjcm9sbCAmJiAhdGhpcy5vcHRpb25zLndyYXBBcm91bmQgKSB7XG4gICAgLy8gaWYgZnJlZS1zY3JvbGwgJiBub3Qgd3JhcCBhcm91bmRcbiAgICAvLyBkbyBub3QgZnJlZS1zY3JvbGwgaWYgZ29pbmcgb3V0c2lkZSBvZiBib3VuZGluZyBzbGlkZXNcbiAgICAvLyBzbyBib3VuZGluZyBzbGlkZXMgY2FuIGF0dHJhY3Qgc2xpZGVyLCBhbmQga2VlcCBpdCBpbiBib3VuZHNcbiAgICB2YXIgcmVzdGluZ1ggPSB0aGlzLmdldFJlc3RpbmdQb3NpdGlvbigpO1xuICAgIHRoaXMuaXNGcmVlU2Nyb2xsaW5nID0gLXJlc3RpbmdYID4gdGhpcy5zbGlkZXNbMF0udGFyZ2V0ICYmXG4gICAgICAtcmVzdGluZ1ggPCB0aGlzLmdldExhc3RTbGlkZSgpLnRhcmdldDtcbiAgfSBlbHNlIGlmICggIXRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsICYmIGluZGV4ID09IHRoaXMuc2VsZWN0ZWRJbmRleCApIHtcbiAgICAvLyBib29zdCBzZWxlY3Rpb24gaWYgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCBjaGFuZ2VkXG4gICAgaW5kZXggKz0gdGhpcy5kcmFnRW5kQm9vc3RTZWxlY3QoKTtcbiAgfVxuICBkZWxldGUgdGhpcy5wcmV2aW91c0RyYWdYO1xuICAvLyBhcHBseSBzZWxlY3Rpb25cbiAgLy8gVE9ETyByZWZhY3RvciB0aGlzLCBzZWxlY3RpbmcgaGVyZSBmZWVscyB3ZWlyZFxuICAvLyBIQUNLLCBzZXQgZmxhZyBzbyBkcmFnZ2luZyBzdGF5cyBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICB0aGlzLmlzRHJhZ1NlbGVjdCA9IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kO1xuICB0aGlzLnNlbGVjdCggaW5kZXggKTtcbiAgZGVsZXRlIHRoaXMuaXNEcmFnU2VsZWN0O1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoICdkcmFnRW5kJywgZXZlbnQsIFsgcG9pbnRlciBdICk7XG59O1xuXG5wcm90by5kcmFnRW5kUmVzdGluZ1NlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVzdGluZ1ggPSB0aGlzLmdldFJlc3RpbmdQb3NpdGlvbigpO1xuICAvLyBob3cgZmFyIGF3YXkgZnJvbSBzZWxlY3RlZCBzbGlkZVxuICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyggdGhpcy5nZXRTbGlkZURpc3RhbmNlKCAtcmVzdGluZ1gsIHRoaXMuc2VsZWN0ZWRJbmRleCApICk7XG4gIC8vIGdldCBjbG9zZXQgcmVzdGluZyBnb2luZyB1cCBhbmQgZ29pbmcgZG93blxuICB2YXIgcG9zaXRpdmVSZXN0aW5nID0gdGhpcy5fZ2V0Q2xvc2VzdFJlc3RpbmcoIHJlc3RpbmdYLCBkaXN0YW5jZSwgMSApO1xuICB2YXIgbmVnYXRpdmVSZXN0aW5nID0gdGhpcy5fZ2V0Q2xvc2VzdFJlc3RpbmcoIHJlc3RpbmdYLCBkaXN0YW5jZSwgLTEgKTtcbiAgLy8gdXNlIGNsb3NlciByZXN0aW5nIGZvciB3cmFwLWFyb3VuZFxuICB2YXIgaW5kZXggPSBwb3NpdGl2ZVJlc3RpbmcuZGlzdGFuY2UgPCBuZWdhdGl2ZVJlc3RpbmcuZGlzdGFuY2UgP1xuICAgIHBvc2l0aXZlUmVzdGluZy5pbmRleCA6IG5lZ2F0aXZlUmVzdGluZy5pbmRleDtcbiAgcmV0dXJuIGluZGV4O1xufTtcblxuLyoqXG4gKiBnaXZlbiByZXN0aW5nIFggYW5kIGRpc3RhbmNlIHRvIHNlbGVjdGVkIGNlbGxcbiAqIGdldCB0aGUgZGlzdGFuY2UgYW5kIGluZGV4IG9mIHRoZSBjbG9zZXN0IGNlbGxcbiAqIEBwYXJhbSB7TnVtYmVyfSByZXN0aW5nWCAtIGVzdGltYXRlZCBwb3N0LWZsaWNrIHJlc3RpbmcgcG9zaXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSBkaXN0YW5jZSAtIGRpc3RhbmNlIHRvIHNlbGVjdGVkIGNlbGxcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaW5jcmVtZW50IC0gKzEgb3IgLTEsIGdvaW5nIHVwIG9yIGRvd25cbiAqIEByZXR1cm5zIHtPYmplY3R9IC0geyBkaXN0YW5jZToge051bWJlcn0sIGluZGV4OiB7SW50ZWdlcn0gfVxuICovXG5wcm90by5fZ2V0Q2xvc2VzdFJlc3RpbmcgPSBmdW5jdGlvbiggcmVzdGluZ1gsIGRpc3RhbmNlLCBpbmNyZW1lbnQgKSB7XG4gIHZhciBpbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleDtcbiAgdmFyIG1pbkRpc3RhbmNlID0gSW5maW5pdHk7XG4gIHZhciBjb25kaXRpb24gPSB0aGlzLm9wdGlvbnMuY29udGFpbiAmJiAhdGhpcy5vcHRpb25zLndyYXBBcm91bmQgP1xuICAgIC8vIGlmIGNvbnRhaW4sIGtlZXAgZ29pbmcgaWYgZGlzdGFuY2UgaXMgZXF1YWwgdG8gbWluRGlzdGFuY2VcbiAgICBmdW5jdGlvbiggZCwgbWQgKSB7IHJldHVybiBkIDw9IG1kOyB9IDogZnVuY3Rpb24oIGQsIG1kICkgeyByZXR1cm4gZCA8IG1kOyB9O1xuICB3aGlsZSAoIGNvbmRpdGlvbiggZGlzdGFuY2UsIG1pbkRpc3RhbmNlICkgKSB7XG4gICAgLy8gbWVhc3VyZSBkaXN0YW5jZSB0byBuZXh0IGNlbGxcbiAgICBpbmRleCArPSBpbmNyZW1lbnQ7XG4gICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBkaXN0YW5jZSA9IHRoaXMuZ2V0U2xpZGVEaXN0YW5jZSggLXJlc3RpbmdYLCBpbmRleCApO1xuICAgIGlmICggZGlzdGFuY2UgPT09IG51bGwgKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZGlzdGFuY2UgPSBNYXRoLmFicyggZGlzdGFuY2UgKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGRpc3RhbmNlOiBtaW5EaXN0YW5jZSxcbiAgICAvLyBzZWxlY3RlZCB3YXMgcHJldmlvdXMgaW5kZXhcbiAgICBpbmRleDogaW5kZXggLSBpbmNyZW1lbnRcbiAgfTtcbn07XG5cbi8qKlxuICogbWVhc3VyZSBkaXN0YW5jZSBiZXR3ZWVuIHggYW5kIGEgc2xpZGUgdGFyZ2V0XG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogQHBhcmFtIHtJbnRlZ2VyfSBpbmRleCAtIHNsaWRlIGluZGV4XG4gKi9cbnByb3RvLmdldFNsaWRlRGlzdGFuY2UgPSBmdW5jdGlvbiggeCwgaW5kZXggKSB7XG4gIHZhciBsZW4gPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gIC8vIHdyYXAgYXJvdW5kIGlmIGF0IGxlYXN0IDIgc2xpZGVzXG4gIHZhciBpc1dyYXBBcm91bmQgPSB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCAmJiBsZW4gPiAxO1xuICB2YXIgc2xpZGVJbmRleCA9IGlzV3JhcEFyb3VuZCA/IHV0aWxzLm1vZHVsbyggaW5kZXgsIGxlbiApIDogaW5kZXg7XG4gIHZhciBzbGlkZSA9IHRoaXMuc2xpZGVzWyBzbGlkZUluZGV4IF07XG4gIGlmICggIXNsaWRlICkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8vIGFkZCBkaXN0YW5jZSBmb3Igd3JhcC1hcm91bmQgc2xpZGVzXG4gIHZhciB3cmFwID0gaXNXcmFwQXJvdW5kID8gdGhpcy5zbGlkZWFibGVXaWR0aCAqIE1hdGguZmxvb3IoIGluZGV4IC8gbGVuICkgOiAwO1xuICByZXR1cm4geCAtICggc2xpZGUudGFyZ2V0ICsgd3JhcCApO1xufTtcblxucHJvdG8uZHJhZ0VuZEJvb3N0U2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIGRvIG5vdCBib29zdCBpZiBubyBwcmV2aW91c0RyYWdYIG9yIGRyYWdNb3ZlVGltZVxuICBpZiAoIHRoaXMucHJldmlvdXNEcmFnWCA9PT0gdW5kZWZpbmVkIHx8ICF0aGlzLmRyYWdNb3ZlVGltZSB8fFxuICAgIC8vIG9yIGlmIGRyYWcgd2FzIGhlbGQgZm9yIDEwMCBtc1xuICAgIG5ldyBEYXRlKCkgLSB0aGlzLmRyYWdNb3ZlVGltZSA+IDEwMCApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHZhciBkaXN0YW5jZSA9IHRoaXMuZ2V0U2xpZGVEaXN0YW5jZSggLXRoaXMuZHJhZ1gsIHRoaXMuc2VsZWN0ZWRJbmRleCApO1xuICB2YXIgZGVsdGEgPSB0aGlzLnByZXZpb3VzRHJhZ1ggLSB0aGlzLmRyYWdYO1xuICBpZiAoIGRpc3RhbmNlID4gMCAmJiBkZWx0YSA+IDAgKSB7XG4gICAgLy8gYm9vc3QgdG8gbmV4dCBpZiBtb3ZpbmcgdG93YXJkcyB0aGUgcmlnaHQsIGFuZCBwb3NpdGl2ZSB2ZWxvY2l0eVxuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKCBkaXN0YW5jZSA8IDAgJiYgZGVsdGEgPCAwICkge1xuICAgIC8vIGJvb3N0IHRvIHByZXZpb3VzIGlmIG1vdmluZyB0b3dhcmRzIHRoZSBsZWZ0LCBhbmQgbmVnYXRpdmUgdmVsb2NpdHlcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgcmV0dXJuIDA7XG59O1xuXG4vLyAtLS0tLSBzdGF0aWNDbGljayAtLS0tLSAvL1xuXG5wcm90by5zdGF0aWNDbGljayA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gZ2V0IGNsaWNrZWRDZWxsLCBpZiBjZWxsIHdhcyBjbGlja2VkXG4gIHZhciBjbGlja2VkQ2VsbCA9IHRoaXMuZ2V0UGFyZW50Q2VsbCggZXZlbnQudGFyZ2V0ICk7XG4gIHZhciBjZWxsRWxlbSA9IGNsaWNrZWRDZWxsICYmIGNsaWNrZWRDZWxsLmVsZW1lbnQ7XG4gIHZhciBjZWxsSW5kZXggPSBjbGlja2VkQ2VsbCAmJiB0aGlzLmNlbGxzLmluZGV4T2YoIGNsaWNrZWRDZWxsICk7XG4gIHRoaXMuZGlzcGF0Y2hFdmVudCggJ3N0YXRpY0NsaWNrJywgZXZlbnQsIFsgcG9pbnRlciwgY2VsbEVsZW0sIGNlbGxJbmRleCBdICk7XG59O1xuXG4vLyAtLS0tLSBzY3JvbGwgLS0tLS0gLy9cblxucHJvdG8ub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNjcm9sbCA9IGdldFNjcm9sbFBvc2l0aW9uKCk7XG4gIHZhciBzY3JvbGxNb3ZlWCA9IHRoaXMucG9pbnRlckRvd25TY3JvbGwueCAtIHNjcm9sbC54O1xuICB2YXIgc2Nyb2xsTW92ZVkgPSB0aGlzLnBvaW50ZXJEb3duU2Nyb2xsLnkgLSBzY3JvbGwueTtcbiAgLy8gY2FuY2VsIGNsaWNrL3RhcCBpZiBzY3JvbGwgaXMgdG9vIG11Y2hcbiAgaWYgKCBNYXRoLmFicyggc2Nyb2xsTW92ZVggKSA+IDMgfHwgTWF0aC5hYnMoIHNjcm9sbE1vdmVZICkgPiAzICkge1xuICAgIHRoaXMuX3BvaW50ZXJEb25lKCk7XG4gIH1cbn07XG5cbi8vIC0tLS0tIHV0aWxzIC0tLS0tIC8vXG5cbmZ1bmN0aW9uIGdldFNjcm9sbFBvc2l0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXRcbiAgfTtcbn1cblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbnJldHVybiBGbGlja2l0eTtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvZHJhZy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvZHJhZy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBGbGlja2l0eSBtYWluXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsXG4gICAgICAnZ2V0LXNpemUvZ2V0LXNpemUnLFxuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJyxcbiAgICAgICcuL2NlbGwnLFxuICAgICAgJy4vc2xpZGUnLFxuICAgICAgJy4vYW5pbWF0ZSdcbiAgICBdLCBmdW5jdGlvbiggRXZFbWl0dGVyLCBnZXRTaXplLCB1dGlscywgQ2VsbCwgU2xpZGUsIGFuaW1hdGVQcm90b3R5cGUgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsIHV0aWxzLCBDZWxsLCBTbGlkZSwgYW5pbWF0ZVByb3RvdHlwZSApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnZXYtZW1pdHRlcicpLFxuICAgICAgcmVxdWlyZSgnZ2V0LXNpemUnKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJyksXG4gICAgICByZXF1aXJlKCcuL2NlbGwnKSxcbiAgICAgIHJlcXVpcmUoJy4vc2xpZGUnKSxcbiAgICAgIHJlcXVpcmUoJy4vYW5pbWF0ZScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHZhciBfRmxpY2tpdHkgPSB3aW5kb3cuRmxpY2tpdHk7XG5cbiAgICB3aW5kb3cuRmxpY2tpdHkgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkV2RW1pdHRlcixcbiAgICAgIHdpbmRvdy5nZXRTaXplLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICAgIF9GbGlja2l0eS5DZWxsLFxuICAgICAgX0ZsaWNraXR5LlNsaWRlLFxuICAgICAgX0ZsaWNraXR5LmFuaW1hdGVQcm90b3R5cGVcbiAgICApO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIsIGdldFNpemUsXG4gIHV0aWxzLCBDZWxsLCBTbGlkZSwgYW5pbWF0ZVByb3RvdHlwZSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyB2YXJzXG52YXIgalF1ZXJ5ID0gd2luZG93LmpRdWVyeTtcbnZhciBnZXRDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGU7XG52YXIgY29uc29sZSA9IHdpbmRvdy5jb25zb2xlO1xuXG5mdW5jdGlvbiBtb3ZlRWxlbWVudHMoIGVsZW1zLCB0b0VsZW0gKSB7XG4gIGVsZW1zID0gdXRpbHMubWFrZUFycmF5KCBlbGVtcyApO1xuICB3aGlsZSAoIGVsZW1zLmxlbmd0aCApIHtcbiAgICB0b0VsZW0uYXBwZW5kQ2hpbGQoIGVsZW1zLnNoaWZ0KCkgKTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBGbGlja2l0eSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllcnNcbnZhciBHVUlEID0gMDtcbi8vIGludGVybmFsIHN0b3JlIG9mIGFsbCBGbGlja2l0eSBpbnRhbmNlc1xudmFyIGluc3RhbmNlcyA9IHt9O1xuXG5mdW5jdGlvbiBGbGlja2l0eSggZWxlbWVudCwgb3B0aW9ucyApIHtcbiAgdmFyIHF1ZXJ5RWxlbWVudCA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbWVudCApO1xuICBpZiAoICFxdWVyeUVsZW1lbnQgKSB7XG4gICAgaWYgKCBjb25zb2xlICkge1xuICAgICAgY29uc29sZS5lcnJvciggJ0JhZCBlbGVtZW50IGZvciBGbGlja2l0eTogJyArICggcXVlcnlFbGVtZW50IHx8IGVsZW1lbnQgKSApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5lbGVtZW50ID0gcXVlcnlFbGVtZW50O1xuICAvLyBkbyBub3QgaW5pdGlhbGl6ZSB0d2ljZSBvbiBzYW1lIGVsZW1lbnRcbiAgaWYgKCB0aGlzLmVsZW1lbnQuZmxpY2tpdHlHVUlEICkge1xuICAgIHZhciBpbnN0YW5jZSA9IGluc3RhbmNlc1sgdGhpcy5lbGVtZW50LmZsaWNraXR5R1VJRCBdO1xuICAgIGluc3RhbmNlLm9wdGlvbiggb3B0aW9ucyApO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIC8vIGFkZCBqUXVlcnlcbiAgaWYgKCBqUXVlcnkgKSB7XG4gICAgdGhpcy4kZWxlbWVudCA9IGpRdWVyeSggdGhpcy5lbGVtZW50ICk7XG4gIH1cbiAgLy8gb3B0aW9uc1xuICB0aGlzLm9wdGlvbnMgPSB1dGlscy5leHRlbmQoIHt9LCB0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzICk7XG4gIHRoaXMub3B0aW9uKCBvcHRpb25zICk7XG5cbiAgLy8ga2ljayB0aGluZ3Mgb2ZmXG4gIHRoaXMuX2NyZWF0ZSgpO1xufVxuXG5GbGlja2l0eS5kZWZhdWx0cyA9IHtcbiAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgLy8gYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICBjZWxsQWxpZ246ICdjZW50ZXInLFxuICAvLyBjZWxsU2VsZWN0b3I6IHVuZGVmaW5lZCxcbiAgLy8gY29udGFpbjogZmFsc2UsXG4gIGZyZWVTY3JvbGxGcmljdGlvbjogMC4wNzUsIC8vIGZyaWN0aW9uIHdoZW4gZnJlZS1zY3JvbGxpbmdcbiAgZnJpY3Rpb246IDAuMjgsIC8vIGZyaWN0aW9uIHdoZW4gc2VsZWN0aW5nXG4gIG5hbWVzcGFjZUpRdWVyeUV2ZW50czogdHJ1ZSxcbiAgLy8gaW5pdGlhbEluZGV4OiAwLFxuICBwZXJjZW50UG9zaXRpb246IHRydWUsXG4gIHJlc2l6ZTogdHJ1ZSxcbiAgc2VsZWN0ZWRBdHRyYWN0aW9uOiAwLjAyNSxcbiAgc2V0R2FsbGVyeVNpemU6IHRydWVcbiAgLy8gd2F0Y2hDU1M6IGZhbHNlLFxuICAvLyB3cmFwQXJvdW5kOiBmYWxzZVxufTtcblxuLy8gaGFzaCBvZiBtZXRob2RzIHRyaWdnZXJlZCBvbiBfY3JlYXRlKClcbkZsaWNraXR5LmNyZWF0ZU1ldGhvZHMgPSBbXTtcblxudmFyIHByb3RvID0gRmxpY2tpdHkucHJvdG90eXBlO1xuLy8gaW5oZXJpdCBFdmVudEVtaXR0ZXJcbnV0aWxzLmV4dGVuZCggcHJvdG8sIEV2RW1pdHRlci5wcm90b3R5cGUgKTtcblxucHJvdG8uX2NyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAvLyBhZGQgaWQgZm9yIEZsaWNraXR5LmRhdGFcbiAgdmFyIGlkID0gdGhpcy5ndWlkID0gKytHVUlEO1xuICB0aGlzLmVsZW1lbnQuZmxpY2tpdHlHVUlEID0gaWQ7IC8vIGV4cGFuZG9cbiAgaW5zdGFuY2VzWyBpZCBdID0gdGhpczsgLy8gYXNzb2NpYXRlIHZpYSBpZFxuICAvLyBpbml0aWFsIHByb3BlcnRpZXNcbiAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgLy8gaG93IG1hbnkgZnJhbWVzIHNsaWRlciBoYXMgYmVlbiBpbiBzYW1lIHBvc2l0aW9uXG4gIHRoaXMucmVzdGluZ0ZyYW1lcyA9IDA7XG4gIC8vIGluaXRpYWwgcGh5c2ljcyBwcm9wZXJ0aWVzXG4gIHRoaXMueCA9IDA7XG4gIHRoaXMudmVsb2NpdHkgPSAwO1xuICB0aGlzLm9yaWdpblNpZGUgPSB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAvLyBjcmVhdGUgdmlld3BvcnQgJiBzbGlkZXJcbiAgdGhpcy52aWV3cG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlzLnZpZXdwb3J0LmNsYXNzTmFtZSA9ICdmbGlja2l0eS12aWV3cG9ydCc7XG4gIHRoaXMuX2NyZWF0ZVNsaWRlcigpO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLnJlc2l6ZSB8fCB0aGlzLm9wdGlvbnMud2F0Y2hDU1MgKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCB0aGlzICk7XG4gIH1cblxuICAvLyBhZGQgbGlzdGVuZXJzIGZyb20gb24gb3B0aW9uXG4gIGZvciAoIHZhciBldmVudE5hbWUgaW4gdGhpcy5vcHRpb25zLm9uICkge1xuICAgIHZhciBsaXN0ZW5lciA9IHRoaXMub3B0aW9ucy5vblsgZXZlbnROYW1lIF07XG4gICAgdGhpcy5vbiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICB9XG5cbiAgRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5mb3JFYWNoKCBmdW5jdGlvbiggbWV0aG9kICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCk7XG4gIH0sIHRoaXMgKTtcblxuICBpZiAoIHRoaXMub3B0aW9ucy53YXRjaENTUyApIHtcbiAgICB0aGlzLndhdGNoQ1NTKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5hY3RpdmF0ZSgpO1xuICB9XG5cbn07XG5cbi8qKlxuICogc2V0IG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKi9cbnByb3RvLm9wdGlvbiA9IGZ1bmN0aW9uKCBvcHRzICkge1xuICB1dGlscy5leHRlbmQoIHRoaXMub3B0aW9ucywgb3B0cyApO1xufTtcblxucHJvdG8uYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLmlzQWN0aXZlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZsaWNraXR5LWVuYWJsZWQnKTtcbiAgaWYgKCB0aGlzLm9wdGlvbnMucmlnaHRUb0xlZnQgKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZsaWNraXR5LXJ0bCcpO1xuICB9XG5cbiAgdGhpcy5nZXRTaXplKCk7XG4gIC8vIG1vdmUgaW5pdGlhbCBjZWxsIGVsZW1lbnRzIHNvIHRoZXkgY2FuIGJlIGxvYWRlZCBhcyBjZWxsc1xuICB2YXIgY2VsbEVsZW1zID0gdGhpcy5fZmlsdGVyRmluZENlbGxFbGVtZW50cyggdGhpcy5lbGVtZW50LmNoaWxkcmVuICk7XG4gIG1vdmVFbGVtZW50cyggY2VsbEVsZW1zLCB0aGlzLnNsaWRlciApO1xuICB0aGlzLnZpZXdwb3J0LmFwcGVuZENoaWxkKCB0aGlzLnNsaWRlciApO1xuICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoIHRoaXMudmlld3BvcnQgKTtcbiAgLy8gZ2V0IGNlbGxzIGZyb20gY2hpbGRyZW5cbiAgdGhpcy5yZWxvYWRDZWxscygpO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgKSB7XG4gICAgLy8gYWxsb3cgZWxlbWVudCB0byBmb2N1c2FibGVcbiAgICB0aGlzLmVsZW1lbnQudGFiSW5kZXggPSAwO1xuICAgIC8vIGxpc3RlbiBmb3Iga2V5IHByZXNzZXNcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCB0aGlzICk7XG4gIH1cblxuICB0aGlzLmVtaXRFdmVudCgnYWN0aXZhdGUnKTtcbiAgdGhpcy5zZWxlY3RJbml0aWFsSW5kZXgoKTtcbiAgLy8gZmxhZyBmb3IgaW5pdGlhbCBhY3RpdmF0aW9uLCBmb3IgdXNpbmcgaW5pdGlhbEluZGV4XG4gIHRoaXMuaXNJbml0QWN0aXZhdGVkID0gdHJ1ZTtcbiAgLy8gcmVhZHkgZXZlbnQuICM0OTNcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCdyZWFkeScpO1xufTtcblxuLy8gc2xpZGVyIHBvc2l0aW9ucyB0aGUgY2VsbHNcbnByb3RvLl9jcmVhdGVTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgLy8gc2xpZGVyIGVsZW1lbnQgZG9lcyBhbGwgdGhlIHBvc2l0aW9uaW5nXG4gIHZhciBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2xpZGVyLmNsYXNzTmFtZSA9ICdmbGlja2l0eS1zbGlkZXInO1xuICBzbGlkZXIuc3R5bGVbIHRoaXMub3JpZ2luU2lkZSBdID0gMDtcbiAgdGhpcy5zbGlkZXIgPSBzbGlkZXI7XG59O1xuXG5wcm90by5fZmlsdGVyRmluZENlbGxFbGVtZW50cyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgcmV0dXJuIHV0aWxzLmZpbHRlckZpbmRFbGVtZW50cyggZWxlbXMsIHRoaXMub3B0aW9ucy5jZWxsU2VsZWN0b3IgKTtcbn07XG5cbi8vIGdvZXMgdGhyb3VnaCBhbGwgY2hpbGRyZW5cbnByb3RvLnJlbG9hZENlbGxzID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNvbGxlY3Rpb24gb2YgaXRlbSBlbGVtZW50c1xuICB0aGlzLmNlbGxzID0gdGhpcy5fbWFrZUNlbGxzKCB0aGlzLnNsaWRlci5jaGlsZHJlbiApO1xuICB0aGlzLnBvc2l0aW9uQ2VsbHMoKTtcbiAgdGhpcy5fZ2V0V3JhcFNoaWZ0Q2VsbHMoKTtcbiAgdGhpcy5zZXRHYWxsZXJ5U2l6ZSgpO1xufTtcblxuLyoqXG4gKiB0dXJuIGVsZW1lbnRzIGludG8gRmxpY2tpdHkuQ2VsbHNcbiAqIEBwYXJhbSB7QXJyYXkgb3IgTm9kZUxpc3Qgb3IgSFRNTEVsZW1lbnR9IGVsZW1zXG4gKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zIC0gY29sbGVjdGlvbiBvZiBuZXcgRmxpY2tpdHkgQ2VsbHNcbiAqL1xucHJvdG8uX21ha2VDZWxscyA9IGZ1bmN0aW9uKCBlbGVtcyApIHtcbiAgdmFyIGNlbGxFbGVtcyA9IHRoaXMuX2ZpbHRlckZpbmRDZWxsRWxlbWVudHMoIGVsZW1zICk7XG5cbiAgLy8gY3JlYXRlIG5ldyBGbGlja2l0eSBmb3IgY29sbGVjdGlvblxuICB2YXIgY2VsbHMgPSBjZWxsRWxlbXMubWFwKCBmdW5jdGlvbiggY2VsbEVsZW0gKSB7XG4gICAgcmV0dXJuIG5ldyBDZWxsKCBjZWxsRWxlbSwgdGhpcyApO1xuICB9LCB0aGlzICk7XG5cbiAgcmV0dXJuIGNlbGxzO1xufTtcblxucHJvdG8uZ2V0TGFzdENlbGwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2VsbHNbIHRoaXMuY2VsbHMubGVuZ3RoIC0gMSBdO1xufTtcblxucHJvdG8uZ2V0TGFzdFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNsaWRlc1sgdGhpcy5zbGlkZXMubGVuZ3RoIC0gMSBdO1xufTtcblxuLy8gcG9zaXRpb25zIGFsbCBjZWxsc1xucHJvdG8ucG9zaXRpb25DZWxscyA9IGZ1bmN0aW9uKCkge1xuICAvLyBzaXplIGFsbCBjZWxsc1xuICB0aGlzLl9zaXplQ2VsbHMoIHRoaXMuY2VsbHMgKTtcbiAgLy8gcG9zaXRpb24gYWxsIGNlbGxzXG4gIHRoaXMuX3Bvc2l0aW9uQ2VsbHMoIDAgKTtcbn07XG5cbi8qKlxuICogcG9zaXRpb24gY2VydGFpbiBjZWxsc1xuICogQHBhcmFtIHtJbnRlZ2VyfSBpbmRleCAtIHdoaWNoIGNlbGwgdG8gc3RhcnQgd2l0aFxuICovXG5wcm90by5fcG9zaXRpb25DZWxscyA9IGZ1bmN0aW9uKCBpbmRleCApIHtcbiAgaW5kZXggPSBpbmRleCB8fCAwO1xuICAvLyBhbHNvIG1lYXN1cmUgbWF4Q2VsbEhlaWdodFxuICAvLyBzdGFydCAwIGlmIHBvc2l0aW9uaW5nIGFsbCBjZWxsc1xuICB0aGlzLm1heENlbGxIZWlnaHQgPSBpbmRleCA/IHRoaXMubWF4Q2VsbEhlaWdodCB8fCAwIDogMDtcbiAgdmFyIGNlbGxYID0gMDtcbiAgLy8gZ2V0IGNlbGxYXG4gIGlmICggaW5kZXggPiAwICkge1xuICAgIHZhciBzdGFydENlbGwgPSB0aGlzLmNlbGxzWyBpbmRleCAtIDEgXTtcbiAgICBjZWxsWCA9IHN0YXJ0Q2VsbC54ICsgc3RhcnRDZWxsLnNpemUub3V0ZXJXaWR0aDtcbiAgfVxuICB2YXIgbGVuID0gdGhpcy5jZWxscy5sZW5ndGg7XG4gIGZvciAoIHZhciBpPWluZGV4OyBpIDwgbGVuOyBpKysgKSB7XG4gICAgdmFyIGNlbGwgPSB0aGlzLmNlbGxzW2ldO1xuICAgIGNlbGwuc2V0UG9zaXRpb24oIGNlbGxYICk7XG4gICAgY2VsbFggKz0gY2VsbC5zaXplLm91dGVyV2lkdGg7XG4gICAgdGhpcy5tYXhDZWxsSGVpZ2h0ID0gTWF0aC5tYXgoIGNlbGwuc2l6ZS5vdXRlckhlaWdodCwgdGhpcy5tYXhDZWxsSGVpZ2h0ICk7XG4gIH1cbiAgLy8ga2VlcCB0cmFjayBvZiBjZWxsWCBmb3Igd3JhcC1hcm91bmRcbiAgdGhpcy5zbGlkZWFibGVXaWR0aCA9IGNlbGxYO1xuICAvLyBzbGlkZXNcbiAgdGhpcy51cGRhdGVTbGlkZXMoKTtcbiAgLy8gY29udGFpbiBzbGlkZXMgdGFyZ2V0XG4gIHRoaXMuX2NvbnRhaW5TbGlkZXMoKTtcbiAgLy8gdXBkYXRlIHNsaWRlc1dpZHRoXG4gIHRoaXMuc2xpZGVzV2lkdGggPSBsZW4gPyB0aGlzLmdldExhc3RTbGlkZSgpLnRhcmdldCAtIHRoaXMuc2xpZGVzWzBdLnRhcmdldCA6IDA7XG59O1xuXG4vKipcbiAqIGNlbGwuZ2V0U2l6ZSgpIG9uIG11bHRpcGxlIGNlbGxzXG4gKiBAcGFyYW0ge0FycmF5fSBjZWxsc1xuICovXG5wcm90by5fc2l6ZUNlbGxzID0gZnVuY3Rpb24oIGNlbGxzICkge1xuICBjZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLmdldFNpemUoKTtcbiAgfSk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udXBkYXRlU2xpZGVzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2xpZGVzID0gW107XG4gIGlmICggIXRoaXMuY2VsbHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzbGlkZSA9IG5ldyBTbGlkZSggdGhpcyApO1xuICB0aGlzLnNsaWRlcy5wdXNoKCBzbGlkZSApO1xuICB2YXIgaXNPcmlnaW5MZWZ0ID0gdGhpcy5vcmlnaW5TaWRlID09ICdsZWZ0JztcbiAgdmFyIG5leHRNYXJnaW4gPSBpc09yaWdpbkxlZnQgPyAnbWFyZ2luUmlnaHQnIDogJ21hcmdpbkxlZnQnO1xuXG4gIHZhciBjYW5DZWxsRml0ID0gdGhpcy5fZ2V0Q2FuQ2VsbEZpdCgpO1xuXG4gIHRoaXMuY2VsbHMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGwsIGkgKSB7XG4gICAgLy8ganVzdCBhZGQgY2VsbCBpZiBmaXJzdCBjZWxsIGluIHNsaWRlXG4gICAgaWYgKCAhc2xpZGUuY2VsbHMubGVuZ3RoICkge1xuICAgICAgc2xpZGUuYWRkQ2VsbCggY2VsbCApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzbGlkZVdpZHRoID0gKCBzbGlkZS5vdXRlcldpZHRoIC0gc2xpZGUuZmlyc3RNYXJnaW4gKSArXG4gICAgICAoIGNlbGwuc2l6ZS5vdXRlcldpZHRoIC0gY2VsbC5zaXplWyBuZXh0TWFyZ2luIF0gKTtcblxuICAgIGlmICggY2FuQ2VsbEZpdC5jYWxsKCB0aGlzLCBpLCBzbGlkZVdpZHRoICkgKSB7XG4gICAgICBzbGlkZS5hZGRDZWxsKCBjZWxsICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRvZXNuJ3QgZml0LCBuZXcgc2xpZGVcbiAgICAgIHNsaWRlLnVwZGF0ZVRhcmdldCgpO1xuXG4gICAgICBzbGlkZSA9IG5ldyBTbGlkZSggdGhpcyApO1xuICAgICAgdGhpcy5zbGlkZXMucHVzaCggc2xpZGUgKTtcbiAgICAgIHNsaWRlLmFkZENlbGwoIGNlbGwgKTtcbiAgICB9XG4gIH0sIHRoaXMgKTtcbiAgLy8gbGFzdCBzbGlkZVxuICBzbGlkZS51cGRhdGVUYXJnZXQoKTtcbiAgLy8gdXBkYXRlIC5zZWxlY3RlZFNsaWRlXG4gIHRoaXMudXBkYXRlU2VsZWN0ZWRTbGlkZSgpO1xufTtcblxucHJvdG8uX2dldENhbkNlbGxGaXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGdyb3VwQ2VsbHMgPSB0aGlzLm9wdGlvbnMuZ3JvdXBDZWxscztcbiAgaWYgKCAhZ3JvdXBDZWxscyApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIGdyb3VwQ2VsbHMgPT0gJ251bWJlcicgKSB7XG4gICAgLy8gZ3JvdXAgYnkgbnVtYmVyLiAzIC0+IFswLDEsMl0sIFszLDQsNV0sIC4uLlxuICAgIHZhciBudW1iZXIgPSBwYXJzZUludCggZ3JvdXBDZWxscywgMTAgKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oIGkgKSB7XG4gICAgICByZXR1cm4gKCBpICUgbnVtYmVyICkgIT09IDA7XG4gICAgfTtcbiAgfVxuICAvLyBkZWZhdWx0LCBncm91cCBieSB3aWR0aCBvZiBzbGlkZVxuICAvLyBwYXJzZSAnNzUlXG4gIHZhciBwZXJjZW50TWF0Y2ggPSB0eXBlb2YgZ3JvdXBDZWxscyA9PSAnc3RyaW5nJyAmJlxuICAgIGdyb3VwQ2VsbHMubWF0Y2goL14oXFxkKyklJC8pO1xuICB2YXIgcGVyY2VudCA9IHBlcmNlbnRNYXRjaCA/IHBhcnNlSW50KCBwZXJjZW50TWF0Y2hbMV0sIDEwICkgLyAxMDAgOiAxO1xuICByZXR1cm4gZnVuY3Rpb24oIGksIHNsaWRlV2lkdGggKSB7XG4gICAgcmV0dXJuIHNsaWRlV2lkdGggPD0gKCB0aGlzLnNpemUuaW5uZXJXaWR0aCArIDEgKSAqIHBlcmNlbnQ7XG4gIH07XG59O1xuXG4vLyBhbGlhcyBfaW5pdCBmb3IgalF1ZXJ5IHBsdWdpbiAuZmxpY2tpdHkoKVxucHJvdG8uX2luaXQgPVxucHJvdG8ucmVwb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBvc2l0aW9uQ2VsbHMoKTtcbiAgdGhpcy5wb3NpdGlvblNsaWRlckF0U2VsZWN0ZWQoKTtcbn07XG5cbnByb3RvLmdldFNpemUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zaXplID0gZ2V0U2l6ZSggdGhpcy5lbGVtZW50ICk7XG4gIHRoaXMuc2V0Q2VsbEFsaWduKCk7XG4gIHRoaXMuY3Vyc29yUG9zaXRpb24gPSB0aGlzLnNpemUuaW5uZXJXaWR0aCAqIHRoaXMuY2VsbEFsaWduO1xufTtcblxudmFyIGNlbGxBbGlnblNob3J0aGFuZHMgPSB7XG4gIC8vIGNlbGwgYWxpZ24sIHRoZW4gYmFzZWQgb24gb3JpZ2luIHNpZGVcbiAgY2VudGVyOiB7XG4gICAgbGVmdDogMC41LFxuICAgIHJpZ2h0OiAwLjVcbiAgfSxcbiAgbGVmdDoge1xuICAgIGxlZnQ6IDAsXG4gICAgcmlnaHQ6IDFcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICByaWdodDogMCxcbiAgICBsZWZ0OiAxXG4gIH1cbn07XG5cbnByb3RvLnNldENlbGxBbGlnbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2hvcnRoYW5kID0gY2VsbEFsaWduU2hvcnRoYW5kc1sgdGhpcy5vcHRpb25zLmNlbGxBbGlnbiBdO1xuICB0aGlzLmNlbGxBbGlnbiA9IHNob3J0aGFuZCA/IHNob3J0aGFuZFsgdGhpcy5vcmlnaW5TaWRlIF0gOiB0aGlzLm9wdGlvbnMuY2VsbEFsaWduO1xufTtcblxucHJvdG8uc2V0R2FsbGVyeVNpemUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLm9wdGlvbnMuc2V0R2FsbGVyeVNpemUgKSB7XG4gICAgdmFyIGhlaWdodCA9IHRoaXMub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCAmJiB0aGlzLnNlbGVjdGVkU2xpZGUgP1xuICAgICAgdGhpcy5zZWxlY3RlZFNsaWRlLmhlaWdodCA6IHRoaXMubWF4Q2VsbEhlaWdodDtcbiAgICB0aGlzLnZpZXdwb3J0LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gIH1cbn07XG5cbnByb3RvLl9nZXRXcmFwU2hpZnRDZWxscyA9IGZ1bmN0aW9uKCkge1xuICAvLyBvbmx5IGZvciB3cmFwLWFyb3VuZFxuICBpZiAoICF0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdW5zaGlmdCBwcmV2aW91cyBjZWxsc1xuICB0aGlzLl91bnNoaWZ0Q2VsbHMoIHRoaXMuYmVmb3JlU2hpZnRDZWxscyApO1xuICB0aGlzLl91bnNoaWZ0Q2VsbHMoIHRoaXMuYWZ0ZXJTaGlmdENlbGxzICk7XG4gIC8vIGdldCBiZWZvcmUgY2VsbHNcbiAgLy8gaW5pdGlhbCBnYXBcbiAgdmFyIGdhcFggPSB0aGlzLmN1cnNvclBvc2l0aW9uO1xuICB2YXIgY2VsbEluZGV4ID0gdGhpcy5jZWxscy5sZW5ndGggLSAxO1xuICB0aGlzLmJlZm9yZVNoaWZ0Q2VsbHMgPSB0aGlzLl9nZXRHYXBDZWxscyggZ2FwWCwgY2VsbEluZGV4LCAtMSApO1xuICAvLyBnZXQgYWZ0ZXIgY2VsbHNcbiAgLy8gZW5kaW5nIGdhcCBiZXR3ZWVuIGxhc3QgY2VsbCBhbmQgZW5kIG9mIGdhbGxlcnkgdmlld3BvcnRcbiAgZ2FwWCA9IHRoaXMuc2l6ZS5pbm5lcldpZHRoIC0gdGhpcy5jdXJzb3JQb3NpdGlvbjtcbiAgLy8gc3RhcnQgY2xvbmluZyBhdCBmaXJzdCBjZWxsLCB3b3JraW5nIGZvcndhcmRzXG4gIHRoaXMuYWZ0ZXJTaGlmdENlbGxzID0gdGhpcy5fZ2V0R2FwQ2VsbHMoIGdhcFgsIDAsIDEgKTtcbn07XG5cbnByb3RvLl9nZXRHYXBDZWxscyA9IGZ1bmN0aW9uKCBnYXBYLCBjZWxsSW5kZXgsIGluY3JlbWVudCApIHtcbiAgLy8ga2VlcCBhZGRpbmcgY2VsbHMgdW50aWwgdGhlIGNvdmVyIHRoZSBpbml0aWFsIGdhcFxuICB2YXIgY2VsbHMgPSBbXTtcbiAgd2hpbGUgKCBnYXBYID4gMCApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbHNbIGNlbGxJbmRleCBdO1xuICAgIGlmICggIWNlbGwgKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2VsbHMucHVzaCggY2VsbCApO1xuICAgIGNlbGxJbmRleCArPSBpbmNyZW1lbnQ7XG4gICAgZ2FwWCAtPSBjZWxsLnNpemUub3V0ZXJXaWR0aDtcbiAgfVxuICByZXR1cm4gY2VsbHM7XG59O1xuXG4vLyAtLS0tLSBjb250YWluIC0tLS0tIC8vXG5cbi8vIGNvbnRhaW4gY2VsbCB0YXJnZXRzIHNvIG5vIGV4Y2VzcyBzbGlkaW5nXG5wcm90by5fY29udGFpblNsaWRlcyA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLm9wdGlvbnMuY29udGFpbiB8fCB0aGlzLm9wdGlvbnMud3JhcEFyb3VuZCB8fCAhdGhpcy5jZWxscy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBpc1JpZ2h0VG9MZWZ0ID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0O1xuICB2YXIgYmVnaW5NYXJnaW4gPSBpc1JpZ2h0VG9MZWZ0ID8gJ21hcmdpblJpZ2h0JyA6ICdtYXJnaW5MZWZ0JztcbiAgdmFyIGVuZE1hcmdpbiA9IGlzUmlnaHRUb0xlZnQgPyAnbWFyZ2luTGVmdCcgOiAnbWFyZ2luUmlnaHQnO1xuICB2YXIgY29udGVudFdpZHRoID0gdGhpcy5zbGlkZWFibGVXaWR0aCAtIHRoaXMuZ2V0TGFzdENlbGwoKS5zaXplWyBlbmRNYXJnaW4gXTtcbiAgLy8gY29udGVudCBpcyBsZXNzIHRoYW4gZ2FsbGVyeSBzaXplXG4gIHZhciBpc0NvbnRlbnRTbWFsbGVyID0gY29udGVudFdpZHRoIDwgdGhpcy5zaXplLmlubmVyV2lkdGg7XG4gIC8vIGJvdW5kc1xuICB2YXIgYmVnaW5Cb3VuZCA9IHRoaXMuY3Vyc29yUG9zaXRpb24gKyB0aGlzLmNlbGxzWzBdLnNpemVbIGJlZ2luTWFyZ2luIF07XG4gIHZhciBlbmRCb3VuZCA9IGNvbnRlbnRXaWR0aCAtIHRoaXMuc2l6ZS5pbm5lcldpZHRoICogKCAxIC0gdGhpcy5jZWxsQWxpZ24gKTtcbiAgLy8gY29udGFpbiBlYWNoIGNlbGwgdGFyZ2V0XG4gIHRoaXMuc2xpZGVzLmZvckVhY2goIGZ1bmN0aW9uKCBzbGlkZSApIHtcbiAgICBpZiAoIGlzQ29udGVudFNtYWxsZXIgKSB7XG4gICAgICAvLyBhbGwgY2VsbHMgZml0IGluc2lkZSBnYWxsZXJ5XG4gICAgICBzbGlkZS50YXJnZXQgPSBjb250ZW50V2lkdGggKiB0aGlzLmNlbGxBbGlnbjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29udGFpbiB0byBib3VuZHNcbiAgICAgIHNsaWRlLnRhcmdldCA9IE1hdGgubWF4KCBzbGlkZS50YXJnZXQsIGJlZ2luQm91bmQgKTtcbiAgICAgIHNsaWRlLnRhcmdldCA9IE1hdGgubWluKCBzbGlkZS50YXJnZXQsIGVuZEJvdW5kICk7XG4gICAgfVxuICB9LCB0aGlzICk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxuLyoqXG4gKiBlbWl0cyBldmVudHMgdmlhIGV2ZW50RW1pdHRlciBhbmQgalF1ZXJ5IGV2ZW50c1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBuYW1lIG9mIGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIG9yaWdpbmFsIGV2ZW50XG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIC0gZXh0cmEgYXJndW1lbnRzXG4gKi9cbnByb3RvLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGFyZ3MgKSB7XG4gIHZhciBlbWl0QXJncyA9IGV2ZW50ID8gWyBldmVudCBdLmNvbmNhdCggYXJncyApIDogYXJncztcbiAgdGhpcy5lbWl0RXZlbnQoIHR5cGUsIGVtaXRBcmdzICk7XG5cbiAgaWYgKCBqUXVlcnkgJiYgdGhpcy4kZWxlbWVudCApIHtcbiAgICAvLyBkZWZhdWx0IHRyaWdnZXIgd2l0aCB0eXBlIGlmIG5vIGV2ZW50XG4gICAgdHlwZSArPSB0aGlzLm9wdGlvbnMubmFtZXNwYWNlSlF1ZXJ5RXZlbnRzID8gJy5mbGlja2l0eScgOiAnJztcbiAgICB2YXIgJGV2ZW50ID0gdHlwZTtcbiAgICBpZiAoIGV2ZW50ICkge1xuICAgICAgLy8gY3JlYXRlIGpRdWVyeSBldmVudFxuICAgICAgdmFyIGpRRXZlbnQgPSBqUXVlcnkuRXZlbnQoIGV2ZW50ICk7XG4gICAgICBqUUV2ZW50LnR5cGUgPSB0eXBlO1xuICAgICAgJGV2ZW50ID0galFFdmVudDtcbiAgICB9XG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCAkZXZlbnQsIGFyZ3MgKTtcbiAgfVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc2VsZWN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogQHBhcmFtIHtJbnRlZ2VyfSBpbmRleCAtIGluZGV4IG9mIHRoZSBzbGlkZVxuICogQHBhcmFtIHtCb29sZWFufSBpc1dyYXAgLSB3aWxsIHdyYXAtYXJvdW5kIHRvIGxhc3QvZmlyc3QgaWYgYXQgdGhlIGVuZFxuICogQHBhcmFtIHtCb29sZWFufSBpc0luc3RhbnQgLSB3aWxsIGltbWVkaWF0ZWx5IHNldCBwb3NpdGlvbiBhdCBzZWxlY3RlZCBjZWxsXG4gKi9cbnByb3RvLnNlbGVjdCA9IGZ1bmN0aW9uKCBpbmRleCwgaXNXcmFwLCBpc0luc3RhbnQgKSB7XG4gIGlmICggIXRoaXMuaXNBY3RpdmUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGluZGV4ID0gcGFyc2VJbnQoIGluZGV4LCAxMCApO1xuICB0aGlzLl93cmFwU2VsZWN0KCBpbmRleCApO1xuXG4gIGlmICggdGhpcy5vcHRpb25zLndyYXBBcm91bmQgfHwgaXNXcmFwICkge1xuICAgIGluZGV4ID0gdXRpbHMubW9kdWxvKCBpbmRleCwgdGhpcy5zbGlkZXMubGVuZ3RoICk7XG4gIH1cbiAgLy8gYmFpbCBpZiBpbnZhbGlkIGluZGV4XG4gIGlmICggIXRoaXMuc2xpZGVzWyBpbmRleCBdICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgcHJldkluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4O1xuICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgdGhpcy51cGRhdGVTZWxlY3RlZFNsaWRlKCk7XG4gIGlmICggaXNJbnN0YW50ICkge1xuICAgIHRoaXMucG9zaXRpb25TbGlkZXJBdFNlbGVjdGVkKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdGFydEFuaW1hdGlvbigpO1xuICB9XG4gIGlmICggdGhpcy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ICkge1xuICAgIHRoaXMuc2V0R2FsbGVyeVNpemUoKTtcbiAgfVxuICAvLyBldmVudHNcbiAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnc2VsZWN0JywgbnVsbCwgWyBpbmRleCBdICk7XG4gIC8vIGNoYW5nZSBldmVudCBpZiBuZXcgaW5kZXhcbiAgaWYgKCBpbmRleCAhPSBwcmV2SW5kZXggKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCAnY2hhbmdlJywgbnVsbCwgWyBpbmRleCBdICk7XG4gIH1cbiAgLy8gb2xkIHYxIGV2ZW50IG5hbWUsIHJlbW92ZSBpbiB2M1xuICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2NlbGxTZWxlY3QnKTtcbn07XG5cbi8vIHdyYXBzIHBvc2l0aW9uIGZvciB3cmFwQXJvdW5kLCB0byBtb3ZlIHRvIGNsb3Nlc3Qgc2xpZGUuICMxMTNcbnByb3RvLl93cmFwU2VsZWN0ID0gZnVuY3Rpb24oIGluZGV4ICkge1xuICB2YXIgbGVuID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xuICB2YXIgaXNXcmFwcGluZyA9IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kICYmIGxlbiA+IDE7XG4gIGlmICggIWlzV3JhcHBpbmcgKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG4gIHZhciB3cmFwSW5kZXggPSB1dGlscy5tb2R1bG8oIGluZGV4LCBsZW4gKTtcbiAgLy8gZ28gdG8gc2hvcnRlc3RcbiAgdmFyIGRlbHRhID0gTWF0aC5hYnMoIHdyYXBJbmRleCAtIHRoaXMuc2VsZWN0ZWRJbmRleCApO1xuICB2YXIgYmFja1dyYXBEZWx0YSA9IE1hdGguYWJzKCAoIHdyYXBJbmRleCArIGxlbiApIC0gdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIHZhciBmb3Jld2FyZFdyYXBEZWx0YSA9IE1hdGguYWJzKCAoIHdyYXBJbmRleCAtIGxlbiApIC0gdGhpcy5zZWxlY3RlZEluZGV4ICk7XG4gIGlmICggIXRoaXMuaXNEcmFnU2VsZWN0ICYmIGJhY2tXcmFwRGVsdGEgPCBkZWx0YSApIHtcbiAgICBpbmRleCArPSBsZW47XG4gIH0gZWxzZSBpZiAoICF0aGlzLmlzRHJhZ1NlbGVjdCAmJiBmb3Jld2FyZFdyYXBEZWx0YSA8IGRlbHRhICkge1xuICAgIGluZGV4IC09IGxlbjtcbiAgfVxuICAvLyB3cmFwIHBvc2l0aW9uIHNvIHNsaWRlciBpcyB3aXRoaW4gbm9ybWFsIGFyZWFcbiAgaWYgKCBpbmRleCA8IDAgKSB7XG4gICAgdGhpcy54IC09IHRoaXMuc2xpZGVhYmxlV2lkdGg7XG4gIH0gZWxzZSBpZiAoIGluZGV4ID49IGxlbiApIHtcbiAgICB0aGlzLnggKz0gdGhpcy5zbGlkZWFibGVXaWR0aDtcbiAgfVxufTtcblxucHJvdG8ucHJldmlvdXMgPSBmdW5jdGlvbiggaXNXcmFwLCBpc0luc3RhbnQgKSB7XG4gIHRoaXMuc2VsZWN0KCB0aGlzLnNlbGVjdGVkSW5kZXggLSAxLCBpc1dyYXAsIGlzSW5zdGFudCApO1xufTtcblxucHJvdG8ubmV4dCA9IGZ1bmN0aW9uKCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgdGhpcy5zZWxlY3QoIHRoaXMuc2VsZWN0ZWRJbmRleCArIDEsIGlzV3JhcCwgaXNJbnN0YW50ICk7XG59O1xuXG5wcm90by51cGRhdGVTZWxlY3RlZFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzbGlkZSA9IHRoaXMuc2xpZGVzWyB0aGlzLnNlbGVjdGVkSW5kZXggXTtcbiAgLy8gc2VsZWN0ZWRJbmRleCBjb3VsZCBiZSBvdXRzaWRlIG9mIHNsaWRlcywgaWYgdHJpZ2dlcmVkIGJlZm9yZSByZXNpemUoKVxuICBpZiAoICFzbGlkZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdW5zZWxlY3QgcHJldmlvdXMgc2VsZWN0ZWQgc2xpZGVcbiAgdGhpcy51bnNlbGVjdFNlbGVjdGVkU2xpZGUoKTtcbiAgLy8gdXBkYXRlIG5ldyBzZWxlY3RlZCBzbGlkZVxuICB0aGlzLnNlbGVjdGVkU2xpZGUgPSBzbGlkZTtcbiAgc2xpZGUuc2VsZWN0KCk7XG4gIHRoaXMuc2VsZWN0ZWRDZWxscyA9IHNsaWRlLmNlbGxzO1xuICB0aGlzLnNlbGVjdGVkRWxlbWVudHMgPSBzbGlkZS5nZXRDZWxsRWxlbWVudHMoKTtcbiAgLy8gSEFDSzogc2VsZWN0ZWRDZWxsICYgc2VsZWN0ZWRFbGVtZW50IGlzIGZpcnN0IGNlbGwgaW4gc2xpZGUsIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIC8vIFJlbW92ZSBpbiB2Mz9cbiAgdGhpcy5zZWxlY3RlZENlbGwgPSBzbGlkZS5jZWxsc1swXTtcbiAgdGhpcy5zZWxlY3RlZEVsZW1lbnQgPSB0aGlzLnNlbGVjdGVkRWxlbWVudHNbMF07XG59O1xuXG5wcm90by51bnNlbGVjdFNlbGVjdGVkU2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCB0aGlzLnNlbGVjdGVkU2xpZGUgKSB7XG4gICAgdGhpcy5zZWxlY3RlZFNsaWRlLnVuc2VsZWN0KCk7XG4gIH1cbn07XG5cbnByb3RvLnNlbGVjdEluaXRpYWxJbmRleCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaW5pdGlhbEluZGV4ID0gdGhpcy5vcHRpb25zLmluaXRpYWxJbmRleDtcbiAgLy8gYWxyZWFkeSBhY3RpdmF0ZWQsIHNlbGVjdCBwcmV2aW91cyBzZWxlY3RlZEluZGV4XG4gIGlmICggdGhpcy5pc0luaXRBY3RpdmF0ZWQgKSB7XG4gICAgdGhpcy5zZWxlY3QoIHRoaXMuc2VsZWN0ZWRJbmRleCwgZmFsc2UsIHRydWUgKTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gc2VsZWN0IHdpdGggc2VsZWN0b3Igc3RyaW5nXG4gIGlmICggaW5pdGlhbEluZGV4ICYmIHR5cGVvZiBpbml0aWFsSW5kZXggPT0gJ3N0cmluZycgKSB7XG4gICAgdmFyIGNlbGwgPSB0aGlzLnF1ZXJ5Q2VsbCggaW5pdGlhbEluZGV4ICk7XG4gICAgaWYgKCBjZWxsICkge1xuICAgICAgdGhpcy5zZWxlY3RDZWxsKCBpbml0aWFsSW5kZXgsIGZhbHNlLCB0cnVlICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdmFyIGluZGV4ID0gMDtcbiAgLy8gc2VsZWN0IHdpdGggbnVtYmVyXG4gIGlmICggaW5pdGlhbEluZGV4ICYmIHRoaXMuc2xpZGVzWyBpbml0aWFsSW5kZXggXSApIHtcbiAgICBpbmRleCA9IGluaXRpYWxJbmRleDtcbiAgfVxuICAvLyBzZWxlY3QgaW5zdGFudGx5XG4gIHRoaXMuc2VsZWN0KCBpbmRleCwgZmFsc2UsIHRydWUgKTtcbn07XG5cbi8qKlxuICogc2VsZWN0IHNsaWRlIGZyb20gbnVtYmVyIG9yIGNlbGwgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50IG9yIE51bWJlcn0gZWxlbVxuICovXG5wcm90by5zZWxlY3RDZWxsID0gZnVuY3Rpb24oIHZhbHVlLCBpc1dyYXAsIGlzSW5zdGFudCApIHtcbiAgLy8gZ2V0IGNlbGxcbiAgdmFyIGNlbGwgPSB0aGlzLnF1ZXJ5Q2VsbCggdmFsdWUgKTtcbiAgaWYgKCAhY2VsbCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaW5kZXggPSB0aGlzLmdldENlbGxTbGlkZUluZGV4KCBjZWxsICk7XG4gIHRoaXMuc2VsZWN0KCBpbmRleCwgaXNXcmFwLCBpc0luc3RhbnQgKTtcbn07XG5cbnByb3RvLmdldENlbGxTbGlkZUluZGV4ID0gZnVuY3Rpb24oIGNlbGwgKSB7XG4gIC8vIGdldCBpbmRleCBvZiBzbGlkZXMgdGhhdCBoYXMgY2VsbFxuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5zbGlkZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIHNsaWRlID0gdGhpcy5zbGlkZXNbaV07XG4gICAgdmFyIGluZGV4ID0gc2xpZGUuY2VsbHMuaW5kZXhPZiggY2VsbCApO1xuICAgIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldCBjZWxscyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vKipcbiAqIGdldCBGbGlja2l0eS5DZWxsLCBnaXZlbiBhbiBFbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEByZXR1cm5zIHtGbGlja2l0eS5DZWxsfSBpdGVtXG4gKi9cbnByb3RvLmdldENlbGwgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gbG9vcCB0aHJvdWdoIGNlbGxzIHRvIGdldCB0aGUgb25lIHRoYXQgbWF0Y2hlc1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5jZWxscy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgY2VsbCA9IHRoaXMuY2VsbHNbaV07XG4gICAgaWYgKCBjZWxsLmVsZW1lbnQgPT0gZWxlbSApIHtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBnZXQgY29sbGVjdGlvbiBvZiBGbGlja2l0eS5DZWxscywgZ2l2ZW4gRWxlbWVudHNcbiAqIEBwYXJhbSB7RWxlbWVudCwgQXJyYXksIE5vZGVMaXN0fSBlbGVtc1xuICogQHJldHVybnMge0FycmF5fSBjZWxscyAtIEZsaWNraXR5LkNlbGxzXG4gKi9cbnByb3RvLmdldENlbGxzID0gZnVuY3Rpb24oIGVsZW1zICkge1xuICBlbGVtcyA9IHV0aWxzLm1ha2VBcnJheSggZWxlbXMgKTtcbiAgdmFyIGNlbGxzID0gW107XG4gIGVsZW1zLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtICkge1xuICAgIHZhciBjZWxsID0gdGhpcy5nZXRDZWxsKCBlbGVtICk7XG4gICAgaWYgKCBjZWxsICkge1xuICAgICAgY2VsbHMucHVzaCggY2VsbCApO1xuICAgIH1cbiAgfSwgdGhpcyApO1xuICByZXR1cm4gY2VsbHM7XG59O1xuXG4vKipcbiAqIGdldCBjZWxsIGVsZW1lbnRzXG4gKiBAcmV0dXJucyB7QXJyYXl9IGNlbGxFbGVtc1xuICovXG5wcm90by5nZXRDZWxsRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2VsbHMubWFwKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICByZXR1cm4gY2VsbC5lbGVtZW50O1xuICB9KTtcbn07XG5cbi8qKlxuICogZ2V0IHBhcmVudCBjZWxsIGZyb20gYW4gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7RmxpY2tpdC5DZWxsfSBjZWxsXG4gKi9cbnByb3RvLmdldFBhcmVudENlbGwgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgLy8gZmlyc3QgY2hlY2sgaWYgZWxlbSBpcyBjZWxsXG4gIHZhciBjZWxsID0gdGhpcy5nZXRDZWxsKCBlbGVtICk7XG4gIGlmICggY2VsbCApIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfVxuICAvLyB0cnkgdG8gZ2V0IHBhcmVudCBjZWxsIGVsZW1cbiAgZWxlbSA9IHV0aWxzLmdldFBhcmVudCggZWxlbSwgJy5mbGlja2l0eS1zbGlkZXIgPiAqJyApO1xuICByZXR1cm4gdGhpcy5nZXRDZWxsKCBlbGVtICk7XG59O1xuXG4vKipcbiAqIGdldCBjZWxscyBhZGphY2VudCB0byBhIHNsaWRlXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGFkakNvdW50IC0gbnVtYmVyIG9mIGFkamFjZW50IHNsaWRlc1xuICogQHBhcmFtIHtJbnRlZ2VyfSBpbmRleCAtIGluZGV4IG9mIHNsaWRlIHRvIHN0YXJ0XG4gKiBAcmV0dXJucyB7QXJyYXl9IGNlbGxzIC0gYXJyYXkgb2YgRmxpY2tpdHkuQ2VsbHNcbiAqL1xucHJvdG8uZ2V0QWRqYWNlbnRDZWxsRWxlbWVudHMgPSBmdW5jdGlvbiggYWRqQ291bnQsIGluZGV4ICkge1xuICBpZiAoICFhZGpDb3VudCApIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZFNsaWRlLmdldENlbGxFbGVtZW50cygpO1xuICB9XG4gIGluZGV4ID0gaW5kZXggPT09IHVuZGVmaW5lZCA/IHRoaXMuc2VsZWN0ZWRJbmRleCA6IGluZGV4O1xuXG4gIHZhciBsZW4gPSB0aGlzLnNsaWRlcy5sZW5ndGg7XG4gIGlmICggMSArICggYWRqQ291bnQgKiAyICkgPj0gbGVuICkge1xuICAgIHJldHVybiB0aGlzLmdldENlbGxFbGVtZW50cygpO1xuICB9XG5cbiAgdmFyIGNlbGxFbGVtcyA9IFtdO1xuICBmb3IgKCB2YXIgaSA9IGluZGV4IC0gYWRqQ291bnQ7IGkgPD0gaW5kZXggKyBhZGpDb3VudCA7IGkrKyApIHtcbiAgICB2YXIgc2xpZGVJbmRleCA9IHRoaXMub3B0aW9ucy53cmFwQXJvdW5kID8gdXRpbHMubW9kdWxvKCBpLCBsZW4gKSA6IGk7XG4gICAgdmFyIHNsaWRlID0gdGhpcy5zbGlkZXNbIHNsaWRlSW5kZXggXTtcbiAgICBpZiAoIHNsaWRlICkge1xuICAgICAgY2VsbEVsZW1zID0gY2VsbEVsZW1zLmNvbmNhdCggc2xpZGUuZ2V0Q2VsbEVsZW1lbnRzKCkgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNlbGxFbGVtcztcbn07XG5cbi8qKlxuICogc2VsZWN0IHNsaWRlIGZyb20gbnVtYmVyIG9yIGNlbGwgZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50LCBTZWxlY3RvciBTdHJpbmcsIG9yIE51bWJlcn0gc2VsZWN0b3JcbiAqL1xucHJvdG8ucXVlcnlDZWxsID0gZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuICBpZiAoIHR5cGVvZiBzZWxlY3RvciA9PSAnbnVtYmVyJyApIHtcbiAgICAvLyB1c2UgbnVtYmVyIGFzIGluZGV4XG4gICAgcmV0dXJuIHRoaXMuY2VsbHNbIHNlbGVjdG9yIF07XG4gIH1cbiAgaWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT0gJ3N0cmluZycgKSB7XG4gICAgLy8gZG8gbm90IHNlbGVjdCBpbnZhbGlkIHNlbGVjdG9ycyBmcm9tIGhhc2g6ICMxMjMsICMvLiAjNzkxXG4gICAgaWYgKCBzZWxlY3Rvci5tYXRjaCgvXlsjXFwuXT9bXFxkXFwvXS8pICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB1c2Ugc3RyaW5nIGFzIHNlbGVjdG9yLCBnZXQgZWxlbWVudFxuICAgIHNlbGVjdG9yID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoIHNlbGVjdG9yICk7XG4gIH1cbiAgLy8gZ2V0IGNlbGwgZnJvbSBlbGVtZW50XG4gIHJldHVybiB0aGlzLmdldENlbGwoIHNlbGVjdG9yICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBldmVudHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucHJvdG8udWlDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5lbWl0RXZlbnQoJ3VpQ2hhbmdlJyk7XG59O1xuXG4vLyBrZWVwIGZvY3VzIG9uIGVsZW1lbnQgd2hlbiBjaGlsZCBVSSBlbGVtZW50cyBhcmUgY2xpY2tlZFxucHJvdG8uY2hpbGRVSVBvaW50ZXJEb3duID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICAvLyBIQUNLIGlPUyBkb2VzIG5vdCBhbGxvdyB0b3VjaCBldmVudHMgdG8gYnViYmxlIHVwPyFcbiAgaWYgKCBldmVudC50eXBlICE9ICd0b3VjaHN0YXJ0JyApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG4gIHRoaXMuZm9jdXMoKTtcbn07XG5cbi8vIC0tLS0tIHJlc2l6ZSAtLS0tLSAvL1xuXG5wcm90by5vbnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLndhdGNoQ1NTKCk7XG4gIHRoaXMucmVzaXplKCk7XG59O1xuXG51dGlscy5kZWJvdW5jZU1ldGhvZCggRmxpY2tpdHksICdvbnJlc2l6ZScsIDE1MCApO1xuXG5wcm90by5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc0FjdGl2ZSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5nZXRTaXplKCk7XG4gIC8vIHdyYXAgdmFsdWVzXG4gIGlmICggdGhpcy5vcHRpb25zLndyYXBBcm91bmQgKSB7XG4gICAgdGhpcy54ID0gdXRpbHMubW9kdWxvKCB0aGlzLngsIHRoaXMuc2xpZGVhYmxlV2lkdGggKTtcbiAgfVxuICB0aGlzLnBvc2l0aW9uQ2VsbHMoKTtcbiAgdGhpcy5fZ2V0V3JhcFNoaWZ0Q2VsbHMoKTtcbiAgdGhpcy5zZXRHYWxsZXJ5U2l6ZSgpO1xuICB0aGlzLmVtaXRFdmVudCgncmVzaXplJyk7XG4gIC8vIHVwZGF0ZSBzZWxlY3RlZCBpbmRleCBmb3IgZ3JvdXAgc2xpZGVzLCBpbnN0YW50XG4gIC8vIFRPRE86IHBvc2l0aW9uIGNhbiBiZSBsb3N0IGJldHdlZW4gZ3JvdXBzIG9mIHZhcmlvdXMgbnVtYmVyc1xuICB2YXIgc2VsZWN0ZWRFbGVtZW50ID0gdGhpcy5zZWxlY3RlZEVsZW1lbnRzICYmIHRoaXMuc2VsZWN0ZWRFbGVtZW50c1swXTtcbiAgdGhpcy5zZWxlY3RDZWxsKCBzZWxlY3RlZEVsZW1lbnQsIGZhbHNlLCB0cnVlICk7XG59O1xuXG4vLyB3YXRjaGVzIHRoZSA6YWZ0ZXIgcHJvcGVydHksIGFjdGl2YXRlcy9kZWFjdGl2YXRlc1xucHJvdG8ud2F0Y2hDU1MgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdhdGNoT3B0aW9uID0gdGhpcy5vcHRpb25zLndhdGNoQ1NTO1xuICBpZiAoICF3YXRjaE9wdGlvbiApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgYWZ0ZXJDb250ZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZSggdGhpcy5lbGVtZW50LCAnOmFmdGVyJyApLmNvbnRlbnQ7XG4gIC8vIGFjdGl2YXRlIGlmIDphZnRlciB7IGNvbnRlbnQ6ICdmbGlja2l0eScgfVxuICBpZiAoIGFmdGVyQ29udGVudC5pbmRleE9mKCdmbGlja2l0eScpICE9IC0xICkge1xuICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgfVxufTtcblxuLy8gLS0tLS0ga2V5ZG93biAtLS0tLSAvL1xuXG4vLyBnbyBwcmV2aW91cy9uZXh0IGlmIGxlZnQvcmlnaHQga2V5cyBwcmVzc2VkXG5wcm90by5vbmtleWRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIC8vIG9ubHkgd29yayBpZiBlbGVtZW50IGlzIGluIGZvY3VzXG4gIHZhciBpc05vdEZvY3VzZWQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT0gdGhpcy5lbGVtZW50O1xuICBpZiAoICF0aGlzLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSB8fGlzTm90Rm9jdXNlZCApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaGFuZGxlciA9IEZsaWNraXR5LmtleWJvYXJkSGFuZGxlcnNbIGV2ZW50LmtleUNvZGUgXTtcbiAgaWYgKCBoYW5kbGVyICkge1xuICAgIGhhbmRsZXIuY2FsbCggdGhpcyApO1xuICB9XG59O1xuXG5GbGlja2l0eS5rZXlib2FyZEhhbmRsZXJzID0ge1xuICAvLyBsZWZ0IGFycm93XG4gIDM3OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVmdE1ldGhvZCA9IHRoaXMub3B0aW9ucy5yaWdodFRvTGVmdCA/ICduZXh0JyA6ICdwcmV2aW91cyc7XG4gICAgdGhpcy51aUNoYW5nZSgpO1xuICAgIHRoaXNbIGxlZnRNZXRob2QgXSgpO1xuICB9LFxuICAvLyByaWdodCBhcnJvd1xuICAzOTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJpZ2h0TWV0aG9kID0gdGhpcy5vcHRpb25zLnJpZ2h0VG9MZWZ0ID8gJ3ByZXZpb3VzJyA6ICduZXh0JztcbiAgICB0aGlzLnVpQ2hhbmdlKCk7XG4gICAgdGhpc1sgcmlnaHRNZXRob2QgXSgpO1xuICB9LFxufTtcblxuLy8gLS0tLS0gZm9jdXMgLS0tLS0gLy9cblxucHJvdG8uZm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgLy8gVE9ETyByZW1vdmUgc2Nyb2xsVG8gb25jZSBmb2N1cyBvcHRpb25zIGdldHMgbW9yZSBzdXBwb3J0XG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9mb2N1cyNCcm93c2VyX2NvbXBhdGliaWxpdHlcbiAgdmFyIHByZXZTY3JvbGxZID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICB0aGlzLmVsZW1lbnQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAvLyBoYWNrIHRvIGZpeCBzY3JvbGwganVtcCBhZnRlciBmb2N1cywgIzc2XG4gIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ICE9IHByZXZTY3JvbGxZICkge1xuICAgIHdpbmRvdy5zY3JvbGxUbyggd2luZG93LnBhZ2VYT2Zmc2V0LCBwcmV2U2Nyb2xsWSApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZXN0cm95IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGRlYWN0aXZhdGUgYWxsIEZsaWNraXR5IGZ1bmN0aW9uYWxpdHksIGJ1dCBrZWVwIHN0dWZmIGF2YWlsYWJsZVxucHJvdG8uZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoICF0aGlzLmlzQWN0aXZlICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpY2tpdHktZW5hYmxlZCcpO1xuICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpY2tpdHktcnRsJyk7XG4gIHRoaXMudW5zZWxlY3RTZWxlY3RlZFNsaWRlKCk7XG4gIC8vIGRlc3Ryb3kgY2VsbHNcbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLmRlc3Ryb3koKTtcbiAgfSk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCggdGhpcy52aWV3cG9ydCApO1xuICAvLyBtb3ZlIGNoaWxkIGVsZW1lbnRzIGJhY2sgaW50byBlbGVtZW50XG4gIG1vdmVFbGVtZW50cyggdGhpcy5zbGlkZXIuY2hpbGRyZW4sIHRoaXMuZWxlbWVudCApO1xuICBpZiAoIHRoaXMub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ICkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RhYkluZGV4Jyk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgdGhpcyApO1xuICB9XG4gIC8vIHNldCBmbGFnc1xuICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gIHRoaXMuZW1pdEV2ZW50KCdkZWFjdGl2YXRlJyk7XG59O1xuXG5wcm90by5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIHRoaXMgKTtcbiAgdGhpcy5hbGxPZmYoKTtcbiAgdGhpcy5lbWl0RXZlbnQoJ2Rlc3Ryb3knKTtcbiAgaWYgKCBqUXVlcnkgJiYgdGhpcy4kZWxlbWVudCApIHtcbiAgICBqUXVlcnkucmVtb3ZlRGF0YSggdGhpcy5lbGVtZW50LCAnZmxpY2tpdHknICk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuZWxlbWVudC5mbGlja2l0eUdVSUQ7XG4gIGRlbGV0ZSBpbnN0YW5jZXNbIHRoaXMuZ3VpZCBdO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJvdG90eXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmV4dGVuZCggcHJvdG8sIGFuaW1hdGVQcm90b3R5cGUgKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZXh0cmFzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8qKlxuICogZ2V0IEZsaWNraXR5IGluc3RhbmNlIGZyb20gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtXG4gKiBAcmV0dXJucyB7RmxpY2tpdHl9XG4gKi9cbkZsaWNraXR5LmRhdGEgPSBmdW5jdGlvbiggZWxlbSApIHtcbiAgZWxlbSA9IHV0aWxzLmdldFF1ZXJ5RWxlbWVudCggZWxlbSApO1xuICB2YXIgaWQgPSBlbGVtICYmIGVsZW0uZmxpY2tpdHlHVUlEO1xuICByZXR1cm4gaWQgJiYgaW5zdGFuY2VzWyBpZCBdO1xufTtcblxudXRpbHMuaHRtbEluaXQoIEZsaWNraXR5LCAnZmxpY2tpdHknICk7XG5cbmlmICggalF1ZXJ5ICYmIGpRdWVyeS5icmlkZ2V0ICkge1xuICBqUXVlcnkuYnJpZGdldCggJ2ZsaWNraXR5JywgRmxpY2tpdHkgKTtcbn1cblxuLy8gc2V0IGludGVybmFsIGpRdWVyeSwgZm9yIFdlYnBhY2sgKyBqUXVlcnkgdjMsICM0NzhcbkZsaWNraXR5LnNldEpRdWVyeSA9IGZ1bmN0aW9uKCBqcSApIHtcbiAgalF1ZXJ5ID0ganE7XG59O1xuXG5GbGlja2l0eS5DZWxsID0gQ2VsbDtcbkZsaWNraXR5LlNsaWRlID0gU2xpZGU7XG5cbnJldHVybiBGbGlja2l0eTtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvZmxpY2tpdHkuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL2ZsaWNraXR5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qIVxuICogRmxpY2tpdHkgdjIuMi4wXG4gKiBUb3VjaCwgcmVzcG9uc2l2ZSwgZmxpY2thYmxlIGNhcm91c2Vsc1xuICpcbiAqIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2VcbiAqIG9yIEZsaWNraXR5IENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2VcbiAqXG4gKiBodHRwczovL2ZsaWNraXR5Lm1ldGFmaXp6eS5jb1xuICogQ29weXJpZ2h0IDIwMTUtMjAxOCBNZXRhZml6enlcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJy4vZmxpY2tpdHknLFxuICAgICAgJy4vZHJhZycsXG4gICAgICAnLi9wcmV2LW5leHQtYnV0dG9uJyxcbiAgICAgICcuL3BhZ2UtZG90cycsXG4gICAgICAnLi9wbGF5ZXInLFxuICAgICAgJy4vYWRkLXJlbW92ZS1jZWxsJyxcbiAgICAgICcuL2xhenlsb2FkJ1xuICAgIF0sIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHJlcXVpcmUoJy4vZmxpY2tpdHknKSxcbiAgICAgIHJlcXVpcmUoJy4vZHJhZycpLFxuICAgICAgcmVxdWlyZSgnLi9wcmV2LW5leHQtYnV0dG9uJyksXG4gICAgICByZXF1aXJlKCcuL3BhZ2UtZG90cycpLFxuICAgICAgcmVxdWlyZSgnLi9wbGF5ZXInKSxcbiAgICAgIHJlcXVpcmUoJy4vYWRkLXJlbW92ZS1jZWxsJyksXG4gICAgICByZXF1aXJlKCcuL2xhenlsb2FkJylcbiAgICApO1xuICB9XG5cbn0pKCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIEZsaWNraXR5ICkge1xuICAvKmpzaGludCBzdHJpY3Q6IGZhbHNlKi9cbiAgcmV0dXJuIEZsaWNraXR5O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gbGF6eWxvYWRcbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnLi9mbGlja2l0eScsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCB1dGlscyApIHtcbid1c2Ugc3RyaWN0JztcblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlTGF6eWxvYWQnKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZUxhenlsb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMub24oICdzZWxlY3QnLCB0aGlzLmxhenlMb2FkICk7XG59O1xuXG5wcm90by5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbGF6eUxvYWQgPSB0aGlzLm9wdGlvbnMubGF6eUxvYWQ7XG4gIGlmICggIWxhenlMb2FkICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBnZXQgYWRqYWNlbnQgY2VsbHMsIHVzZSBsYXp5TG9hZCBvcHRpb24gZm9yIGFkamFjZW50IGNvdW50XG4gIHZhciBhZGpDb3VudCA9IHR5cGVvZiBsYXp5TG9hZCA9PSAnbnVtYmVyJyA/IGxhenlMb2FkIDogMDtcbiAgdmFyIGNlbGxFbGVtcyA9IHRoaXMuZ2V0QWRqYWNlbnRDZWxsRWxlbWVudHMoIGFkakNvdW50ICk7XG4gIC8vIGdldCBsYXp5IGltYWdlcyBpbiB0aG9zZSBjZWxsc1xuICB2YXIgbGF6eUltYWdlcyA9IFtdO1xuICBjZWxsRWxlbXMuZm9yRWFjaCggZnVuY3Rpb24oIGNlbGxFbGVtICkge1xuICAgIHZhciBsYXp5Q2VsbEltYWdlcyA9IGdldENlbGxMYXp5SW1hZ2VzKCBjZWxsRWxlbSApO1xuICAgIGxhenlJbWFnZXMgPSBsYXp5SW1hZ2VzLmNvbmNhdCggbGF6eUNlbGxJbWFnZXMgKTtcbiAgfSk7XG4gIC8vIGxvYWQgbGF6eSBpbWFnZXNcbiAgbGF6eUltYWdlcy5mb3JFYWNoKCBmdW5jdGlvbiggaW1nICkge1xuICAgIG5ldyBMYXp5TG9hZGVyKCBpbWcsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xufTtcblxuZnVuY3Rpb24gZ2V0Q2VsbExhenlJbWFnZXMoIGNlbGxFbGVtICkge1xuICAvLyBjaGVjayBpZiBjZWxsIGVsZW1lbnQgaXMgbGF6eSBpbWFnZVxuICBpZiAoIGNlbGxFbGVtLm5vZGVOYW1lID09ICdJTUcnICkge1xuICAgIHZhciBsYXp5bG9hZEF0dHIgPSBjZWxsRWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQnKTtcbiAgICB2YXIgc3JjQXR0ciA9IGNlbGxFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGlja2l0eS1sYXp5bG9hZC1zcmMnKTtcbiAgICB2YXIgc3Jjc2V0QXR0ciA9IGNlbGxFbGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGlja2l0eS1sYXp5bG9hZC1zcmNzZXQnKTtcbiAgICBpZiAoIGxhenlsb2FkQXR0ciB8fCBzcmNBdHRyIHx8IHNyY3NldEF0dHIgKSB7XG4gICAgICByZXR1cm4gWyBjZWxsRWxlbSBdO1xuICAgIH1cbiAgfVxuICAvLyBzZWxlY3QgbGF6eSBpbWFnZXMgaW4gY2VsbFxuICB2YXIgbGF6eVNlbGVjdG9yID0gJ2ltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkXSwgJyArXG4gICAgJ2ltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyY10sIGltZ1tkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyY3NldF0nO1xuICB2YXIgaW1ncyA9IGNlbGxFbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoIGxhenlTZWxlY3RvciApO1xuICByZXR1cm4gdXRpbHMubWFrZUFycmF5KCBpbWdzICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIExhenlMb2FkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBjbGFzcyB0byBoYW5kbGUgbG9hZGluZyBpbWFnZXNcbiAqL1xuZnVuY3Rpb24gTGF6eUxvYWRlciggaW1nLCBmbGlja2l0eSApIHtcbiAgdGhpcy5pbWcgPSBpbWc7XG4gIHRoaXMuZmxpY2tpdHkgPSBmbGlja2l0eTtcbiAgdGhpcy5sb2FkKCk7XG59XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgLy8gZ2V0IHNyYyAmIHNyY3NldFxuICB2YXIgc3JjID0gdGhpcy5pbWcuZ2V0QXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkJykgfHxcbiAgICB0aGlzLmltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3JjJyk7XG4gIHZhciBzcmNzZXQgPSB0aGlzLmltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3Jjc2V0Jyk7XG4gIC8vIHNldCBzcmMgJiBzZXJzZXRcbiAgdGhpcy5pbWcuc3JjID0gc3JjO1xuICBpZiAoIHNyY3NldCApIHtcbiAgICB0aGlzLmltZy5zZXRBdHRyaWJ1dGUoICdzcmNzZXQnLCBzcmNzZXQgKTtcbiAgfVxuICAvLyByZW1vdmUgYXR0clxuICB0aGlzLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQnKTtcbiAgdGhpcy5pbWcucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWZsaWNraXR5LWxhenlsb2FkLXNyYycpO1xuICB0aGlzLmltZy5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtZmxpY2tpdHktbGF6eWxvYWQtc3Jjc2V0Jyk7XG59O1xuXG5MYXp5TG9hZGVyLnByb3RvdHlwZS5vbmxvYWQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuY29tcGxldGUoIGV2ZW50LCAnZmxpY2tpdHktbGF6eWxvYWRlZCcgKTtcbn07XG5cbkxhenlMb2FkZXIucHJvdG90eXBlLm9uZXJyb3IgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHRoaXMuY29tcGxldGUoIGV2ZW50LCAnZmxpY2tpdHktbGF6eWVycm9yJyApO1xufTtcblxuTGF6eUxvYWRlci5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiggZXZlbnQsIGNsYXNzTmFtZSApIHtcbiAgLy8gdW5iaW5kIGV2ZW50c1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuXG4gIHZhciBjZWxsID0gdGhpcy5mbGlja2l0eS5nZXRQYXJlbnRDZWxsKCB0aGlzLmltZyApO1xuICB2YXIgY2VsbEVsZW0gPSBjZWxsICYmIGNlbGwuZWxlbWVudDtcbiAgdGhpcy5mbGlja2l0eS5jZWxsU2l6ZUNoYW5nZSggY2VsbEVsZW0gKTtcblxuICB0aGlzLmltZy5jbGFzc0xpc3QuYWRkKCBjbGFzc05hbWUgKTtcbiAgdGhpcy5mbGlja2l0eS5kaXNwYXRjaEV2ZW50KCAnbGF6eUxvYWQnLCBldmVudCwgY2VsbEVsZW0gKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5GbGlja2l0eS5MYXp5TG9hZGVyID0gTGF6eUxvYWRlcjtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9sYXp5bG9hZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvbGF6eWxvYWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gcGFnZSBkb3RzXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJy4vZmxpY2tpdHknLFxuICAgICAgJ3VuaXBvaW50ZXIvdW5pcG9pbnRlcicsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnXG4gICAgXSwgZnVuY3Rpb24oIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApIHtcbiAgICAgIHJldHVybiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpLFxuICAgICAgcmVxdWlyZSgndW5pcG9pbnRlcicpLFxuICAgICAgcmVxdWlyZSgnZml6enktdWktdXRpbHMnKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgd2luZG93LkZsaWNraXR5LFxuICAgICAgd2luZG93LlVuaXBvaW50ZXIsXG4gICAgICB3aW5kb3cuZml6enlVSVV0aWxzXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRmxpY2tpdHksIFVuaXBvaW50ZXIsIHV0aWxzICkge1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQYWdlRG90cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFBhZ2VEb3RzKCBwYXJlbnQgKSB7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9jcmVhdGUoKTtcbn1cblxuUGFnZURvdHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVW5pcG9pbnRlci5wcm90b3R5cGUgKTtcblxuUGFnZURvdHMucHJvdG90eXBlLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gY3JlYXRlIGhvbGRlciBlbGVtZW50XG4gIHRoaXMuaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcbiAgdGhpcy5ob2xkZXIuY2xhc3NOYW1lID0gJ2ZsaWNraXR5LXBhZ2UtZG90cyc7XG4gIC8vIGNyZWF0ZSBkb3RzLCBhcnJheSBvZiBlbGVtZW50c1xuICB0aGlzLmRvdHMgPSBbXTtcbiAgLy8gZXZlbnRzXG4gIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCggdGhpcyApO1xuICB0aGlzLm9uKCAncG9pbnRlckRvd24nLCB0aGlzLnBhcmVudC5jaGlsZFVJUG9pbnRlckRvd24uYmluZCggdGhpcy5wYXJlbnQgKSApO1xufTtcblxuUGFnZURvdHMucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc2V0RG90cygpO1xuICB0aGlzLmhvbGRlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrICk7XG4gIHRoaXMuYmluZFN0YXJ0RXZlbnQoIHRoaXMuaG9sZGVyICk7XG4gIC8vIGFkZCB0byBET01cbiAgdGhpcy5wYXJlbnQuZWxlbWVudC5hcHBlbmRDaGlsZCggdGhpcy5ob2xkZXIgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaG9sZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2sgKTtcbiAgdGhpcy51bmJpbmRTdGFydEV2ZW50KCB0aGlzLmhvbGRlciApO1xuICAvLyByZW1vdmUgZnJvbSBET01cbiAgdGhpcy5wYXJlbnQuZWxlbWVudC5yZW1vdmVDaGlsZCggdGhpcy5ob2xkZXIgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5zZXREb3RzID0gZnVuY3Rpb24oKSB7XG4gIC8vIGdldCBkaWZmZXJlbmNlIGJldHdlZW4gbnVtYmVyIG9mIHNsaWRlcyBhbmQgbnVtYmVyIG9mIGRvdHNcbiAgdmFyIGRlbHRhID0gdGhpcy5wYXJlbnQuc2xpZGVzLmxlbmd0aCAtIHRoaXMuZG90cy5sZW5ndGg7XG4gIGlmICggZGVsdGEgPiAwICkge1xuICAgIHRoaXMuYWRkRG90cyggZGVsdGEgKTtcbiAgfSBlbHNlIGlmICggZGVsdGEgPCAwICkge1xuICAgIHRoaXMucmVtb3ZlRG90cyggLWRlbHRhICk7XG4gIH1cbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5hZGREb3RzID0gZnVuY3Rpb24oIGNvdW50ICkge1xuICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIHZhciBuZXdEb3RzID0gW107XG4gIHZhciBsZW5ndGggPSB0aGlzLmRvdHMubGVuZ3RoO1xuICB2YXIgbWF4ID0gbGVuZ3RoICsgY291bnQ7XG5cbiAgZm9yICggdmFyIGkgPSBsZW5ndGg7IGkgPCBtYXg7IGkrKyApIHtcbiAgICB2YXIgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkb3QuY2xhc3NOYW1lID0gJ2RvdCc7XG4gICAgZG90LnNldEF0dHJpYnV0ZSggJ2FyaWEtbGFiZWwnLCAnUGFnZSBkb3QgJyArICggaSArIDEgKSApO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKCBkb3QgKTtcbiAgICBuZXdEb3RzLnB1c2goIGRvdCApO1xuICB9XG5cbiAgdGhpcy5ob2xkZXIuYXBwZW5kQ2hpbGQoIGZyYWdtZW50ICk7XG4gIHRoaXMuZG90cyA9IHRoaXMuZG90cy5jb25jYXQoIG5ld0RvdHMgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5yZW1vdmVEb3RzID0gZnVuY3Rpb24oIGNvdW50ICkge1xuICAvLyByZW1vdmUgZnJvbSB0aGlzLmRvdHMgY29sbGVjdGlvblxuICB2YXIgcmVtb3ZlRG90cyA9IHRoaXMuZG90cy5zcGxpY2UoIHRoaXMuZG90cy5sZW5ndGggLSBjb3VudCwgY291bnQgKTtcbiAgLy8gcmVtb3ZlIGZyb20gRE9NXG4gIHJlbW92ZURvdHMuZm9yRWFjaCggZnVuY3Rpb24oIGRvdCApIHtcbiAgICB0aGlzLmhvbGRlci5yZW1vdmVDaGlsZCggZG90ICk7XG4gIH0sIHRoaXMgKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS51cGRhdGVTZWxlY3RlZCA9IGZ1bmN0aW9uKCkge1xuICAvLyByZW1vdmUgc2VsZWN0ZWQgY2xhc3Mgb24gcHJldmlvdXNcbiAgaWYgKCB0aGlzLnNlbGVjdGVkRG90ICkge1xuICAgIHRoaXMuc2VsZWN0ZWREb3QuY2xhc3NOYW1lID0gJ2RvdCc7XG4gICAgdGhpcy5zZWxlY3RlZERvdC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtY3VycmVudCcpO1xuICB9XG4gIC8vIGRvbid0IHByb2NlZWQgaWYgbm8gZG90c1xuICBpZiAoICF0aGlzLmRvdHMubGVuZ3RoICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnNlbGVjdGVkRG90ID0gdGhpcy5kb3RzWyB0aGlzLnBhcmVudC5zZWxlY3RlZEluZGV4IF07XG4gIHRoaXMuc2VsZWN0ZWREb3QuY2xhc3NOYW1lID0gJ2RvdCBpcy1zZWxlY3RlZCc7XG4gIHRoaXMuc2VsZWN0ZWREb3Quc2V0QXR0cmlidXRlKCAnYXJpYS1jdXJyZW50JywgJ3N0ZXAnICk7XG59O1xuXG5QYWdlRG90cy5wcm90b3R5cGUub25UYXAgPSAvLyBvbGQgbWV0aG9kIG5hbWUsIGJhY2t3YXJkcy1jb21wYXRpYmxlXG5QYWdlRG90cy5wcm90b3R5cGUub25DbGljayA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgLy8gb25seSBjYXJlIGFib3V0IGRvdCBjbGlja3NcbiAgaWYgKCB0YXJnZXQubm9kZU5hbWUgIT0gJ0xJJyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnBhcmVudC51aUNoYW5nZSgpO1xuICB2YXIgaW5kZXggPSB0aGlzLmRvdHMuaW5kZXhPZiggdGFyZ2V0ICk7XG4gIHRoaXMucGFyZW50LnNlbGVjdCggaW5kZXggKTtcbn07XG5cblBhZ2VEb3RzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB0aGlzLmFsbE9mZigpO1xufTtcblxuRmxpY2tpdHkuUGFnZURvdHMgPSBQYWdlRG90cztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmxpY2tpdHkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxudXRpbHMuZXh0ZW5kKCBGbGlja2l0eS5kZWZhdWx0cywge1xuICBwYWdlRG90czogdHJ1ZVxufSk7XG5cbkZsaWNraXR5LmNyZWF0ZU1ldGhvZHMucHVzaCgnX2NyZWF0ZVBhZ2VEb3RzJyk7XG5cbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZVBhZ2VEb3RzID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5wYWdlRG90cyApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5wYWdlRG90cyA9IG5ldyBQYWdlRG90cyggdGhpcyApO1xuICAvLyBldmVudHNcbiAgdGhpcy5vbiggJ2FjdGl2YXRlJywgdGhpcy5hY3RpdmF0ZVBhZ2VEb3RzICk7XG4gIHRoaXMub24oICdzZWxlY3QnLCB0aGlzLnVwZGF0ZVNlbGVjdGVkUGFnZURvdHMgKTtcbiAgdGhpcy5vbiggJ2NlbGxDaGFuZ2UnLCB0aGlzLnVwZGF0ZVBhZ2VEb3RzICk7XG4gIHRoaXMub24oICdyZXNpemUnLCB0aGlzLnVwZGF0ZVBhZ2VEb3RzICk7XG4gIHRoaXMub24oICdkZWFjdGl2YXRlJywgdGhpcy5kZWFjdGl2YXRlUGFnZURvdHMgKTtcbn07XG5cbnByb3RvLmFjdGl2YXRlUGFnZURvdHMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wYWdlRG90cy5hY3RpdmF0ZSgpO1xufTtcblxucHJvdG8udXBkYXRlU2VsZWN0ZWRQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLnVwZGF0ZVNlbGVjdGVkKCk7XG59O1xuXG5wcm90by51cGRhdGVQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLnNldERvdHMoKTtcbn07XG5cbnByb3RvLmRlYWN0aXZhdGVQYWdlRG90cyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBhZ2VEb3RzLmRlYWN0aXZhdGUoKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5GbGlja2l0eS5QYWdlRG90cyA9IFBhZ2VEb3RzO1xuXG5yZXR1cm4gRmxpY2tpdHk7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3BhZ2UtZG90cy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvZmxpY2tpdHkvanMvcGFnZS1kb3RzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHBsYXllciAmIGF1dG9QbGF5XG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsXG4gICAgICAnZml6enktdWktdXRpbHMvdXRpbHMnLFxuICAgICAgJy4vZmxpY2tpdHknXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciwgdXRpbHMsIEZsaWNraXR5ICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIEV2RW1pdHRlciwgdXRpbHMsIEZsaWNraXR5ICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJyksXG4gICAgICByZXF1aXJlKCdmaXp6eS11aS11dGlscycpLFxuICAgICAgcmVxdWlyZSgnLi9mbGlja2l0eScpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIGZhY3RvcnkoXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlscyxcbiAgICAgIHdpbmRvdy5GbGlja2l0eVxuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCBFdkVtaXR0ZXIsIHV0aWxzLCBGbGlja2l0eSApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQbGF5ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gUGxheWVyKCBwYXJlbnQgKSB7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLnN0YXRlID0gJ3N0b3BwZWQnO1xuICAvLyB2aXNpYmlsaXR5IGNoYW5nZSBldmVudCBoYW5kbGVyXG4gIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlID0gdGhpcy52aXNpYmlsaXR5Q2hhbmdlLmJpbmQoIHRoaXMgKTtcbiAgdGhpcy5vblZpc2liaWxpdHlQbGF5ID0gdGhpcy52aXNpYmlsaXR5UGxheS5iaW5kKCB0aGlzICk7XG59XG5cblBsYXllci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbi8vIHN0YXJ0IHBsYXlcblBsYXllci5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc3RhdGUgPT0gJ3BsYXlpbmcnICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBkbyBub3QgcGxheSBpZiBwYWdlIGlzIGhpZGRlbiwgc3RhcnQgcGxheWluZyB3aGVuIHBhZ2UgaXMgdmlzaWJsZVxuICB2YXIgaXNQYWdlSGlkZGVuID0gZG9jdW1lbnQuaGlkZGVuO1xuICBpZiAoIGlzUGFnZUhpZGRlbiApIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAndmlzaWJpbGl0eWNoYW5nZScsIHRoaXMub25WaXNpYmlsaXR5UGxheSApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuc3RhdGUgPSAncGxheWluZyc7XG4gIC8vIGxpc3RlbiB0byB2aXNpYmlsaXR5IGNoYW5nZVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAndmlzaWJpbGl0eWNoYW5nZScsIHRoaXMub25WaXNpYmlsaXR5Q2hhbmdlICk7XG4gIC8vIHN0YXJ0IHRpY2tpbmdcbiAgdGhpcy50aWNrKCk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbigpIHtcbiAgLy8gZG8gbm90IHRpY2sgaWYgbm90IHBsYXlpbmdcbiAgaWYgKCB0aGlzLnN0YXRlICE9ICdwbGF5aW5nJyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdGltZSA9IHRoaXMucGFyZW50Lm9wdGlvbnMuYXV0b1BsYXk7XG4gIC8vIGRlZmF1bHQgdG8gMyBzZWNvbmRzXG4gIHRpbWUgPSB0eXBlb2YgdGltZSA9PSAnbnVtYmVyJyA/IHRpbWUgOiAzMDAwO1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICAvLyBIQUNLOiByZXNldCB0aWNrcyBpZiBzdG9wcGVkIGFuZCBzdGFydGVkIHdpdGhpbiBpbnRlcnZhbFxuICB0aGlzLmNsZWFyKCk7XG4gIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgIF90aGlzLnBhcmVudC5uZXh0KCB0cnVlICk7XG4gICAgX3RoaXMudGljaygpO1xuICB9LCB0aW1lICk7XG59O1xuXG5QbGF5ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdGF0ZSA9ICdzdG9wcGVkJztcbiAgdGhpcy5jbGVhcigpO1xuICAvLyByZW1vdmUgdmlzaWJpbGl0eSBjaGFuZ2UgZXZlbnRcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Zpc2liaWxpdHljaGFuZ2UnLCB0aGlzLm9uVmlzaWJpbGl0eUNoYW5nZSApO1xufTtcblxuUGxheWVyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICBjbGVhclRpbWVvdXQoIHRoaXMudGltZW91dCApO1xufTtcblxuUGxheWVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuc3RhdGUgPT0gJ3BsYXlpbmcnICkge1xuICAgIHRoaXMuc3RhdGUgPSAncGF1c2VkJztcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cbn07XG5cblBsYXllci5wcm90b3R5cGUudW5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAvLyByZS1zdGFydCBwbGF5IGlmIHBhdXNlZFxuICBpZiAoIHRoaXMuc3RhdGUgPT0gJ3BhdXNlZCcgKSB7XG4gICAgdGhpcy5wbGF5KCk7XG4gIH1cbn07XG5cbi8vIHBhdXNlIGlmIHBhZ2UgdmlzaWJpbGl0eSBpcyBoaWRkZW4sIHVucGF1c2UgaWYgdmlzaWJsZVxuUGxheWVyLnByb3RvdHlwZS52aXNpYmlsaXR5Q2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpc1BhZ2VIaWRkZW4gPSBkb2N1bWVudC5oaWRkZW47XG4gIHRoaXNbIGlzUGFnZUhpZGRlbiA/ICdwYXVzZScgOiAndW5wYXVzZScgXSgpO1xufTtcblxuUGxheWVyLnByb3RvdHlwZS52aXNpYmlsaXR5UGxheSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXkoKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Zpc2liaWxpdHljaGFuZ2UnLCB0aGlzLm9uVmlzaWJpbGl0eVBsYXkgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEZsaWNraXR5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmV4dGVuZCggRmxpY2tpdHkuZGVmYXVsdHMsIHtcbiAgcGF1c2VBdXRvUGxheU9uSG92ZXI6IHRydWVcbn0pO1xuXG5GbGlja2l0eS5jcmVhdGVNZXRob2RzLnB1c2goJ19jcmVhdGVQbGF5ZXInKTtcbnZhciBwcm90byA9IEZsaWNraXR5LnByb3RvdHlwZTtcblxucHJvdG8uX2NyZWF0ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoIHRoaXMgKTtcblxuICB0aGlzLm9uKCAnYWN0aXZhdGUnLCB0aGlzLmFjdGl2YXRlUGxheWVyICk7XG4gIHRoaXMub24oICd1aUNoYW5nZScsIHRoaXMuc3RvcFBsYXllciApO1xuICB0aGlzLm9uKCAncG9pbnRlckRvd24nLCB0aGlzLnN0b3BQbGF5ZXIgKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQbGF5ZXIgKTtcbn07XG5cbnByb3RvLmFjdGl2YXRlUGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMub3B0aW9ucy5hdXRvUGxheSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5wbGF5ZXIucGxheSgpO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZW50ZXInLCB0aGlzICk7XG59O1xuXG4vLyBQbGF5ZXIgQVBJLCBkb24ndCBoYXRlIHRoZSAuLi4gdGhhbmtzIEkga25vdyB3aGVyZSB0aGUgZG9vciBpc1xuXG5wcm90by5wbGF5UGxheWVyID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyLnBsYXkoKTtcbn07XG5cbnByb3RvLnN0b3BQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIuc3RvcCgpO1xufTtcblxucHJvdG8ucGF1c2VQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIucGF1c2UoKTtcbn07XG5cbnByb3RvLnVucGF1c2VQbGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wbGF5ZXIudW5wYXVzZSgpO1xufTtcblxucHJvdG8uZGVhY3RpdmF0ZVBsYXllciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnBsYXllci5zdG9wKCk7XG4gIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2VlbnRlcicsIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tIG1vdXNlZW50ZXIvbGVhdmUgLS0tLS0gLy9cblxuLy8gcGF1c2UgYXV0by1wbGF5IG9uIGhvdmVyXG5wcm90by5vbm1vdXNlZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnBhdXNlQXV0b1BsYXlPbkhvdmVyICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBsYXllci5wYXVzZSgpO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbGVhdmUnLCB0aGlzICk7XG59O1xuXG4vLyByZXN1bWUgYXV0by1wbGF5IG9uIGhvdmVyIG9mZlxucHJvdG8ub25tb3VzZWxlYXZlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucGxheWVyLnVucGF1c2UoKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWxlYXZlJywgdGhpcyApO1xufTtcblxuLy8gLS0tLS0gIC0tLS0tIC8vXG5cbkZsaWNraXR5LlBsYXllciA9IFBsYXllcjtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9wbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3BsYXllci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBwcmV2L25leHQgYnV0dG9uc1xuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkge1xuICAvLyB1bml2ZXJzYWwgbW9kdWxlIGRlZmluaXRpb25cbiAgLyoganNoaW50IHN0cmljdDogZmFsc2UgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIFtcbiAgICAgICcuL2ZsaWNraXR5JyxcbiAgICAgICd1bmlwb2ludGVyL3VuaXBvaW50ZXInLFxuICAgICAgJ2Zpenp5LXVpLXV0aWxzL3V0aWxzJ1xuICAgIF0sIGZ1bmN0aW9uKCBGbGlja2l0eSwgVW5pcG9pbnRlciwgdXRpbHMgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBGbGlja2l0eSwgVW5pcG9pbnRlciwgdXRpbHMgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJy4vZmxpY2tpdHknKSxcbiAgICAgIHJlcXVpcmUoJ3VuaXBvaW50ZXInKSxcbiAgICAgIHJlcXVpcmUoJ2Zpenp5LXVpLXV0aWxzJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5GbGlja2l0eSxcbiAgICAgIHdpbmRvdy5Vbmlwb2ludGVyLFxuICAgICAgd2luZG93LmZpenp5VUlVdGlsc1xuICAgICk7XG4gIH1cblxufSggd2luZG93LCBmdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEZsaWNraXR5LCBVbmlwb2ludGVyLCB1dGlscyApIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIHN2Z1VSSSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFByZXZOZXh0QnV0dG9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIFByZXZOZXh0QnV0dG9uKCBkaXJlY3Rpb24sIHBhcmVudCApIHtcbiAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9jcmVhdGUoKTtcbn1cblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVW5pcG9pbnRlci5wcm90b3R5cGUgKTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLl9jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gcHJvcGVydGllc1xuICB0aGlzLmlzRW5hYmxlZCA9IHRydWU7XG4gIHRoaXMuaXNQcmV2aW91cyA9IHRoaXMuZGlyZWN0aW9uID09IC0xO1xuICB2YXIgbGVmdERpcmVjdGlvbiA9IHRoaXMucGFyZW50Lm9wdGlvbnMucmlnaHRUb0xlZnQgPyAxIDogLTE7XG4gIHRoaXMuaXNMZWZ0ID0gdGhpcy5kaXJlY3Rpb24gPT0gbGVmdERpcmVjdGlvbjtcblxuICB2YXIgZWxlbWVudCA9IHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlbGVtZW50LmNsYXNzTmFtZSA9ICdmbGlja2l0eS1idXR0b24gZmxpY2tpdHktcHJldi1uZXh0LWJ1dHRvbic7XG4gIGVsZW1lbnQuY2xhc3NOYW1lICs9IHRoaXMuaXNQcmV2aW91cyA/ICcgcHJldmlvdXMnIDogJyBuZXh0JztcbiAgLy8gcHJldmVudCBidXR0b24gZnJvbSBzdWJtaXR0aW5nIGZvcm0gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTA4MzYwNzYvMTgyMTgzXG4gIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAndHlwZScsICdidXR0b24nICk7XG4gIC8vIGluaXQgYXMgZGlzYWJsZWRcbiAgdGhpcy5kaXNhYmxlKCk7XG5cbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWxhYmVsJywgdGhpcy5pc1ByZXZpb3VzID8gJ1ByZXZpb3VzJyA6ICdOZXh0JyApO1xuXG4gIC8vIGNyZWF0ZSBhcnJvd1xuICB2YXIgc3ZnID0gdGhpcy5jcmVhdGVTVkcoKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCggc3ZnICk7XG4gIC8vIGV2ZW50c1xuICB0aGlzLnBhcmVudC5vbiggJ3NlbGVjdCcsIHRoaXMudXBkYXRlLmJpbmQoIHRoaXMgKSApO1xuICB0aGlzLm9uKCAncG9pbnRlckRvd24nLCB0aGlzLnBhcmVudC5jaGlsZFVJUG9pbnRlckRvd24uYmluZCggdGhpcy5wYXJlbnQgKSApO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuYmluZFN0YXJ0RXZlbnQoIHRoaXMuZWxlbWVudCApO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgdGhpcyApO1xuICAvLyBhZGQgdG8gRE9NXG4gIHRoaXMucGFyZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gcmVtb3ZlIGZyb20gRE9NXG4gIHRoaXMucGFyZW50LmVsZW1lbnQucmVtb3ZlQ2hpbGQoIHRoaXMuZWxlbWVudCApO1xuICAvLyBjbGljayBldmVudHNcbiAgdGhpcy51bmJpbmRTdGFydEV2ZW50KCB0aGlzLmVsZW1lbnQgKTtcbiAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIHRoaXMgKTtcbn07XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS5jcmVhdGVTVkcgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyggc3ZnVVJJLCAnc3ZnJyk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICdmbGlja2l0eS1idXR0b24taWNvbicgKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSggJ3ZpZXdCb3gnLCAnMCAwIDEwMCAxMDAnICk7XG4gIHZhciBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCBzdmdVUkksICdwYXRoJyk7XG4gIHZhciBwYXRoTW92ZW1lbnRzID0gZ2V0QXJyb3dNb3ZlbWVudHMoIHRoaXMucGFyZW50Lm9wdGlvbnMuYXJyb3dTaGFwZSApO1xuICBwYXRoLnNldEF0dHJpYnV0ZSggJ2QnLCBwYXRoTW92ZW1lbnRzICk7XG4gIHBhdGguc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnYXJyb3cnICk7XG4gIC8vIHJvdGF0ZSBhcnJvd1xuICBpZiAoICF0aGlzLmlzTGVmdCApIHtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSggJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMTAwLCAxMDApIHJvdGF0ZSgxODApICcgKTtcbiAgfVxuICBzdmcuYXBwZW5kQ2hpbGQoIHBhdGggKTtcbiAgcmV0dXJuIHN2Zztcbn07XG5cbi8vIGdldCBTVkcgcGF0aCBtb3ZtZW1lbnRcbmZ1bmN0aW9uIGdldEFycm93TW92ZW1lbnRzKCBzaGFwZSApIHtcbiAgLy8gdXNlIHNoYXBlIGFzIG1vdmVtZW50IGlmIHN0cmluZ1xuICBpZiAoIHR5cGVvZiBzaGFwZSA9PSAnc3RyaW5nJyApIHtcbiAgICByZXR1cm4gc2hhcGU7XG4gIH1cbiAgLy8gY3JlYXRlIG1vdmVtZW50IHN0cmluZ1xuICByZXR1cm4gJ00gJyArIHNoYXBlLngwICsgJyw1MCcgK1xuICAgICcgTCAnICsgc2hhcGUueDEgKyAnLCcgKyAoIHNoYXBlLnkxICsgNTAgKSArXG4gICAgJyBMICcgKyBzaGFwZS54MiArICcsJyArICggc2hhcGUueTIgKyA1MCApICtcbiAgICAnIEwgJyArIHNoYXBlLngzICsgJyw1MCAnICtcbiAgICAnIEwgJyArIHNoYXBlLngyICsgJywnICsgKCA1MCAtIHNoYXBlLnkyICkgK1xuICAgICcgTCAnICsgc2hhcGUueDEgKyAnLCcgKyAoIDUwIC0gc2hhcGUueTEgKSArXG4gICAgJyBaJztcbn1cblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gdXRpbHMuaGFuZGxlRXZlbnQ7XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gIGlmICggIXRoaXMuaXNFbmFibGVkICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLnBhcmVudC51aUNoYW5nZSgpO1xuICB2YXIgbWV0aG9kID0gdGhpcy5pc1ByZXZpb3VzID8gJ3ByZXZpb3VzJyA6ICduZXh0JztcbiAgdGhpcy5wYXJlbnRbIG1ldGhvZCBdKCk7XG59O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIHRoaXMuaXNFbmFibGVkICkge1xuICAgIHJldHVybjtcbiAgfVxuICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgdGhpcy5pc0VuYWJsZWQgPSB0cnVlO1xufTtcblxuUHJldk5leHRCdXR0b24ucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5pc0VuYWJsZWQgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIHRoaXMuaXNFbmFibGVkID0gZmFsc2U7XG59O1xuXG5QcmV2TmV4dEJ1dHRvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gIC8vIGluZGV4IG9mIGZpcnN0IG9yIGxhc3Qgc2xpZGUsIGlmIHByZXZpb3VzIG9yIG5leHRcbiAgdmFyIHNsaWRlcyA9IHRoaXMucGFyZW50LnNsaWRlcztcbiAgLy8gZW5hYmxlIGlzIHdyYXBBcm91bmQgYW5kIGF0IGxlYXN0IDIgc2xpZGVzXG4gIGlmICggdGhpcy5wYXJlbnQub3B0aW9ucy53cmFwQXJvdW5kICYmIHNsaWRlcy5sZW5ndGggPiAxICkge1xuICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBzbGlkZXMubGVuZ3RoID8gc2xpZGVzLmxlbmd0aCAtIDEgOiAwO1xuICB2YXIgYm91bmRJbmRleCA9IHRoaXMuaXNQcmV2aW91cyA/IDAgOiBsYXN0SW5kZXg7XG4gIHZhciBtZXRob2QgPSB0aGlzLnBhcmVudC5zZWxlY3RlZEluZGV4ID09IGJvdW5kSW5kZXggPyAnZGlzYWJsZScgOiAnZW5hYmxlJztcbiAgdGhpc1sgbWV0aG9kIF0oKTtcbn07XG5cblByZXZOZXh0QnV0dG9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICB0aGlzLmFsbE9mZigpO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRmxpY2tpdHkgcHJvdG90eXBlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnV0aWxzLmV4dGVuZCggRmxpY2tpdHkuZGVmYXVsdHMsIHtcbiAgcHJldk5leHRCdXR0b25zOiB0cnVlLFxuICBhcnJvd1NoYXBlOiB7XG4gICAgeDA6IDEwLFxuICAgIHgxOiA2MCwgeTE6IDUwLFxuICAgIHgyOiA3MCwgeTI6IDQwLFxuICAgIHgzOiAzMFxuICB9XG59KTtcblxuRmxpY2tpdHkuY3JlYXRlTWV0aG9kcy5wdXNoKCdfY3JlYXRlUHJldk5leHRCdXR0b25zJyk7XG52YXIgcHJvdG8gPSBGbGlja2l0eS5wcm90b3R5cGU7XG5cbnByb3RvLl9jcmVhdGVQcmV2TmV4dEJ1dHRvbnMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKCAhdGhpcy5vcHRpb25zLnByZXZOZXh0QnV0dG9ucyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnByZXZCdXR0b24gPSBuZXcgUHJldk5leHRCdXR0b24oIC0xLCB0aGlzICk7XG4gIHRoaXMubmV4dEJ1dHRvbiA9IG5ldyBQcmV2TmV4dEJ1dHRvbiggMSwgdGhpcyApO1xuXG4gIHRoaXMub24oICdhY3RpdmF0ZScsIHRoaXMuYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgKTtcbn07XG5cbnByb3RvLmFjdGl2YXRlUHJldk5leHRCdXR0b25zID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHJldkJ1dHRvbi5hY3RpdmF0ZSgpO1xuICB0aGlzLm5leHRCdXR0b24uYWN0aXZhdGUoKTtcbiAgdGhpcy5vbiggJ2RlYWN0aXZhdGUnLCB0aGlzLmRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgKTtcbn07XG5cbnByb3RvLmRlYWN0aXZhdGVQcmV2TmV4dEJ1dHRvbnMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wcmV2QnV0dG9uLmRlYWN0aXZhdGUoKTtcbiAgdGhpcy5uZXh0QnV0dG9uLmRlYWN0aXZhdGUoKTtcbiAgdGhpcy5vZmYoICdkZWFjdGl2YXRlJywgdGhpcy5kZWFjdGl2YXRlUHJldk5leHRCdXR0b25zICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuRmxpY2tpdHkuUHJldk5leHRCdXR0b24gPSBQcmV2TmV4dEJ1dHRvbjtcblxucmV0dXJuIEZsaWNraXR5O1xuXG59KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9wcmV2LW5leHQtYnV0dG9uLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9wcmV2LW5leHQtYnV0dG9uLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8vIHNsaWRlXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqL1xuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggZmFjdG9yeSApO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuRmxpY2tpdHkgPSB3aW5kb3cuRmxpY2tpdHkgfHwge307XG4gICAgd2luZG93LkZsaWNraXR5LlNsaWRlID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gU2xpZGUoIHBhcmVudCApIHtcbiAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gIHRoaXMuaXNPcmlnaW5MZWZ0ID0gcGFyZW50Lm9yaWdpblNpZGUgPT0gJ2xlZnQnO1xuICB0aGlzLmNlbGxzID0gW107XG4gIHRoaXMub3V0ZXJXaWR0aCA9IDA7XG4gIHRoaXMuaGVpZ2h0ID0gMDtcbn1cblxudmFyIHByb3RvID0gU2xpZGUucHJvdG90eXBlO1xuXG5wcm90by5hZGRDZWxsID0gZnVuY3Rpb24oIGNlbGwgKSB7XG4gIHRoaXMuY2VsbHMucHVzaCggY2VsbCApO1xuICB0aGlzLm91dGVyV2lkdGggKz0gY2VsbC5zaXplLm91dGVyV2lkdGg7XG4gIHRoaXMuaGVpZ2h0ID0gTWF0aC5tYXgoIGNlbGwuc2l6ZS5vdXRlckhlaWdodCwgdGhpcy5oZWlnaHQgKTtcbiAgLy8gZmlyc3QgY2VsbCBzdHVmZlxuICBpZiAoIHRoaXMuY2VsbHMubGVuZ3RoID09IDEgKSB7XG4gICAgdGhpcy54ID0gY2VsbC54OyAvLyB4IGNvbWVzIGZyb20gZmlyc3QgY2VsbFxuICAgIHZhciBiZWdpbk1hcmdpbiA9IHRoaXMuaXNPcmlnaW5MZWZ0ID8gJ21hcmdpbkxlZnQnIDogJ21hcmdpblJpZ2h0JztcbiAgICB0aGlzLmZpcnN0TWFyZ2luID0gY2VsbC5zaXplWyBiZWdpbk1hcmdpbiBdO1xuICB9XG59O1xuXG5wcm90by51cGRhdGVUYXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVuZE1hcmdpbiA9IHRoaXMuaXNPcmlnaW5MZWZ0ID8gJ21hcmdpblJpZ2h0JyA6ICdtYXJnaW5MZWZ0JztcbiAgdmFyIGxhc3RDZWxsID0gdGhpcy5nZXRMYXN0Q2VsbCgpO1xuICB2YXIgbGFzdE1hcmdpbiA9IGxhc3RDZWxsID8gbGFzdENlbGwuc2l6ZVsgZW5kTWFyZ2luIF0gOiAwO1xuICB2YXIgc2xpZGVXaWR0aCA9IHRoaXMub3V0ZXJXaWR0aCAtICggdGhpcy5maXJzdE1hcmdpbiArIGxhc3RNYXJnaW4gKTtcbiAgdGhpcy50YXJnZXQgPSB0aGlzLnggKyB0aGlzLmZpcnN0TWFyZ2luICsgc2xpZGVXaWR0aCAqIHRoaXMucGFyZW50LmNlbGxBbGlnbjtcbn07XG5cbnByb3RvLmdldExhc3RDZWxsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNlbGxzWyB0aGlzLmNlbGxzLmxlbmd0aCAtIDEgXTtcbn07XG5cbnByb3RvLnNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNlbGxzLmZvckVhY2goIGZ1bmN0aW9uKCBjZWxsICkge1xuICAgIGNlbGwuc2VsZWN0KCk7XG4gIH0pO1xufTtcblxucHJvdG8udW5zZWxlY3QgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5jZWxscy5mb3JFYWNoKCBmdW5jdGlvbiggY2VsbCApIHtcbiAgICBjZWxsLnVuc2VsZWN0KCk7XG4gIH0pO1xufTtcblxucHJvdG8uZ2V0Q2VsbEVsZW1lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNlbGxzLm1hcCggZnVuY3Rpb24oIGNlbGwgKSB7XG4gICAgcmV0dXJuIGNlbGwuZWxlbWVudDtcbiAgfSk7XG59O1xuXG5yZXR1cm4gU2xpZGU7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZsaWNraXR5L2pzL3NsaWRlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9qcy9zbGlkZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKiFcbiAqIGdldFNpemUgdjIuMC4zXG4gKiBtZWFzdXJlIHNpemUgb2YgZWxlbWVudHNcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLyoganNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSAqL1xuLyogZ2xvYmFscyBjb25zb2xlOiBmYWxzZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTURcbiAgICBkZWZpbmUoIGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmdldFNpemUgPSBmYWN0b3J5KCk7XG4gIH1cblxufSkoIHdpbmRvdywgZnVuY3Rpb24gZmFjdG9yeSgpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG4vLyBnZXQgYSBudW1iZXIgZnJvbSBhIHN0cmluZywgbm90IGEgcGVyY2VudGFnZVxuZnVuY3Rpb24gZ2V0U3R5bGVTaXplKCB2YWx1ZSApIHtcbiAgdmFyIG51bSA9IHBhcnNlRmxvYXQoIHZhbHVlICk7XG4gIC8vIG5vdCBhIHBlcmNlbnQgbGlrZSAnMTAwJScsIGFuZCBhIG51bWJlclxuICB2YXIgaXNWYWxpZCA9IHZhbHVlLmluZGV4T2YoJyUnKSA9PSAtMSAmJiAhaXNOYU4oIG51bSApO1xuICByZXR1cm4gaXNWYWxpZCAmJiBudW07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgbG9nRXJyb3IgPSB0eXBlb2YgY29uc29sZSA9PSAndW5kZWZpbmVkJyA/IG5vb3AgOlxuICBmdW5jdGlvbiggbWVzc2FnZSApIHtcbiAgICBjb25zb2xlLmVycm9yKCBtZXNzYWdlICk7XG4gIH07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lYXN1cmVtZW50cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG52YXIgbWVhc3VyZW1lbnRzID0gW1xuICAncGFkZGluZ0xlZnQnLFxuICAncGFkZGluZ1JpZ2h0JyxcbiAgJ3BhZGRpbmdUb3AnLFxuICAncGFkZGluZ0JvdHRvbScsXG4gICdtYXJnaW5MZWZ0JyxcbiAgJ21hcmdpblJpZ2h0JyxcbiAgJ21hcmdpblRvcCcsXG4gICdtYXJnaW5Cb3R0b20nLFxuICAnYm9yZGVyTGVmdFdpZHRoJyxcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxuICAnYm9yZGVyVG9wV2lkdGgnLFxuICAnYm9yZGVyQm90dG9tV2lkdGgnXG5dO1xuXG52YXIgbWVhc3VyZW1lbnRzTGVuZ3RoID0gbWVhc3VyZW1lbnRzLmxlbmd0aDtcblxuZnVuY3Rpb24gZ2V0WmVyb1NpemUoKSB7XG4gIHZhciBzaXplID0ge1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBpbm5lcldpZHRoOiAwLFxuICAgIGlubmVySGVpZ2h0OiAwLFxuICAgIG91dGVyV2lkdGg6IDAsXG4gICAgb3V0ZXJIZWlnaHQ6IDBcbiAgfTtcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gMDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2V0U3R5bGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBnZXRTdHlsZSwgZ2V0IHN0eWxlIG9mIGVsZW1lbnQsIGNoZWNrIGZvciBGaXJlZm94IGJ1Z1xuICogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NTQ4Mzk3XG4gKi9cbmZ1bmN0aW9uIGdldFN0eWxlKCBlbGVtICkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG4gIGlmICggIXN0eWxlICkge1xuICAgIGxvZ0Vycm9yKCAnU3R5bGUgcmV0dXJuZWQgJyArIHN0eWxlICtcbiAgICAgICcuIEFyZSB5b3UgcnVubmluZyB0aGlzIGNvZGUgaW4gYSBoaWRkZW4gaWZyYW1lIG9uIEZpcmVmb3g/ICcgK1xuICAgICAgJ1NlZSBodHRwczovL2JpdC5seS9nZXRzaXplYnVnMScgKTtcbiAgfVxuICByZXR1cm4gc3R5bGU7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNldHVwIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbnZhciBpc1NldHVwID0gZmFsc2U7XG5cbnZhciBpc0JveFNpemVPdXRlcjtcblxuLyoqXG4gKiBzZXR1cFxuICogY2hlY2sgaXNCb3hTaXplck91dGVyXG4gKiBkbyBvbiBmaXJzdCBnZXRTaXplKCkgcmF0aGVyIHRoYW4gb24gcGFnZSBsb2FkIGZvciBGaXJlZm94IGJ1Z1xuICovXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgLy8gc2V0dXAgb25jZVxuICBpZiAoIGlzU2V0dXAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlzU2V0dXAgPSB0cnVlO1xuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJveCBzaXppbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuICAvKipcbiAgICogQ2hyb21lICYgU2FmYXJpIG1lYXN1cmUgdGhlIG91dGVyLXdpZHRoIG9uIHN0eWxlLndpZHRoIG9uIGJvcmRlci1ib3ggZWxlbXNcbiAgICogSUUxMSAmIEZpcmVmb3g8MjkgbWVhc3VyZXMgdGhlIGlubmVyLXdpZHRoXG4gICAqL1xuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5zdHlsZS53aWR0aCA9ICcyMDBweCc7XG4gIGRpdi5zdHlsZS5wYWRkaW5nID0gJzFweCAycHggM3B4IDRweCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG4gIGRpdi5zdHlsZS5ib3JkZXJXaWR0aCA9ICcxcHggMnB4IDNweCA0cHgnO1xuICBkaXYuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuXG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoIGRpdiApO1xuICB2YXIgc3R5bGUgPSBnZXRTdHlsZSggZGl2ICk7XG4gIC8vIHJvdW5kIHZhbHVlIGZvciBicm93c2VyIHpvb20uIGRlc2FuZHJvL21hc29ucnkjOTI4XG4gIGlzQm94U2l6ZU91dGVyID0gTWF0aC5yb3VuZCggZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApICkgPT0gMjAwO1xuICBnZXRTaXplLmlzQm94U2l6ZU91dGVyID0gaXNCb3hTaXplT3V0ZXI7XG5cbiAgYm9keS5yZW1vdmVDaGlsZCggZGl2ICk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdldFNpemUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gZ2V0U2l6ZSggZWxlbSApIHtcbiAgc2V0dXAoKTtcblxuICAvLyB1c2UgcXVlcnlTZWxldG9yIGlmIGVsZW0gaXMgc3RyaW5nXG4gIGlmICggdHlwZW9mIGVsZW0gPT0gJ3N0cmluZycgKSB7XG4gICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIGVsZW0gKTtcbiAgfVxuXG4gIC8vIGRvIG5vdCBwcm9jZWVkIG9uIG5vbi1vYmplY3RzXG4gIGlmICggIWVsZW0gfHwgdHlwZW9mIGVsZW0gIT0gJ29iamVjdCcgfHwgIWVsZW0ubm9kZVR5cGUgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoIGVsZW0gKTtcblxuICAvLyBpZiBoaWRkZW4sIGV2ZXJ5dGhpbmcgaXMgMFxuICBpZiAoIHN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnICkge1xuICAgIHJldHVybiBnZXRaZXJvU2l6ZSgpO1xuICB9XG5cbiAgdmFyIHNpemUgPSB7fTtcbiAgc2l6ZS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gIHNpemUuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgdmFyIGlzQm9yZGVyQm94ID0gc2l6ZS5pc0JvcmRlckJveCA9IHN0eWxlLmJveFNpemluZyA9PSAnYm9yZGVyLWJveCc7XG5cbiAgLy8gZ2V0IGFsbCBtZWFzdXJlbWVudHNcbiAgZm9yICggdmFyIGk9MDsgaSA8IG1lYXN1cmVtZW50c0xlbmd0aDsgaSsrICkge1xuICAgIHZhciBtZWFzdXJlbWVudCA9IG1lYXN1cmVtZW50c1tpXTtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZVsgbWVhc3VyZW1lbnQgXTtcbiAgICB2YXIgbnVtID0gcGFyc2VGbG9hdCggdmFsdWUgKTtcbiAgICAvLyBhbnkgJ2F1dG8nLCAnbWVkaXVtJyB2YWx1ZSB3aWxsIGJlIDBcbiAgICBzaXplWyBtZWFzdXJlbWVudCBdID0gIWlzTmFOKCBudW0gKSA/IG51bSA6IDA7XG4gIH1cblxuICB2YXIgcGFkZGluZ1dpZHRoID0gc2l6ZS5wYWRkaW5nTGVmdCArIHNpemUucGFkZGluZ1JpZ2h0O1xuICB2YXIgcGFkZGluZ0hlaWdodCA9IHNpemUucGFkZGluZ1RvcCArIHNpemUucGFkZGluZ0JvdHRvbTtcbiAgdmFyIG1hcmdpbldpZHRoID0gc2l6ZS5tYXJnaW5MZWZ0ICsgc2l6ZS5tYXJnaW5SaWdodDtcbiAgdmFyIG1hcmdpbkhlaWdodCA9IHNpemUubWFyZ2luVG9wICsgc2l6ZS5tYXJnaW5Cb3R0b207XG4gIHZhciBib3JkZXJXaWR0aCA9IHNpemUuYm9yZGVyTGVmdFdpZHRoICsgc2l6ZS5ib3JkZXJSaWdodFdpZHRoO1xuICB2YXIgYm9yZGVySGVpZ2h0ID0gc2l6ZS5ib3JkZXJUb3BXaWR0aCArIHNpemUuYm9yZGVyQm90dG9tV2lkdGg7XG5cbiAgdmFyIGlzQm9yZGVyQm94U2l6ZU91dGVyID0gaXNCb3JkZXJCb3ggJiYgaXNCb3hTaXplT3V0ZXI7XG5cbiAgLy8gb3ZlcndyaXRlIHdpZHRoIGFuZCBoZWlnaHQgaWYgd2UgY2FuIGdldCBpdCBmcm9tIHN0eWxlXG4gIHZhciBzdHlsZVdpZHRoID0gZ2V0U3R5bGVTaXplKCBzdHlsZS53aWR0aCApO1xuICBpZiAoIHN0eWxlV2lkdGggIT09IGZhbHNlICkge1xuICAgIHNpemUud2lkdGggPSBzdHlsZVdpZHRoICtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIGFuZCBib3JkZXIgdW5sZXNzIGl0J3MgYWxyZWFkeSBpbmNsdWRpbmcgaXRcbiAgICAgICggaXNCb3JkZXJCb3hTaXplT3V0ZXIgPyAwIDogcGFkZGluZ1dpZHRoICsgYm9yZGVyV2lkdGggKTtcbiAgfVxuXG4gIHZhciBzdHlsZUhlaWdodCA9IGdldFN0eWxlU2l6ZSggc3R5bGUuaGVpZ2h0ICk7XG4gIGlmICggc3R5bGVIZWlnaHQgIT09IGZhbHNlICkge1xuICAgIHNpemUuaGVpZ2h0ID0gc3R5bGVIZWlnaHQgK1xuICAgICAgLy8gYWRkIHBhZGRpbmcgYW5kIGJvcmRlciB1bmxlc3MgaXQncyBhbHJlYWR5IGluY2x1ZGluZyBpdFxuICAgICAgKCBpc0JvcmRlckJveFNpemVPdXRlciA/IDAgOiBwYWRkaW5nSGVpZ2h0ICsgYm9yZGVySGVpZ2h0ICk7XG4gIH1cblxuICBzaXplLmlubmVyV2lkdGggPSBzaXplLndpZHRoIC0gKCBwYWRkaW5nV2lkdGggKyBib3JkZXJXaWR0aCApO1xuICBzaXplLmlubmVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgLSAoIHBhZGRpbmdIZWlnaHQgKyBib3JkZXJIZWlnaHQgKTtcblxuICBzaXplLm91dGVyV2lkdGggPSBzaXplLndpZHRoICsgbWFyZ2luV2lkdGg7XG4gIHNpemUub3V0ZXJIZWlnaHQgPSBzaXplLmhlaWdodCArIG1hcmdpbkhlaWdodDtcblxuICByZXR1cm4gc2l6ZTtcbn1cblxucmV0dXJuIGdldFNpemU7XG5cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZ2V0LXNpemUvZ2V0LXNpemUuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2dldC1zaXplL2dldC1zaXplLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qIVxuICogVW5pZHJhZ2dlciB2Mi4zLjBcbiAqIERyYWdnYWJsZSBiYXNlIGNsYXNzXG4gKiBNSVQgbGljZW5zZVxuICovXG5cbi8qanNoaW50IGJyb3dzZXI6IHRydWUsIHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKmpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFscyBkZWZpbmUsIG1vZHVsZSwgcmVxdWlyZSAqL1xuXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAndW5pcG9pbnRlci91bmlwb2ludGVyJ1xuICAgIF0sIGZ1bmN0aW9uKCBVbmlwb2ludGVyICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgVW5pcG9pbnRlciApO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xuICAgIC8vIENvbW1vbkpTXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KFxuICAgICAgd2luZG93LFxuICAgICAgcmVxdWlyZSgndW5pcG9pbnRlcicpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBicm93c2VyIGdsb2JhbFxuICAgIHdpbmRvdy5VbmlkcmFnZ2VyID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHdpbmRvdy5Vbmlwb2ludGVyXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgVW5pcG9pbnRlciApIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBVbmlkcmFnZ2VyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbmZ1bmN0aW9uIFVuaWRyYWdnZXIoKSB7fVxuXG4vLyBpbmhlcml0IFVuaXBvaW50ZXIgJiBFdkVtaXR0ZXJcbnZhciBwcm90byA9IFVuaWRyYWdnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVW5pcG9pbnRlci5wcm90b3R5cGUgKTtcblxuLy8gLS0tLS0gYmluZCBzdGFydCAtLS0tLSAvL1xuXG5wcm90by5iaW5kSGFuZGxlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9iaW5kSGFuZGxlcyggdHJ1ZSApO1xufTtcblxucHJvdG8udW5iaW5kSGFuZGxlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9iaW5kSGFuZGxlcyggZmFsc2UgKTtcbn07XG5cbi8qKlxuICogQWRkIG9yIHJlbW92ZSBzdGFydCBldmVudFxuICogQHBhcmFtIHtCb29sZWFufSBpc0FkZFxuICovXG5wcm90by5fYmluZEhhbmRsZXMgPSBmdW5jdGlvbiggaXNBZGQgKSB7XG4gIC8vIG11bmdlIGlzQWRkLCBkZWZhdWx0IHRvIHRydWVcbiAgaXNBZGQgPSBpc0FkZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGlzQWRkO1xuICAvLyBiaW5kIGVhY2ggaGFuZGxlXG4gIHZhciBiaW5kTWV0aG9kID0gaXNBZGQgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gIHZhciB0b3VjaEFjdGlvbiA9IGlzQWRkID8gdGhpcy5fdG91Y2hBY3Rpb25WYWx1ZSA6ICcnO1xuICBmb3IgKCB2YXIgaT0wOyBpIDwgdGhpcy5oYW5kbGVzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciBoYW5kbGUgPSB0aGlzLmhhbmRsZXNbaV07XG4gICAgdGhpcy5fYmluZFN0YXJ0RXZlbnQoIGhhbmRsZSwgaXNBZGQgKTtcbiAgICBoYW5kbGVbIGJpbmRNZXRob2QgXSggJ2NsaWNrJywgdGhpcyApO1xuICAgIC8vIHRvdWNoLWFjdGlvbjogbm9uZSB0byBvdmVycmlkZSBicm93c2VyIHRvdWNoIGdlc3R1cmVzLiBtZXRhZml6enkvZmxpY2tpdHkjNTQwXG4gICAgaWYgKCB3aW5kb3cuUG9pbnRlckV2ZW50ICkge1xuICAgICAgaGFuZGxlLnN0eWxlLnRvdWNoQWN0aW9uID0gdG91Y2hBY3Rpb247XG4gICAgfVxuICB9XG59O1xuXG4vLyBwcm90b3R5cGUgc28gaXQgY2FuIGJlIG92ZXJ3cml0ZWFibGUgYnkgRmxpY2tpdHlcbnByb3RvLl90b3VjaEFjdGlvblZhbHVlID0gJ25vbmUnO1xuXG4vLyAtLS0tLSBzdGFydCBldmVudCAtLS0tLSAvL1xuXG4vKipcbiAqIHBvaW50ZXIgc3RhcnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLnBvaW50ZXJEb3duID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB2YXIgaXNPa2F5ID0gdGhpcy5va2F5UG9pbnRlckRvd24oIGV2ZW50ICk7XG4gIGlmICggIWlzT2theSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gdHJhY2sgc3RhcnQgZXZlbnQgcG9zaXRpb25cbiAgdGhpcy5wb2ludGVyRG93blBvaW50ZXIgPSBwb2ludGVyO1xuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHRoaXMucG9pbnRlckRvd25CbHVyKCk7XG4gIC8vIGJpbmQgbW92ZSBhbmQgZW5kIGV2ZW50c1xuICB0aGlzLl9iaW5kUG9zdFN0YXJ0RXZlbnRzKCBldmVudCApO1xuICB0aGlzLmVtaXRFdmVudCggJ3BvaW50ZXJEb3duJywgWyBldmVudCwgcG9pbnRlciBdICk7XG59O1xuXG4vLyBub2RlcyB0aGF0IGhhdmUgdGV4dCBmaWVsZHNcbnZhciBjdXJzb3JOb2RlcyA9IHtcbiAgVEVYVEFSRUE6IHRydWUsXG4gIElOUFVUOiB0cnVlLFxuICBTRUxFQ1Q6IHRydWUsXG4gIE9QVElPTjogdHJ1ZSxcbn07XG5cbi8vIGlucHV0IHR5cGVzIHRoYXQgZG8gbm90IGhhdmUgdGV4dCBmaWVsZHNcbnZhciBjbGlja1R5cGVzID0ge1xuICByYWRpbzogdHJ1ZSxcbiAgY2hlY2tib3g6IHRydWUsXG4gIGJ1dHRvbjogdHJ1ZSxcbiAgc3VibWl0OiB0cnVlLFxuICBpbWFnZTogdHJ1ZSxcbiAgZmlsZTogdHJ1ZSxcbn07XG5cbi8vIGRpc21pc3MgaW5wdXRzIHdpdGggdGV4dCBmaWVsZHMuIGZsaWNraXR5IzQwMywgZmxpY2tpdHkjNDA0XG5wcm90by5va2F5UG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciBpc0N1cnNvck5vZGUgPSBjdXJzb3JOb2Rlc1sgZXZlbnQudGFyZ2V0Lm5vZGVOYW1lIF07XG4gIHZhciBpc0NsaWNrVHlwZSA9IGNsaWNrVHlwZXNbIGV2ZW50LnRhcmdldC50eXBlIF07XG4gIHZhciBpc09rYXkgPSAhaXNDdXJzb3JOb2RlIHx8IGlzQ2xpY2tUeXBlO1xuICBpZiAoICFpc09rYXkgKSB7XG4gICAgdGhpcy5fcG9pbnRlclJlc2V0KCk7XG4gIH1cbiAgcmV0dXJuIGlzT2theTtcbn07XG5cbi8vIGtsdWRnZSB0byBibHVyIHByZXZpb3VzbHkgZm9jdXNlZCBpbnB1dFxucHJvdG8ucG9pbnRlckRvd25CbHVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBmb2N1c2VkID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgLy8gZG8gbm90IGJsdXIgYm9keSBmb3IgSUUxMCwgbWV0YWZpenp5L2ZsaWNraXR5IzExN1xuICB2YXIgY2FuQmx1ciA9IGZvY3VzZWQgJiYgZm9jdXNlZC5ibHVyICYmIGZvY3VzZWQgIT0gZG9jdW1lbnQuYm9keTtcbiAgaWYgKCBjYW5CbHVyICkge1xuICAgIGZvY3VzZWQuYmx1cigpO1xuICB9XG59O1xuXG4vLyAtLS0tLSBtb3ZlIGV2ZW50IC0tLS0tIC8vXG5cbi8qKlxuICogZHJhZyBtb3ZlXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICovXG5wcm90by5wb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdmFyIG1vdmVWZWN0b3IgPSB0aGlzLl9kcmFnUG9pbnRlck1vdmUoIGV2ZW50LCBwb2ludGVyICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlck1vdmUnLCBbIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yIF0gKTtcbiAgdGhpcy5fZHJhZ01vdmUoIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICk7XG59O1xuXG4vLyBiYXNlIHBvaW50ZXIgbW92ZSBsb2dpY1xucHJvdG8uX2RyYWdQb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdmFyIG1vdmVWZWN0b3IgPSB7XG4gICAgeDogcG9pbnRlci5wYWdlWCAtIHRoaXMucG9pbnRlckRvd25Qb2ludGVyLnBhZ2VYLFxuICAgIHk6IHBvaW50ZXIucGFnZVkgLSB0aGlzLnBvaW50ZXJEb3duUG9pbnRlci5wYWdlWVxuICB9O1xuICAvLyBzdGFydCBkcmFnIGlmIHBvaW50ZXIgaGFzIG1vdmVkIGZhciBlbm91Z2ggdG8gc3RhcnQgZHJhZ1xuICBpZiAoICF0aGlzLmlzRHJhZ2dpbmcgJiYgdGhpcy5oYXNEcmFnU3RhcnRlZCggbW92ZVZlY3RvciApICkge1xuICAgIHRoaXMuX2RyYWdTdGFydCggZXZlbnQsIHBvaW50ZXIgKTtcbiAgfVxuICByZXR1cm4gbW92ZVZlY3Rvcjtcbn07XG5cbi8vIGNvbmRpdGlvbiBpZiBwb2ludGVyIGhhcyBtb3ZlZCBmYXIgZW5vdWdoIHRvIHN0YXJ0IGRyYWdcbnByb3RvLmhhc0RyYWdTdGFydGVkID0gZnVuY3Rpb24oIG1vdmVWZWN0b3IgKSB7XG4gIHJldHVybiBNYXRoLmFicyggbW92ZVZlY3Rvci54ICkgPiAzIHx8IE1hdGguYWJzKCBtb3ZlVmVjdG9yLnkgKSA+IDM7XG59O1xuXG4vLyAtLS0tLSBlbmQgZXZlbnQgLS0tLS0gLy9cblxuLyoqXG4gKiBwb2ludGVyIHVwXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICovXG5wcm90by5wb2ludGVyVXAgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlclVwJywgWyBldmVudCwgcG9pbnRlciBdICk7XG4gIHRoaXMuX2RyYWdQb2ludGVyVXAoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG5wcm90by5fZHJhZ1BvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgaWYgKCB0aGlzLmlzRHJhZ2dpbmcgKSB7XG4gICAgdGhpcy5fZHJhZ0VuZCggZXZlbnQsIHBvaW50ZXIgKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBwb2ludGVyIGRpZG4ndCBtb3ZlIGVub3VnaCBmb3IgZHJhZyB0byBzdGFydFxuICAgIHRoaXMuX3N0YXRpY0NsaWNrKCBldmVudCwgcG9pbnRlciApO1xuICB9XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkcmFnIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vXG5cbi8vIGRyYWdTdGFydFxucHJvdG8uX2RyYWdTdGFydCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgLy8gcHJldmVudCBjbGlja3NcbiAgdGhpcy5pc1ByZXZlbnRpbmdDbGlja3MgPSB0cnVlO1xuICB0aGlzLmRyYWdTdGFydCggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbnByb3RvLmRyYWdTdGFydCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdkcmFnU3RhcnQnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIGRyYWdNb3ZlXG5wcm90by5fZHJhZ01vdmUgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgKSB7XG4gIC8vIGRvIG5vdCBkcmFnIGlmIG5vdCBkcmFnZ2luZyB5ZXRcbiAgaWYgKCAhdGhpcy5pc0RyYWdnaW5nICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRoaXMuZHJhZ01vdmUoIGV2ZW50LCBwb2ludGVyLCBtb3ZlVmVjdG9yICk7XG59O1xuXG5wcm90by5kcmFnTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciwgbW92ZVZlY3RvciApIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdGhpcy5lbWl0RXZlbnQoICdkcmFnTW92ZScsIFsgZXZlbnQsIHBvaW50ZXIsIG1vdmVWZWN0b3IgXSApO1xufTtcblxuLy8gZHJhZ0VuZFxucHJvdG8uX2RyYWdFbmQgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIC8vIHNldCBmbGFnc1xuICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgLy8gcmUtZW5hYmxlIGNsaWNraW5nIGFzeW5jXG4gIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzLmlzUHJldmVudGluZ0NsaWNrcztcbiAgfS5iaW5kKCB0aGlzICkgKTtcblxuICB0aGlzLmRyYWdFbmQoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG5wcm90by5kcmFnRW5kID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ2RyYWdFbmQnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIG9uY2xpY2sgLS0tLS0gLy9cblxuLy8gaGFuZGxlIGFsbCBjbGlja3MgYW5kIHByZXZlbnQgY2xpY2tzIHdoZW4gZHJhZ2dpbmdcbnByb3RvLm9uY2xpY2sgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggdGhpcy5pc1ByZXZlbnRpbmdDbGlja3MgKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxufTtcblxuLy8gLS0tLS0gc3RhdGljQ2xpY2sgLS0tLS0gLy9cblxuLy8gdHJpZ2dlcmVkIGFmdGVyIHBvaW50ZXIgZG93biAmIHVwIHdpdGggbm8vdGlueSBtb3ZlbWVudFxucHJvdG8uX3N0YXRpY0NsaWNrID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICAvLyBpZ25vcmUgZW11bGF0ZWQgbW91c2UgdXAgY2xpY2tzXG4gIGlmICggdGhpcy5pc0lnbm9yaW5nTW91c2VVcCAmJiBldmVudC50eXBlID09ICdtb3VzZXVwJyApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLnN0YXRpY0NsaWNrKCBldmVudCwgcG9pbnRlciApO1xuXG4gIC8vIHNldCBmbGFnIGZvciBlbXVsYXRlZCBjbGlja3MgMzAwbXMgYWZ0ZXIgdG91Y2hlbmRcbiAgaWYgKCBldmVudC50eXBlICE9ICdtb3VzZXVwJyApIHtcbiAgICB0aGlzLmlzSWdub3JpbmdNb3VzZVVwID0gdHJ1ZTtcbiAgICAvLyByZXNldCBmbGFnIGFmdGVyIDMwMG1zXG4gICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBkZWxldGUgdGhpcy5pc0lnbm9yaW5nTW91c2VVcDtcbiAgICB9LmJpbmQoIHRoaXMgKSwgNDAwICk7XG4gIH1cbn07XG5cbnByb3RvLnN0YXRpY0NsaWNrID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ3N0YXRpY0NsaWNrJywgWyBldmVudCwgcG9pbnRlciBdICk7XG59O1xuXG4vLyAtLS0tLSB1dGlscyAtLS0tLSAvL1xuXG5VbmlkcmFnZ2VyLmdldFBvaW50ZXJQb2ludCA9IFVuaXBvaW50ZXIuZ2V0UG9pbnRlclBvaW50O1xuXG4vLyAtLS0tLSAgLS0tLS0gLy9cblxucmV0dXJuIFVuaWRyYWdnZXI7XG5cbn0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3VuaWRyYWdnZXIvdW5pZHJhZ2dlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdW5pZHJhZ2dlci91bmlkcmFnZ2VyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qIVxuICogVW5pcG9pbnRlciB2Mi4zLjBcbiAqIGJhc2UgY2xhc3MgZm9yIGRvaW5nIG9uZSB0aGluZyB3aXRoIHBvaW50ZXIgZXZlbnRcbiAqIE1JVCBsaWNlbnNlXG4gKi9cblxuLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgdW5kZWY6IHRydWUsIHVudXNlZDogdHJ1ZSwgc3RyaWN0OiB0cnVlICovXG5cbiggZnVuY3Rpb24oIHdpbmRvdywgZmFjdG9yeSApIHtcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qZ2xvYmFsIGRlZmluZSwgbW9kdWxlLCByZXF1aXJlICovXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKCBbXG4gICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJ1xuICAgIF0sIGZ1bmN0aW9uKCBFdkVtaXR0ZXIgKSB7XG4gICAgICByZXR1cm4gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KU1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcbiAgICAgIHdpbmRvdyxcbiAgICAgIHJlcXVpcmUoJ2V2LWVtaXR0ZXInKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgLy8gYnJvd3NlciBnbG9iYWxcbiAgICB3aW5kb3cuVW5pcG9pbnRlciA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyXG4gICAgKTtcbiAgfVxuXG59KCB3aW5kb3csIGZ1bmN0aW9uIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyICkge1xuXG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBVbmlwb2ludGVyKCkge31cblxuLy8gaW5oZXJpdCBFdkVtaXR0ZXJcbnZhciBwcm90byA9IFVuaXBvaW50ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5wcm90by5iaW5kU3RhcnRFdmVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB0aGlzLl9iaW5kU3RhcnRFdmVudCggZWxlbSwgdHJ1ZSApO1xufTtcblxucHJvdG8udW5iaW5kU3RhcnRFdmVudCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB0aGlzLl9iaW5kU3RhcnRFdmVudCggZWxlbSwgZmFsc2UgKTtcbn07XG5cbi8qKlxuICogQWRkIG9yIHJlbW92ZSBzdGFydCBldmVudFxuICogQHBhcmFtIHtCb29sZWFufSBpc0FkZCAtIHJlbW92ZSBpZiBmYWxzZXlcbiAqL1xucHJvdG8uX2JpbmRTdGFydEV2ZW50ID0gZnVuY3Rpb24oIGVsZW0sIGlzQWRkICkge1xuICAvLyBtdW5nZSBpc0FkZCwgZGVmYXVsdCB0byB0cnVlXG4gIGlzQWRkID0gaXNBZGQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBpc0FkZDtcbiAgdmFyIGJpbmRNZXRob2QgPSBpc0FkZCA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcblxuICAvLyBkZWZhdWx0IHRvIG1vdXNlIGV2ZW50c1xuICB2YXIgc3RhcnRFdmVudCA9ICdtb3VzZWRvd24nO1xuICBpZiAoIHdpbmRvdy5Qb2ludGVyRXZlbnQgKSB7XG4gICAgLy8gUG9pbnRlciBFdmVudHNcbiAgICBzdGFydEV2ZW50ID0gJ3BvaW50ZXJkb3duJztcbiAgfSBlbHNlIGlmICggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICkge1xuICAgIC8vIFRvdWNoIEV2ZW50cy4gaU9TIFNhZmFyaVxuICAgIHN0YXJ0RXZlbnQgPSAndG91Y2hzdGFydCc7XG4gIH1cbiAgZWxlbVsgYmluZE1ldGhvZCBdKCBzdGFydEV2ZW50LCB0aGlzICk7XG59O1xuXG4vLyB0cmlnZ2VyIGhhbmRsZXIgbWV0aG9kcyBmb3IgZXZlbnRzXG5wcm90by5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdmFyIG1ldGhvZCA9ICdvbicgKyBldmVudC50eXBlO1xuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xuICAgIHRoaXNbIG1ldGhvZCBdKCBldmVudCApO1xuICB9XG59O1xuXG4vLyByZXR1cm5zIHRoZSB0b3VjaCB0aGF0IHdlJ3JlIGtlZXBpbmcgdHJhY2sgb2ZcbnByb3RvLmdldFRvdWNoID0gZnVuY3Rpb24oIHRvdWNoZXMgKSB7XG4gIGZvciAoIHZhciBpPTA7IGkgPCB0b3VjaGVzLmxlbmd0aDsgaSsrICkge1xuICAgIHZhciB0b3VjaCA9IHRvdWNoZXNbaV07XG4gICAgaWYgKCB0b3VjaC5pZGVudGlmaWVyID09IHRoaXMucG9pbnRlcklkZW50aWZpZXIgKSB7XG4gICAgICByZXR1cm4gdG91Y2g7XG4gICAgfVxuICB9XG59O1xuXG4vLyAtLS0tLSBzdGFydCBldmVudCAtLS0tLSAvL1xuXG5wcm90by5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgLy8gZGlzbWlzcyBjbGlja3MgZnJvbSByaWdodCBvciBtaWRkbGUgYnV0dG9uc1xuICB2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuICBpZiAoIGJ1dHRvbiAmJiAoIGJ1dHRvbiAhPT0gMCAmJiBidXR0b24gIT09IDEgKSApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5fcG9pbnRlckRvd24oIGV2ZW50LCBldmVudCApO1xufTtcblxucHJvdG8ub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyRG93biggZXZlbnQsIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdICk7XG59O1xuXG5wcm90by5vbnBvaW50ZXJkb3duID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyRG93biggZXZlbnQsIGV2ZW50ICk7XG59O1xuXG4vKipcbiAqIHBvaW50ZXIgc3RhcnRcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKi9cbnByb3RvLl9wb2ludGVyRG93biA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgLy8gZGlzbWlzcyByaWdodCBjbGljayBhbmQgb3RoZXIgcG9pbnRlcnNcbiAgLy8gYnV0dG9uID0gMCBpcyBva2F5LCAxLTQgbm90XG4gIGlmICggZXZlbnQuYnV0dG9uIHx8IHRoaXMuaXNQb2ludGVyRG93biApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmlzUG9pbnRlckRvd24gPSB0cnVlO1xuICAvLyBzYXZlIHBvaW50ZXIgaWRlbnRpZmllciB0byBtYXRjaCB1cCB0b3VjaCBldmVudHNcbiAgdGhpcy5wb2ludGVySWRlbnRpZmllciA9IHBvaW50ZXIucG9pbnRlcklkICE9PSB1bmRlZmluZWQgP1xuICAgIC8vIHBvaW50ZXJJZCBmb3IgcG9pbnRlciBldmVudHMsIHRvdWNoLmluZGVudGlmaWVyIGZvciB0b3VjaCBldmVudHNcbiAgICBwb2ludGVyLnBvaW50ZXJJZCA6IHBvaW50ZXIuaWRlbnRpZmllcjtcblxuICB0aGlzLnBvaW50ZXJEb3duKCBldmVudCwgcG9pbnRlciApO1xufTtcblxucHJvdG8ucG9pbnRlckRvd24gPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuX2JpbmRQb3N0U3RhcnRFdmVudHMoIGV2ZW50ICk7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlckRvd24nLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIGhhc2ggb2YgZXZlbnRzIHRvIGJlIGJvdW5kIGFmdGVyIHN0YXJ0IGV2ZW50XG52YXIgcG9zdFN0YXJ0RXZlbnRzID0ge1xuICBtb3VzZWRvd246IFsgJ21vdXNlbW92ZScsICdtb3VzZXVwJyBdLFxuICB0b3VjaHN0YXJ0OiBbICd0b3VjaG1vdmUnLCAndG91Y2hlbmQnLCAndG91Y2hjYW5jZWwnIF0sXG4gIHBvaW50ZXJkb3duOiBbICdwb2ludGVybW92ZScsICdwb2ludGVydXAnLCAncG9pbnRlcmNhbmNlbCcgXSxcbn07XG5cbnByb3RvLl9iaW5kUG9zdFN0YXJ0RXZlbnRzID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoICFldmVudCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZ2V0IHByb3BlciBldmVudHMgdG8gbWF0Y2ggc3RhcnQgZXZlbnRcbiAgdmFyIGV2ZW50cyA9IHBvc3RTdGFydEV2ZW50c1sgZXZlbnQudHlwZSBdO1xuICAvLyBiaW5kIGV2ZW50cyB0byBub2RlXG4gIGV2ZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xuICAvLyBzYXZlIHRoZXNlIGFyZ3VtZW50c1xuICB0aGlzLl9ib3VuZFBvaW50ZXJFdmVudHMgPSBldmVudHM7XG59O1xuXG5wcm90by5fdW5iaW5kUG9zdFN0YXJ0RXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIC8vIGNoZWNrIGZvciBfYm91bmRFdmVudHMsIGluIGNhc2UgZHJhZ0VuZCB0cmlnZ2VyZWQgdHdpY2UgKG9sZCBJRTggYnVnKVxuICBpZiAoICF0aGlzLl9ib3VuZFBvaW50ZXJFdmVudHMgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuX2JvdW5kUG9pbnRlckV2ZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIHRoaXMgKTtcbiAgfSwgdGhpcyApO1xuXG4gIGRlbGV0ZSB0aGlzLl9ib3VuZFBvaW50ZXJFdmVudHM7XG59O1xuXG4vLyAtLS0tLSBtb3ZlIGV2ZW50IC0tLS0tIC8vXG5cbnByb3RvLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB0aGlzLl9wb2ludGVyTW92ZSggZXZlbnQsIGV2ZW50ICk7XG59O1xuXG5wcm90by5vbnBvaW50ZXJtb3ZlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoIGV2ZW50LnBvaW50ZXJJZCA9PSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyICkge1xuICAgIHRoaXMuX3BvaW50ZXJNb3ZlKCBldmVudCwgZXZlbnQgKTtcbiAgfVxufTtcblxucHJvdG8ub250b3VjaG1vdmUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goIGV2ZW50LmNoYW5nZWRUb3VjaGVzICk7XG4gIGlmICggdG91Y2ggKSB7XG4gICAgdGhpcy5fcG9pbnRlck1vdmUoIGV2ZW50LCB0b3VjaCApO1xuICB9XG59O1xuXG4vKipcbiAqIHBvaW50ZXIgbW92ZVxuICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RXZlbnQgb3IgVG91Y2h9IHBvaW50ZXJcbiAqIEBwcml2YXRlXG4gKi9cbnByb3RvLl9wb2ludGVyTW92ZSA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5wb2ludGVyTW92ZSggZXZlbnQsIHBvaW50ZXIgKTtcbn07XG5cbi8vIHB1YmxpY1xucHJvdG8ucG9pbnRlck1vdmUgPSBmdW5jdGlvbiggZXZlbnQsIHBvaW50ZXIgKSB7XG4gIHRoaXMuZW1pdEV2ZW50KCAncG9pbnRlck1vdmUnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIGVuZCBldmVudCAtLS0tLSAvL1xuXG5cbnByb3RvLm9ubW91c2V1cCA9IGZ1bmN0aW9uKCBldmVudCApIHtcbiAgdGhpcy5fcG9pbnRlclVwKCBldmVudCwgZXZlbnQgKTtcbn07XG5cbnByb3RvLm9ucG9pbnRlcnVwID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICBpZiAoIGV2ZW50LnBvaW50ZXJJZCA9PSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyICkge1xuICAgIHRoaXMuX3BvaW50ZXJVcCggZXZlbnQsIGV2ZW50ICk7XG4gIH1cbn07XG5cbnByb3RvLm9udG91Y2hlbmQgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goIGV2ZW50LmNoYW5nZWRUb3VjaGVzICk7XG4gIGlmICggdG91Y2ggKSB7XG4gICAgdGhpcy5fcG9pbnRlclVwKCBldmVudCwgdG91Y2ggKTtcbiAgfVxufTtcblxuLyoqXG4gKiBwb2ludGVyIHVwXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtFdmVudCBvciBUb3VjaH0gcG9pbnRlclxuICogQHByaXZhdGVcbiAqL1xucHJvdG8uX3BvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5fcG9pbnRlckRvbmUoKTtcbiAgdGhpcy5wb2ludGVyVXAoIGV2ZW50LCBwb2ludGVyICk7XG59O1xuXG4vLyBwdWJsaWNcbnByb3RvLnBvaW50ZXJVcCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5lbWl0RXZlbnQoICdwb2ludGVyVXAnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tIHBvaW50ZXIgZG9uZSAtLS0tLSAvL1xuXG4vLyB0cmlnZ2VyZWQgb24gcG9pbnRlciB1cCAmIHBvaW50ZXIgY2FuY2VsXG5wcm90by5fcG9pbnRlckRvbmUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fcG9pbnRlclJlc2V0KCk7XG4gIHRoaXMuX3VuYmluZFBvc3RTdGFydEV2ZW50cygpO1xuICB0aGlzLnBvaW50ZXJEb25lKCk7XG59O1xuXG5wcm90by5fcG9pbnRlclJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIC8vIHJlc2V0IHByb3BlcnRpZXNcbiAgdGhpcy5pc1BvaW50ZXJEb3duID0gZmFsc2U7XG4gIGRlbGV0ZSB0aGlzLnBvaW50ZXJJZGVudGlmaWVyO1xufTtcblxucHJvdG8ucG9pbnRlckRvbmUgPSBub29wO1xuXG4vLyAtLS0tLSBwb2ludGVyIGNhbmNlbCAtLS0tLSAvL1xuXG5wcm90by5vbnBvaW50ZXJjYW5jZWwgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIGlmICggZXZlbnQucG9pbnRlcklkID09IHRoaXMucG9pbnRlcklkZW50aWZpZXIgKSB7XG4gICAgdGhpcy5fcG9pbnRlckNhbmNlbCggZXZlbnQsIGV2ZW50ICk7XG4gIH1cbn07XG5cbnByb3RvLm9udG91Y2hjYW5jZWwgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG4gIHZhciB0b3VjaCA9IHRoaXMuZ2V0VG91Y2goIGV2ZW50LmNoYW5nZWRUb3VjaGVzICk7XG4gIGlmICggdG91Y2ggKSB7XG4gICAgdGhpcy5fcG9pbnRlckNhbmNlbCggZXZlbnQsIHRvdWNoICk7XG4gIH1cbn07XG5cbi8qKlxuICogcG9pbnRlciBjYW5jZWxcbiAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gKiBAcGFyYW0ge0V2ZW50IG9yIFRvdWNofSBwb2ludGVyXG4gKiBAcHJpdmF0ZVxuICovXG5wcm90by5fcG9pbnRlckNhbmNlbCA9IGZ1bmN0aW9uKCBldmVudCwgcG9pbnRlciApIHtcbiAgdGhpcy5fcG9pbnRlckRvbmUoKTtcbiAgdGhpcy5wb2ludGVyQ2FuY2VsKCBldmVudCwgcG9pbnRlciApO1xufTtcblxuLy8gcHVibGljXG5wcm90by5wb2ludGVyQ2FuY2VsID0gZnVuY3Rpb24oIGV2ZW50LCBwb2ludGVyICkge1xuICB0aGlzLmVtaXRFdmVudCggJ3BvaW50ZXJDYW5jZWwnLCBbIGV2ZW50LCBwb2ludGVyIF0gKTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG4vLyB1dGlsaXR5IGZ1bmN0aW9uIGZvciBnZXR0aW5nIHgveSBjb29yZHMgZnJvbSBldmVudFxuVW5pcG9pbnRlci5nZXRQb2ludGVyUG9pbnQgPSBmdW5jdGlvbiggcG9pbnRlciApIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBwb2ludGVyLnBhZ2VYLFxuICAgIHk6IHBvaW50ZXIucGFnZVlcbiAgfTtcbn07XG5cbi8vIC0tLS0tICAtLS0tLSAvL1xuXG5yZXR1cm4gVW5pcG9pbnRlcjtcblxufSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdW5pcG9pbnRlci91bmlwb2ludGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy91bmlwb2ludGVyL3VuaXBvaW50ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJhZjhiYzQ4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFmbGlja2l0eS9kaXN0L2ZsaWNraXR5LmNzc1wiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xuZXhwb3J0ICogZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZmxpY2tpdHkudnVlXCJcbmltcG9ydCBfX3Z1ZV9zY3JpcHRfXyBmcm9tIFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dLFxcXCJlczIwMTVcXFwiLFxcXCJzdGFnZS0yXFxcIl0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIixcXFwidHJhbnNmb3JtLWFzeW5jLXRvLWdlbmVyYXRvclxcXCJdLFxcXCJjb21tZW50c1xcXCI6ZmFsc2V9IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9mbGlja2l0eS52dWVcIlxuLyogdGVtcGxhdGUgKi9cbmltcG9ydCBfX3Z1ZV90ZW1wbGF0ZV9fIGZyb20gXCIhIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmFmOGJjNDhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2ZsaWNraXR5LnZ1ZVwiXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJub2RlX21vZHVsZXMvdnVlLWZsaWNraXR5L3NyYy9mbGlja2l0eS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmFmOGJjNDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yYWY4YmM0OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtZmxpY2tpdHkvc3JjL2ZsaWNraXR5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWZsaWNraXR5L3NyYy9mbGlja2l0eS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yYWY4YmM0OFwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJhZjhiYzQ4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm9kZV9tb2R1bGVzL3Z1ZS1mbGlja2l0eS9zcmMvZmxpY2tpdHkudnVlXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleC5qcz97XCJpZFwiOlwiZGF0YS12LTJhZjhiYzQ4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbm9kZV9tb2R1bGVzL3Z1ZS1mbGlja2l0eS9zcmMvZmxpY2tpdHkudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbWFpbi0xXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLiR0KFwieW91dGhcIikpKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS4kdChcImN5YmVyc3BvcnRzX2xlYWd1ZVwiKSkpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZsaWNraXR5XCIsXG4gICAgICAgICAgICB7IHJlZjogXCJmbGlja2l0eVwiLCBhdHRyczogeyBvcHRpb25zOiBfdm0uZmxpY2tpdHlPcHRpb25zIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1jZWxsXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoJy9pbWFnZXMvc2xpZGVyL3NsaWRlXzEucG5nJylcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCc0KPQm9Cs0KLQmNCU0JjQodCm0JjQn9Cb0JjQndCQ0KDQndCr0Jkg0JrQmNCR0JXQoNCh0J/QntCg0KLQmNCS0J3Qq9CZIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0KTQldCh0KLQmNCS0JDQm9CsIFNFQ1RPUiBcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5kYXlzVG8gPiAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbWFpbi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQvdCw0YfQvdC10YLRgdGPINGH0LXRgNC10LcgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgW192bS5fdihfdm0uX3MoX3ZtLmRheXNUbykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg0LTQvdGPIFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImg0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtbWFpbi0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5rLWJ0biBuay1idG4tcm91bmRlZCBuay1idG4tY29sb3ItbWFpbi0xIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwicmVnaXN0ZXJcIiB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtY2VsbFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IFwidXJsKCcvaW1hZ2VzL3NsaWRlci9zbGlkZV8yLnBuZycpXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQr9GA0LrQvtC1INGB0L7QsdGL0YLQuNC1INGBINC70YPRh9GI0LjQvNC4INC60L7QvNCw0L3QtNCw0LzQuCBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDQvNC40YDQsCDQuCDQvtCz0YDQvtC80L3Ri9C80Lgg0L/RgNC40LfQvtCy0YvQvNC4XCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF5c1RvID4gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW1haW4tMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcItCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0L3QsNGH0L3QtdGC0YHRjyDRh9C10YDQtdC3IFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXlzVG8pKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiINC00L3RjyBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LW1haW4tMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuay1idG4gbmstYnRuLXJvdW5kZWQgbmstYnRuLWNvbG9yLW1haW4tMSB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInJlZ2lzdGVyXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0YPQudGC0LXRgdGMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1jZWxsXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtaW1hZ2VcIjogXCJ1cmwoJy9pbWFnZXMvc2xpZGVyL3NsaWRlXzMucG5nJylcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwi0JLQvtC30LzQvtC20L3QvtGB0YLRjCDQstGL0LjQs9GA0LDRgtGMINCw0LLRgtC+0LzQvtCx0LjQu9GMXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmRheXNUbyA+IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1tYWluLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC90LDRh9C90LXRgtGB0Y8g0YfQtdGA0LXQtyBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF5c1RvKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDQtNC90Y8gXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaDRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1tYWluLTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmstYnRuIG5rLWJ0bi1yb3VuZGVkIG5rLWJ0bi1jb2xvci1tYWluLTEgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJyZWdpc3RlclwiIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNGD0LnRgtC10YHRjFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZ2FwLTJcIiB9KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHZlcnRpY2FsLWdhcFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS0xXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS1pY29uXCIgfSxcbiAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ1c2Vyc1wiIH0gfSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWZlYXR1cmUtY29udFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJuay1mZWF0dXJlLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jb3VudFRlYW1zKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJuay1mZWF0dXJlLXRpdGxlIHRleHQtbWFpbi0xXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS4kdChcInRlYW1zXCIpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS0xXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS1pY29uXCIgfSxcbiAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJnYW1lcGFkXCIgfSB9KV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS1jb250XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWZlYXR1cmUtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvdW50UGxheWVycykpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS10aXRsZSB0ZXh0LW1haW4tMVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJwbGF5ZXJzXCIpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS0xXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS1pY29uXCIgfSxcbiAgICAgICAgICAgIFtfYyhcImZhc1wiLCB7IGF0dHJzOiB7IGljb246IFwidHJvcGh5XCIgfSB9KV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS1jb250XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcIm5rLWZlYXR1cmUtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvdW50U2Nob29scykpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwibmstZmVhdHVyZS10aXRsZSB0ZXh0LW1haW4tMVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uJHQoXCJ0b3VybmFtZW50c1wiKSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuay1nYXAtMlwiIH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZTAyYjdkNVwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVlMDJiN2Q1XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXguanM/e1wiaWRcIjpcImRhdGEtdi01ZTAyYjdkNVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvd2VsY29tZS52dWVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYWY4YmM0OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi9mbGlja2l0eS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMGM1YzMzYjJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yYWY4YmM0OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi9mbGlja2l0eS5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJhZjhiYzQ4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL2ZsaWNraXR5LmNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYWY4YmM0OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9kaXN0L2ZsaWNraXR5LmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yYWY4YmM0OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9mbGlja2l0eS9kaXN0L2ZsaWNraXR5LmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbmV4cG9ydCAqIGZyb20gXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV0sXFxcImVzMjAxNVxcXCIsXFxcInN0YWdlLTJcXFwiXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLFxcXCJ0cmFuc2Zvcm0tYXN5bmMtdG8tZ2VuZXJhdG9yXFxcIl0sXFxcImNvbW1lbnRzXFxcIjpmYWxzZX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi93ZWxjb21lLnZ1ZVwiXG5pbXBvcnQgX192dWVfc2NyaXB0X18gZnJvbSBcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XSxcXFwiZXMyMDE1XFxcIixcXFwic3RhZ2UtMlxcXCJdLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIsXFxcInRyYW5zZm9ybS1hc3luYy10by1nZW5lcmF0b3JcXFwiXSxcXFwiY29tbWVudHNcXFwiOmZhbHNlfSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCJcbi8qIHRlbXBsYXRlICovXG5pbXBvcnQgX192dWVfdGVtcGxhdGVfXyBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZTAyYjdkNVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3dlbGNvbWUudnVlXCJcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZTAyYjdkNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVlMDJiN2Q1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3dlbGNvbWUudnVlXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJzb3VyY2VSb290IjoiIn0=