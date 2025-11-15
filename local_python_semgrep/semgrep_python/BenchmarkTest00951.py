#{fact rule=insecure-connection@v1.0 defects=1}

import ftplib
import ssl

def bad():
    # ruleid: use-ftp-tls
    ftpc = ftplib.FTP("example.com", "user", "pass")

#{/fact}
