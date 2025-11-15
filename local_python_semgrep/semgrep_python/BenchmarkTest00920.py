#{fact rule=cross-site-scripting@v1.0 defects=1}

def lambda_handler(event, context):
  # ruleid: tainted-html-string
	foobar(f"<div>{event['input']}</div>")

	
#{/fact}
