(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _dots = require('./modules/dots');

var _dots2 = _interopRequireDefault(_dots);

var _about_us = require('./modules/about_us');

var _about_us2 = _interopRequireDefault(_about_us);

var _news = require('./modules/news');

var _news2 = _interopRequireDefault(_news);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    _dots2.default.dotsEffect();
    _about_us2.default.aboutUsSlider();
    _news2.default.newsSlider();
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/about_us":2,"./modules/dots":3,"./modules/news":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ABOUT = {
  aboutUsSlider: function aboutUsSlider() {
    var settings = {
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      customPaging: function customPaging() {
        return '<div class="about-us-slider-dots"></div>';
      },
      responsive: [{
        breakpoint: 321,
        settings: {
          arrows: true,
          nextArrow: '\n              <img\n                  class="about-us-slider-arrow-right"\n                  src="assets/images/main/arrow_right.png"\n              />',
          prevArrow: '\n              <img\n                  class="about-us-slider-arrow-left"\n                  src="assets/images/main/arrow_left.png"\n              />'
        }
      }]
    };

    // initialize the slider
    $('.about-us-slider').slick(settings);
  }
};

exports.default = ABOUT;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var DE = {
  dotsEffect: function dotsEffect() {
    var $cnt = $('#home-canvas'),
        cells = createCells();

    $cnt.html(cells);

    function createCells() {
      var width = 10,
          height = 10,
          size = width * height,
          html = '<div class="entry-cells">';

      for (var i = 0; i < size; i++) {
        html += '<div class="cell cell-' + i + '"></div>';
      }

      html += '</div>';

      return html;
    }
  }
};

exports.default = DE;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NEWS = {
  newsSlider: function newsSlider() {
    var settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: '\n        <p class="news-slider-arrow news-slider-arrow-right">\u043F\u0440\u0435\u0434</p>\n      ',
      prevArrow: '\n         <p class="news-slider-arrow news-slider-arrow-left">\u0441\u043B\u0435\u0434</p>\n      ',
      responsive: [{
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: false,
          prevArrow: false
        }
      }, {
        breakpoint: 720,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: false,
          prevArrow: false
        }
      }]
    };

    // initialize the slider
    $('.news-slider').slick(settings);
  }
};

