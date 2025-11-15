#{fact rule=insecure-connection@v1.0 defects=0}

import urllib3 as ur3

# ok:http-not-https-connection
spool = ur3.connectionpool.HTTPSConnectionPool("example.com")

#{/fact}
