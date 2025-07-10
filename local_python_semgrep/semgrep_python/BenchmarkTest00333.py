#{fact rule=sql-injection@v1.0 defects=0}

from django.db.models import (
    CharField, Expression, Field, FloatField, Lookup, TextField, Value,
)
from django.db.models.expressions import CombinedExpression, Func, Subquery
from django.db.models.functions import Cast, Coalesce

# ok: extends-custom-expression
class Star(CharField):
    pass


#{/fact}
