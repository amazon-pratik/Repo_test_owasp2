#{fact rule=insecure-cryptography@v1.0 defects=1}

import ssl

context = ssl.create_default_context()

cipher = 'DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA:ECDHE-ECDSA-AES128-GCM-SHA256'
# ruleid: no-set-ciphers
context.set_ciphers(cipher)

#{/fact}
