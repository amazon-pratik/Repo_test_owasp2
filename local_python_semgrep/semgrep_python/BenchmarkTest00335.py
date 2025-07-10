#{fact rule=sql-injection@v1.0 defects=1}

from django.db.models import (
    CharField, Expression, Field, FloatField, Lookup, TextField, Value,
)
from django.db.models.expressions import CombinedExpression, Func, Subquery
from django.db.models.functions import Cast, Coalesce



# ruleid: extends-custom-expression
class Aggregate(Func):
    template = '%(function)s(%(distinct)s%(expressions)s)'
    contains_aggregate = True
    name = None
    filter_template = '%s FILTER (WHERE %%(filter)s)'
    window_compatible = True
    allow_distinct = False

    def __init__(self, *expressions, distinct=False, filter=None, **extra):
        if distinct and not self.allow_distinct:
            raise TypeError("%s does not allow distinct." % self.__class__.__name__)
        self.distinct = distinct
        self.filter = filter
        super().__init__(*expressions, **extra)

#{/fact}
