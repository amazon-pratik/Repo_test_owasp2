#{fact rule=cross-site-scripting@v1.0 defects=1}

def lambda_handler(event, context):

	response = {}

	link1 = '<a href="http://external/abc/%s">Check link href</a>'
  # ruleid: tainted-html-string
	response['html1'] = link1 % event['input']

#{/fact}
