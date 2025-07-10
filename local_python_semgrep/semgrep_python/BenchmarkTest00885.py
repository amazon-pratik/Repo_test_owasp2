#{fact rule=insecure-cryptography@v1.0 defects=0}

import ssl

context = ssl.create_default_context()

# cf. https://stackoverflow.com/questions/49774366/how-to-set-ciphers-in-ssl-python-socket
cipher = 'DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA:ECDHE-ECDSA-AES128-GCM-SHA256'
# ok: no-set-ciphers
print(context.get_ciphers())

#{/fact}
