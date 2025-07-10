#{fact rule=cross-site-scripting@v1.0 defects=1}

import jinja2

template = jinja2.Template("""
<html>
<body>
{{ body }}
</body>
</html>
""")

# ruleid: direct-use-of-jinja2
rendered = template.render(body=input())


#{/fact}
