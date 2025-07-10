#{fact rule=cross-site-scripting@v1.0 defects=1}

from django.utils.html import format_html

planet = "world"
markup = "<marquee>" + planet


# ruleid: formathtml-fstring-parameter
print(format_html(f"hello {markup} {{}}", markup))

#{/fact}
