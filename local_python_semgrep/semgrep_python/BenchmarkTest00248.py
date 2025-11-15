#{fact rule=sensitive-information-leak@v1.0 defects=1}

import socket

# ruleid:avoid-bind-to-all-interfaces
s = socket.socket(doesnt, matter)
s.bind(('',))


#{/fact}
