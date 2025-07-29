// {fact rule=cross-site-scripting@v1.0 defects=1}
// ruleid:dom-based-xss
document.write("<OPTION value=1>"+document.location.href.substring(document.location.href.indexOf("default=")+8)+"</OPTION>");
// {/fact}

// {fact rule=cross-site-scripting@v1.0 defects=0}
// ok:dom-based-xss
document.write("<OPTION value=2>English</OPTION>");
// {/fact}
