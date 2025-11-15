#{fact rule=cross-site-scripting@v1.0 defects=0}

def lambda_handler(event, context):
	html = f"<div>{event['input']}</div>"

	foo = {
		# ok: tainted-html-response
		"data": event['foo']
	}
	bar(foo)

#{/fact}