exports.default = NEWS;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvYWJvdXRfdXMuanMiLCJzcmMvanMvbW9kdWxlcy9kb3RzLmpzIiwic3JjL2pzL21vZHVsZXMvbmV3cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxDQUFFLFVBQUMsQ0FBRCxFQUFPO0FBQ1A7O0FBRUE7O0FBQ0EsSUFBRSxZQUFNO0FBQ04sbUJBQUcsVUFBSDtBQUNBLHVCQUFNLGFBQU47QUFDQSxtQkFBSyxVQUFMO0FBQ0QsR0FKRDtBQU1ELENBVkQsRUFVRyxNQVZILEUsQ0FUQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQSxJQUFNLFFBQVE7QUFDWixpQkFBZSx5QkFBVztBQUN4QixRQUFNLFdBQVc7QUFDZixjQUFRLEtBRE87QUFFZixnQkFBVSxJQUZLO0FBR2YsZ0JBQVUsSUFISztBQUlmLHFCQUFlLElBSkE7QUFLZixZQUFNLElBTFM7QUFNZixvQkFBYztBQUFBLGVBQU0sMENBQU47QUFBQSxPQU5DO0FBT2Ysa0JBQVksQ0FDVjtBQUNFLG9CQUFZLEdBRGQ7QUFFRSxrQkFBVTtBQUNSLGtCQUFRLElBREE7QUFFUixnTEFGUTtBQU9SO0FBUFE7QUFGWixPQURVO0FBUEcsS0FBakI7O0FBMkJBO0FBQ0EsTUFBRSxrQkFBRixFQUFzQixLQUF0QixDQUE0QixRQUE1QjtBQUNEO0FBL0JXLENBQWQ7O2tCQWtDZSxLOzs7Ozs7OztBQ2xDZjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxLQUFLO0FBQ1AsY0FBWSxzQkFBVztBQUNyQixRQUFJLE9BQVEsRUFBRSxjQUFGLENBQVo7QUFBQSxRQUNJLFFBQVEsYUFEWjs7QUFHQSxTQUFLLElBQUwsQ0FBVSxLQUFWOztBQUVBLGFBQVMsV0FBVCxHQUF1QjtBQUNyQixVQUFJLFFBQVMsRUFBYjtBQUFBLFVBQ0ksU0FBUyxFQURiO0FBQUEsVUFFSSxPQUFTLFFBQVEsTUFGckI7QUFBQSxVQUdJLE9BQVMsMkJBSGI7O0FBS0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCO0FBQzdCLGdCQUFRLDJCQUEyQixDQUEzQixHQUErQixVQUF2QztBQUNEOztBQUVELGNBQVEsUUFBUjs7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUNGO0FBckJNLENBQVQ7O2tCQXdCZSxFOzs7Ozs7OztBQzVCZixJQUFNLE9BQU87QUFDWCxjQUFZLHNCQUFXO0FBQ3JCLFFBQU0sV0FBVztBQUNmLGdCQUFVLElBREs7QUFFZixvQkFBYyxDQUZDO0FBR2Ysc0JBQWdCLENBSEQ7QUFJZixzSEFKZTtBQU9mLHNIQVBlO0FBVWYsa0JBQVksQ0FDVjtBQUNFLG9CQUFZLElBRGQ7QUFFRSxrQkFBVTtBQUNSLGtCQUFRLEtBREE7QUFFUix3QkFBYyxDQUZOO0FBR1IsMEJBQWdCLENBSFI7QUFJUixxQkFBVyxLQUpIO0FBS1IscUJBQVc7QUFMSDtBQUZaLE9BRFUsRUFVUjtBQUNBLG9CQUFZLEdBRFo7QUFFQSxrQkFBVTtBQUNSLGtCQUFRLEtBREE7QUFFUix3QkFBYyxDQUZOO0FBR1IsMEJBQWdCLENBSFI7QUFJUixxQkFBVyxLQUpIO0FBS1IscUJBQVc7QUFMSDtBQUZWLE9BVlE7QUFWRyxLQUFqQjs7QUFpQ0E7QUFDQSxNQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsUUFBeEI7QUFDRDtBQXJDVSxDQUFiOztrQkF3Q2UsSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxuLy9cbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxuXG5pbXBvcnQgREUgZnJvbSAnLi9tb2R1bGVzL2RvdHMnO1xuaW1wb3J0IEFCT1VUIGZyb20gJy4vbW9kdWxlcy9hYm91dF91cyc7XG5pbXBvcnQgTkVXUyBmcm9tICcuL21vZHVsZXMvbmV3cyc7XG5cbiggKCQpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFdoZW4gRE9NIGlzIHJlYWR5XG4gICQoKCkgPT4ge1xuICAgIERFLmRvdHNFZmZlY3QoKTtcbiAgICBBQk9VVC5hYm91dFVzU2xpZGVyKCk7XG4gICAgTkVXUy5uZXdzU2xpZGVyKCk7XG4gIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiY29uc3QgQUJPVVQgPSB7XG4gIGFib3V0VXNTbGlkZXI6IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNldHRpbmdzID0ge1xuICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgICAgZG90czogdHJ1ZSxcbiAgICAgIGN1c3RvbVBhZ2luZzogKCkgPT4gJzxkaXYgY2xhc3M9XCJhYm91dC11cy1zbGlkZXItZG90c1wiPjwvZGl2PicsXG4gICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBicmVha3BvaW50OiAzMjEsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgIG5leHRBcnJvdzogYFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImFib3V0LXVzLXNsaWRlci1hcnJvdy1yaWdodFwiXG4gICAgICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvaW1hZ2VzL21haW4vYXJyb3dfcmlnaHQucG5nXCJcbiAgICAgICAgICAgICAgLz5gLFxuICAgICAgICAgICAgcHJldkFycm93OiBgXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYWJvdXQtdXMtc2xpZGVyLWFycm93LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgc3JjPVwiYXNzZXRzL2ltYWdlcy9tYWluL2Fycm93X2xlZnQucG5nXCJcbiAgICAgICAgICAgICAgLz5gLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSBzbGlkZXJcbiAgICAkKCcuYWJvdXQtdXMtc2xpZGVyJykuc2xpY2soc2V0dGluZ3MpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBQk9VVDtcbiIsIi8vIFRoaXMgaXMgYW4gZXhhbXBsZXMgb2Ygc2ltcGxlIGV4cG9ydC5cbi8vXG4vLyBZb3UgY2FuIHJlbW92ZSBvciBhZGQgeW91ciBvd24gZnVuY3Rpb24gaW4gdGhpcyBmaWxlLlxuXG52YXIgREUgPSB7XG4gIGRvdHNFZmZlY3Q6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkY250ICA9ICQoJyNob21lLWNhbnZhcycpLFxuICAgICAgICBjZWxscyA9IGNyZWF0ZUNlbGxzKCk7XG5cbiAgICAkY250Lmh0bWwoY2VsbHMpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2VsbHMoKSB7XG4gICAgICB2YXIgd2lkdGggID0gMTAsXG4gICAgICAgICAgaGVpZ2h0ID0gMTAsXG4gICAgICAgICAgc2l6ZSAgID0gd2lkdGggKiBoZWlnaHQsXG4gICAgICAgICAgaHRtbCAgID0gJzxkaXYgY2xhc3M9XCJlbnRyeS1jZWxsc1wiPic7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJjZWxsIGNlbGwtJyArIGkgKyAnXCI+PC9kaXY+JztcbiAgICAgIH1cblxuICAgICAgaHRtbCArPSAnPC9kaXY+JztcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBERTsiLCJjb25zdCBORVdTID0ge1xuICBuZXdzU2xpZGVyOiBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICBuZXh0QXJyb3c6IGBcbiAgICAgICAgPHAgY2xhc3M9XCJuZXdzLXNsaWRlci1hcnJvdyBuZXdzLXNsaWRlci1hcnJvdy1yaWdodFwiPtC/0YDQtdC0PC9wPlxuICAgICAgYCxcbiAgICAgIHByZXZBcnJvdzogYFxuICAgICAgICAgPHAgY2xhc3M9XCJuZXdzLXNsaWRlci1hcnJvdyBuZXdzLXNsaWRlci1hcnJvdy1sZWZ0XCI+0YHQu9C10LQ8L3A+XG4gICAgICBgLFxuICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcbiAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgbmV4dEFycm93OiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZBcnJvdzogZmFsc2UsXG4gICAgICAgICAgfVxuICAgICAgICB9LHtcbiAgICAgICAgICBicmVha3BvaW50OiA3MjAsXG4gICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgIG5leHRBcnJvdzogZmFsc2UsXG4gICAgICAgICAgICBwcmV2QXJyb3c6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICAvLyBpbml0aWFsaXplIHRoZSBzbGlkZXJcbiAgICAkKCcubmV3cy1zbGlkZXInKS5zbGljayhzZXR0aW5ncyk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5FV1M7XG4iXX0=