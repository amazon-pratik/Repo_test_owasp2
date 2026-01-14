let data={pName : "Bob", pAge: "35"};
var popup = window.open(/* popup details */);

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=1}
//ruleid:wildcard-postmessage-configuration
popup.postMessage(data, '*');
// {/fact}

// {fact rule=origins-verified-cross-origin-communications@v1.0 defects=1}
//ruleid:wildcard-postmessage-configuration
popup.postMessage( JSON.stringify( data ), '*' );
// {/fact}

//postMessage Safe Usage
popup.postMessage("hello there!", "http://domain.tld");
popup.postMessage( JSON.stringify( data ), 'semgrep.dev/editor');
