const express = require("express");
const app = express();

// {fact rule=cross-site-scripting@v1.0 defects=1}
app.get("/add/:userInput", function (req, res) {
    // ruleid:prohibit-jquery-html
    $( "button.continue" ).html( req.params.userInput );
});
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
function bad2() {
    $.ajax({
        url: "/api/getWeather",
        data: {
            zipcode: 97201
        },
        success: function( result ) {
            // ruleid:prohibit-jquery-html
            $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
        }
    });
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
function ok1() {
    // ok: prohibit-jquery-html
     $( "button.continue" ).text( "Next Step..." );
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
function ok2() {
    $.ajax({
        url: "/api/getWeather",
        data: {
            zipcode: 97201
        },
        success: function( result ) {
            // ok: prohibit-jquery-html
            HtmlUtils.setHtml( "<strong>" + result + "</strong> degrees" );
        }
    });
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
function ok3() {
    // ok: prohibit-jquery-html
    $('.js-piechart-container').html('<canvas class="js-pie-chart" style="width:100%;height:300px;"></canvas>')

}
// {/fact}
