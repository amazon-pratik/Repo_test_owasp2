#{fact rule=autoescape-disabled@v1.0 defects=0}

# cf. https://github.com/PyCQA/bandit/blob/02bad2e42311f420aef52dcd9806d66516ef594d/examples/jinja2_templating.py

import jinja2
from jinja2 import Environment, select_autoescape
templateLoader = jinja2.FileSystemLoader( searchpath="/" )
something = ''

# ok:autoescape-disabled
Environment(loader=templateLoader, load=templateLoader, autoescape=True)


#{/fact}
