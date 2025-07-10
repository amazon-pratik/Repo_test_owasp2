#{fact rule=cross-site-scripting@v1.0 defects=1}

from mako.template import Template
from mako import template
import mako
import jinja2

# ruleid:mako-templates-detected
Template("hello")

#{/fact}
