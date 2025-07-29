const express = require("express");
const app = express();

(function ($) {

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  function bad1() {
    var content = '<div>' + window.location.hash + '</div>';
    // ruleid: jquery-insecure-method
    $( "div" ).html( content );
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  app.get("/add/:userInput", function (req, res) {
    // ruleid: jquery-insecure-method
    $(req.params.userInput).appendTo( "#foo" );
  });
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  function bad4() {
    // ruleid: jquery-insecure-method
    $('<div>' + window.location.hash + '</div>').insertBefore( ".inner" );
    // ruleid: jquery-insecure-method
    $('.inner').prepend(window.location.hash);
    function test() {
    // ruleid: jquery-insecure-method
      jQuery.globalEval('<div>' + window.location.hash + '</div>', {
        nonce: "nonce-2726c7f26c"
      } );
    }
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  app.get("/add/:userInput", function (req, res) {
    // ruleid: jquery-insecure-method
    $( ".inner" ).wrap( "<div class='new'>" + req.params.userInput + "</div>" );
    // ruleid: jquery-insecure-method
    $( "p" ).wrapAll(req.params.userInput);
  });
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function ok1() {
    const item = '<div></div>';
    // ok: jquery-insecure-method
    $( ".inner" ).wrap(item);
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function ok2(userInput) {
    // ok: jquery-insecure-method
    $( "div" ).html( '<div></div>' );
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function ok3(userInput) {
    jQuery(document).ready(function($){
      // ok: jquery-insecure-method
      $('<input type="checkbox"/>').prependTo('.checklist-box li');
    });
  }
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  function ok4(userInput) {
      // ok: jquery-insecure-method
      var url = this.prependRestapi(userInput);
      fooBar(url);
  }
  // {/fact}

})(jQUery);
