const {format} = require('util');

exports.handler = async function (event, context) {
  // {fact rule=cross-site-scripting@v1.0 defects=1}
  // ruleid: tainted-html-string
  await sendThisHtmlSomewhere(`<h1>message: ${event.name}</h1>`)
  // {/fact}
  
  // {fact rule=cross-site-scripting@v1.0 defects=1}
  // ruleid: tainted-html-string
  const htmlResult = "<h1>" + "message: " + event['message'] + "</h1>";
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  let html = "<h1> message"
  // ruleid: tainted-html-string
  html = html.concat(event.message)
  html = html.concat("</h1>")
  doSmth(html)
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  // ruleid: tainted-html-string
  foobar(format('<div>Message: %s</div>', event.body.name))
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  // ok: tainted-html-string
  foobar(format('Message: %s', event.body.name))
  // {/fact}

  // {fact rule=cross-site-scripting@v1.0 defects=0}
  // ok: tainted-html-string
  console.log('<div>Message: %s</div>', event.body.name)
  // {/fact}
  
  // {fact rule=cross-site-scripting@v1.0 defects=0}
  // ok: tainted-html-string
  console.error(`<h1>message: ${event.name}</h1>`)
  // {/fact}

  return { body: htmlResult }
}
