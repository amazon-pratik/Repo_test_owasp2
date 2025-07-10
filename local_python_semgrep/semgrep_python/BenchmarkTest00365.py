#{fact rule=hardcoded-credentials@v1.0 defects=1}

import boto3
from boto3 import client


# ruleid:hardcoded-token
boto3.sessions.Session(aws_secret_access_key="jWnyxxxxxxxxxxxxxxxxX7ZQxxxxxxxxxxxxxxxx")

#{/fact}
