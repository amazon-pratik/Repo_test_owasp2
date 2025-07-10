#{fact rule=insecure-connection@v1.0 defects=0}

import ftplib
import ssl

def ok():
    # ok: use-ftp-tls
    ftpc = ftplib.FTP_TLS("example.com", "user", "pass", context=ssl.create_default_context())

#{/fact}
