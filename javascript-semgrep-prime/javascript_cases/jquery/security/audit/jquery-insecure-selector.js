const express = require("express");
const app = express();

(function ($) {

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function bad1() {
    // ruleid: jquery-insecure-selector
    var item = '.item-' + window.location.hash;
    $(item).css({});
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function bad2() {
    // ruleid: jquery-insecure-selector
    $(location.hash).css('z-index', '99999');
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function bad3() {
    // ruleid: jquery-insecure-selector
    var item = window.location.hash;
    $('.item-' + item).css({});
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function bad4() {
    // ruleid: jquery-insecure-selector
    $('#' + location.hash).css('z-index', '99999');
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  app.get("/add/:userInput", function (req, res) {
    // ruleid: jquery-insecure-selector
    $('#' + req.params.userInput).css('z-index', '99999');
  });
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function ok1() {
    // ok: jquery-insecure-selector
    var item = 'my-selector';
    $('#' + item).css('z-index', '99999');
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function ok2(userInput) {
    // ok: jquery-insecure-selector
    $('#' + somethingElse).css('z-index', '99999');
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function ok3() {
    // ok: jquery-insecure-selector
    $(window).css('z-index', '99999');
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function ok4() {
    // ok: jquery-insecure-selector
    $( "li" ).each(function(index, el) {
        $(el).addClass( "foo" );
    });
  }
  // {/fact}

})(jQUery);


//https://github.com/ebmdatalab/openprescribing/blob/9e511903eb6343f804c4e14cc29103b1056fcead/openprescribing/media/js/src/measures.js
var measures = {
  highlightSelectedMeasure: function(selectedMeasure) {
    if ( ! selectedMeasure || selectedMeasure === '') return;
    var measureId = '#measure_' + selectedMeasure.substring(selectedMeasure.indexOf('#') + 1);
    // ruleid: jquery-insecure-selector
    if ($(measureId).length === 0) return;
    $('#overlay').fadeIn(300);
    // ruleid: jquery-insecure-selector
    $(measureId).css('z-index', '99999');
    $('html, body').animate({
      // ruleid: jquery-insecure-selector
      scrollTop: $(measureId).offset().top,
    }, 1000);
    $('#overlay').on('click', function() {
      $('#overlay').stop().fadeOut(300);
    });
  }
};
