#{fact rule=hardcoded-credentials@v1.0 defects=1}

import boto3
from boto3 import client

uhoh_key = "AKIAxxxxxxxxxxxxxxxx"
ok_secret = os.environ.get("SECRET_ACCESS_KEY")
# ruleid:hardcoded-token
s3 = boto3.resource(
    "s3",
    aws_access_key_id=uhoh_key,
    aws_secret_access_key=ok_secret,
    region_name="sfo2",
    endpoint_url="https://sfo2.digitaloceanspaces.com",
)

#{/fact}
