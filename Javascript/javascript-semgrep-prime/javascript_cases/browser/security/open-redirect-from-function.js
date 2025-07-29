var hi = new URLSearchParams(window.location.search).get('gamer')

var hi1 = new URLSearchParams(window.location.search)

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
function test1(userInput) {
    //ruleid:js-open-redirect-from-function
    location.href = userInput;
    //ruleid:js-open-redirect-from-function
    location.href = `${userInput}/hi`
}
// {/fact}


// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
function test4(userInput) {
    // ok:js-open-redirect-from-function
    location.href = `https://www.hardcoded.place/${userInput}`
    // ok:js-open-redirect-from-function
    location.href = "https://www.hardcoded.place/" + userInput;
}
// {/fact}
