#{fact rule=cross-site-scripting@v1.0 defects=1}

def lambda_handler(event, context):
	response = {}
	link2 = '<a href="http://external/abc/{}">Check link href</a>'
  # ruleid: tainted-html-string
	response['html3'] = link2.format(event['input'])

	print(f"<div>{event['input']}</div>")

	link_ok = '<a href="http://external/abc/{}">Check link href</a>'
	response['html3'] = link_ok.format("123")

	response['message'] = 'Data: [' + event['input'] + ']'

	result = {
		"statusCode": 200,
		"body": response
	}
	return result

#{/fact}
