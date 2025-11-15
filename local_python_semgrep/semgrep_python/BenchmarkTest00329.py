#{fact rule=sql-injection@v1.0 defects=1}

from django.db.models import (
    CharField, Expression, Field, FloatField, Lookup, TextField, Value,
)
from django.db.models.expressions import CombinedExpression, Func, Subquery
from django.db.models.functions import Cast, Coalesce


# ruleid: extends-custom-expression
class DateFormat(Func):
    function = 'DATE_FORMAT'
    template = '%(function)s(%(expressions)s, "%(format)s")'

    def __init__(self, *expressions, **extra):
        strf = extra.pop('format', None)
        extra['format'] = strf.replace("%", "%%")
        extra['output_field'] = CharField()
        super(DateFormat, self).__init__(*expressions, **extra)

#{/fact}
