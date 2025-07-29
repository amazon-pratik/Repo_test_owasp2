//{fact rule=sensitive-information-leak@v1.0 defects=0}

window.parent.postMessage(userName, 'https://lgtm.com');


//{/fact}