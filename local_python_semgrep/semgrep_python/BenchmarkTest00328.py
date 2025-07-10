#{fact rule=sql-injection@v1.0 defects=1}

from django.db.models import (
    CharField, Expression, Field, FloatField, Lookup, TextField, Value,
)
from django.db.models.expressions import CombinedExpression, Func, Subquery
from django.db.models.functions import Cast, Coalesce



# ruleid: extends-custom-expression
class CastToInteger(Func):
    """
    A helper class for casting values to signed integer in database.
    """
    function = 'CAST'
    template = '%(function)s(%(expressions)s as %(integer_type)s)'

    def __init__(self, *expressions, **extra):
        super().__init__(*expressions, **extra)
        self.extra['integer_type'] = 'INTEGER'

    def as_mysql(self, compiler, connection):
        self.extra['integer_type'] = 'SIGNED'
        return super().as_sql(compiler, connection)

#{/fact}
