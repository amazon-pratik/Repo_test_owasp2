#{fact rule=sensitive-information-leak@v1.0 defects=0}

import socket


# ok:avoid-bind-to-all-interfaces
s = socket.socket(doesnt, matter)
s.bind(('8.8.8.8', 1337))


#{/fact}
