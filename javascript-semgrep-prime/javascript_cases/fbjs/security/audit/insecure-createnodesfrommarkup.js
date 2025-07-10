// {fact rule=cross-site-scripting@v1.0 defects=0}
function ok1() {
// ok: insecure-createnodesfrommarkup
  createNodesFromMarkup('<div></div', function () {
    handleIt();
  })
}
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=1}
function bad1(input) {
// ruleid: insecure-createnodesfrommarkup
  createNodesFromMarkup('<div>' + input + '</div', function () {
    handleIt();
  })
}
// {/fact}
