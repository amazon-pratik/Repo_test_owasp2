#{ex-fact rule=sql-injection@v1.0 defects=1}

# import django
# from django.db.models.aggregates import Aggregate as DjangoAggregate
# from django.db.models.sql.aggregates import Aggregate as DjangoSqlAggregate


# @property
# def has_condition(self):
#         # Warning: bool(QuerySet) will hit the database
#         return self.condition is not None

# def _condition_as_sql(self, qn, connection):
#         '''
#         Return sql for condition.
#         '''
#         def escape(value):
#             if isinstance(value, bool):
#                 value = str(int(value))
#             if isinstance(value, six.string_types):
#                 # Escape params used with LIKE
#                 if '%' in value:
#                     value = value.replace('%', '%%')
#                 # Escape single quotes
#                 if "'" in value:
#                     value = value.replace("'", "''")
#                 # Add single quote to text values
#                 value = "'" + value + "'"
#             return value

#         # ruleid: custom-expression-as-sql
#         sql, param = self.condition.query.where.as_sql(qn, connection)
#         param = map(escape, param)

#         return sql % tuple(param)

#{/ex-fact}
