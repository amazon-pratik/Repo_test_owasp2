#{fact rule=hardcoded-credentials@v1.0 defects=0}

import boto3
from boto3 import client


# ok:hardcoded-token
key = os.environ.get("ACCESS_KEY_ID")
secret = os.environ.get("SECRET_ACCESS_KEY")
s3 = boto3.resource(
    "s3",
    aws_access_key_id=key,
    aws_secret_access_key=secret,
    region_name="sfo2",
    endpoint_url="https://sfo2.digitaloceanspaces.com",
)

#{/fact}
