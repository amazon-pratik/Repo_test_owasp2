import Sqrl from 'squirrelly';

// {fact rule=cross-site-scripting@v1.0 defects=0}
 function name() {
    var x = '<h1>hell0</h1>'
    // ruleid:handlebars_safestring
    var y = new Handlebars.SafeString(x);
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
    // ruleid:handlebars_safestring
    return new Handlebars.SafeString('<img src="" onload=alert(0)>');
}
// {/fact}


// {fact rule=cross-site-scripting@v1.0 defects=0}
function test2() {
    var x = 'foooo'
    var z = new Handlebars;
    // ruleid:handlebars_safestring
    var xx = z.SafeString(x)
    return xx;
}
// {/fact}


// GQL cant be sure if the variable `source` is not an external input or not. The case is compliant as per GQL and non-compliant. Marking it intentional.
// {ex-fact rule=cross-site-scripting@v1.0 defects=1}
// ruleid:handlebars_noescape
var template = Handlebars.compile(source, { noEscape: true });
var template = "This is {{target}}";
var target = "user's pictures";
// {/ex-fact}

// GQL cant be sure if the variable `template` is not an external input or not. The case is compliant as per GQL and non-compliant. Marking it intentional.
// {ex-fact rule=cross-site-scripting@v1.0 defects=1}
// ruleid:handlebars_noescape
var result = Handlerbars.compile(template, { noEscape: true })({ target: target });
// {/ex-fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
// ruleid:squirrelly_autoescape
Sqrl.autoEscaping(false)
// {/fact}
