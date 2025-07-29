//{fact rule=improper-input-validation@v1.0 defects=1}

function sanitizeUrl(url) {
    let u = decodeURI(url).trim().toLowerCase();
    if (u.startsWith("javascript:"))
        return "about:blank";
    return url;
}

//{/fact}
