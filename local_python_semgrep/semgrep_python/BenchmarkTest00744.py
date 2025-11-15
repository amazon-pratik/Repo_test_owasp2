#{ex-fact rule=sql-injection@v1.0 defects=1}


# example = 1
# # ruleid:avoid-query-set-extra
# active_findings = Finding.objects.filter(verified=True, active=True,
#                                       severity__in=('Critical', 'High', 'Medium', 'Low', 'Info')).prefetch_related(
#         'test__engagement__product',
#         'test__engagement__product__prod_type',
#         'test__engagement__risk_acceptance',
#         'risk_acceptance_set',
#         'reporter').extra(
#         select={
#             'ra_count': f'SELECT COUNT(*) FROM dojo_risk_acceptance INNER JOIN '
#                         f'dojo_risk_acceptance_accepted_findings ON '
#                         f'( dojo_risk_acceptance.id = dojo_risk_acceptance_accepted_findings.risk_acceptance_id ) '
#                         f'WHERE dojo_risk_acceptance_accepted_findings.finding_id = {example}',
#         },
#     )

#{/ex-fact}
