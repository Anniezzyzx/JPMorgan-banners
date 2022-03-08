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
              duration: 1,
              ease: 'circ.inOut'
            }
          });
          tl.from('#txt-1', 0.5, {
            x: '+=20',
            autoAlpha: 0,
            ease: 'circ.out'
          }, '<0.25').from('#icon-1 path', {
            drawSVG: 0
          }, '<50%').from('#union-line path', {
            drawSVG: 0
          }, '>0.75').to('#txt-1', 0.5, {
            x: '-=20',
            autoAlpha: 0,
            ease: 'circ.in'
          }, '<').to('#lines-wrapper', 1, {
            x: '-=210'
          }, '<').from('#icon-2 path', 0.6, {
            drawSVG: 0
          }, '<75%').from('#txt-2', 0.5, {
            x: '+=20',
            autoAlpha: 0,
            ease: 'circ.out'
          }, '<30%').from('#cta', {
            autoAlpha: 0
          }).to('#lines-wrapper', {
            x: '-=215'
          }, '>0.75').from('#union-line-2 path', {
            drawSVG: 0
          }, '<').to('#txt-2', 0.5, {
            x: '-=20',
            autoAlpha: 0,
            ease: 'circ.in'
          }, '<').from('#icon-3 path', 0.6, {
            drawSVG: 0
          }, '<75%').from('#txt-3', 0.5, {
            x: '+=20',
            autoAlpha: 0,
            ease: 'circ.out'
          }, '<40%');
          dom.ad_content.classList.remove('invisible');
        } // Events ------------------------------------------------


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
