#{fact rule=sensitive-information-leak@v1.0 defects=0}

import socket


# ok:avoid-bind-to-all-interfaces
s = socket.socket(doesnt, matter)
s.bind(('fe80::34cb:9850:4868:9d2c', 1337))

#{/fact}
