//{fact rule=method-input-validation@v1.0 defects=1}

let regex = new RegExp('(^\s*)my-marker(\s*$)'),
    isMyMarkerText = regex.test(text);


//{/fact}