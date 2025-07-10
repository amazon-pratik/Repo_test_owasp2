#{fact rule=hardcoded-credentials@v1.0 defects=1}

import boto3
from boto3 import client


ok_key = os.environ.get("ACCESS_KEY_ID")

uhoh_secret = "jWnyxxxxxxxxxxxxxxxxX7ZQxxxxxxxxxxxxxxxx"
# ruleid:hardcoded-token
s3 = boto3.resource(
    "s3",
    aws_access_key_id=ok_key,
    aws_secret_access_key=uhoh_secret,
    region_name="sfo2",
    endpoint_url="https://sfo2.digitaloceanspaces.com",
)

#{/fact}
