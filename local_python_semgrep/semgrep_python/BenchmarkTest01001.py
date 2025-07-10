#{fact rule=sql-injection@v1.0 defects=0}


# ok: sqlalchemy-sql-injection
def ok1(cls, deployment: "Deployment", token_name: str) -> str:
    query = cls.query(DeploymentPermission).distinct(
        cls.id == DeploymentPermission.token_id,
    )

#{/fact}
