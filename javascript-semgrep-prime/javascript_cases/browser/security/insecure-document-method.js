const el = element.innerHTML;

// {fact rule=cross-site-scripting@v1.0 defects=1}
function bad1(userInput) {
// ruleid: insecure-document-method
  el.innerHTML = '<div>' + userInput + '</div>';
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
function bad2(userInput) {
// ruleid: insecure-document-method
  document.body.outerHTML = userInput;
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
function bad3(userInput) {
  const name = '<div>' + userInput + '</div>';
// ruleid: insecure-document-method
  document.write(name);
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
function ok1() {
  const name = "<div>it's ok</div>";
// ok: insecure-document-method
  el.innerHTML = name;
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
function ok2() {
// ok: insecure-document-method
  document.write("<div>it's ok</div>");
}
// {/fact}
