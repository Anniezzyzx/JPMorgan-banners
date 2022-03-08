(function () {
  'use strict';

  // BannerUtils version 3.2.0
  function getBrowser() {
    // desktop browsers as of 2019-10-04
    var browserslist = ['other', 'blink', 'chrome', 'safari', 'opera', 'ie', 'edge', 'firefox'];
    var browser = 0;

    if ('WebkitAppearance' in document.documentElement.style) {
      browser = 1; // chrome/safari/opera/edge/firefox

      if (/google/i.test(window.navigator.vendor)) browser = 2;
      if (/apple/i.test(window.navigator.vendor)) browser = 3;
      if (!!window.opr && !!window.opr.addons || !!window.opera || / OPR\//.test(window.navigator.userAgent)) browser = 4;
    }

    if (
    /*@cc_on!@*/
    !!document.documentMode) browser = 5; // ie 6-11

    if (browser !== 5 && !!window.StyleMedia) browser = 6;
    if (typeof InstallTrigger !== 'undefined' || 'MozAppearance' in document.documentElement.style) browser = 7;
    return browserslist[browser];
  }
  getBrowser();
  function es5() {
    return parseInt('010', 10) === 10 && function () {
      return !this;
    }() && !!(Date && Date.prototype && Date.prototype.toISOString); // IE10, FF21, CH23, SF6, OP15, iOS7, AN4.4
  }
  ({
    // https://bit.ly/32ZIpgo
    traceOn: window.console.log.bind(window.console, '%s'),
    traceOff: function traceOff() {},
    trace: window.console.log.bind(window.console, '%s'),

    set debug(bool) {
      this._debug = bool;
      bool ? this.trace = this.traceOn : this.trace = this.traceOff;
    },

    get debug() {
      return this._debug;
    }

  });
  function domIds(scope) {
    if (scope === void 0) {
      scope = document;
    }

    var all = scope.getElementsByTagName('*');
    var haveIds = {};
    var i = all.length;

    while (i--) {
      if (all[i].id) {
        var safeId = all[i].id.replace(/-|:|\./g, '_');
        haveIds[safeId] = all[i];
      }
    }

    return haveIds;
  }

  var Banner = {
    init: function init() {
      display();

      function display() {
        // Setup -------------------------------------------------
        var dom = domIds();
        clickThrough();
        es5() ? animation() : dom.backup.classList.add('backup'); // Animations --------------------------------------------

        function animation() {
          var tl = gsap.timeline({
            defaults: {
              ease: 'sine.inOut'
            },
            onComplete: rollover
          });
          tl.from('#txt-wraper-1', .3, {
            y: 20,
            autoAlpha: 0
          }).from('#icon-1-a,#icon-1-b,#icon-1-c,#icon-1-d,#icon-1-e', .6, {
            drawSVG: 0,
            ease: "sine.out"
          }).from('#vector-line', 1, {
            drawSVG: 0,
            ease: "sine.out"
          }, 3.5).to('#lines-wraper,#txt-wraper-1', 1, {
            y: -250,
            ease: "sine.out"
          }, 3.5).from('#txt-wraper-2', 1, {
            y: 250,
            ease: "sine.out"
          }, "-=1").from('#icon-2-a,#icon-3-a,#right-arrow', .6, {
            drawSVG: 0,
            ease: "sine.out"
          }, "-=.4").from('#cta', .3, {
            autoAlpha: 0
          }).from('#vector-line-2', 1, {
            drawSVG: 0
          }, 8).to('#lines-wraper', 1, {
            y: -500,
            ease: "sine.out"
          }, 8).to('#txt-wraper-2', 1, {
            y: -250,
            ease: "sine.out"
          }, 8).from('#txt-wraper-3', 1, {
            y: 250,
            ease: "sine.out"
          }, "-=1").from('#vector-phone', 3, {
            drawSVG: 0,
            ease: "sine.out"
          }, "-=.8").from('#rectangle', .6, {
            drawSVG: 0,
            ease: "sine.out"
          }, "-=2.2");
          dom.ad_content.classList.remove('invisible');
        } // Events ------------------------------------------------


        function rollover() {
          dom.ad_content.addEventListener('mouseenter', function () {// Hover enter code goes here. Please remove this comment.
          });
          dom.ad_content.addEventListener('mouseleave', function () {// Hover out code goes here. Please remove this comment.
          });
        }

        function clickThrough() {
          dom.ad_content.addEventListener('click', function () {
            return window.open(window.clickTag || window.clickTAG);
          });
        }
      }
    }
  };

  window.onload = function () {
    return window.requestAnimationFrame(Banner.init);
  };

}());
