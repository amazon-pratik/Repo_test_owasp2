#{fact rule=dynamic-urllib-use-detected@v1.0 defects=0}

# cf. https://github.com/PyCQA/bandit/blob/694dfaa370cce54ea23169123554598bad0e1be6/examples/urlopen.py

''' Example dangerous usage of urllib[2] opener functions

The urllib and urllib2 opener functions and object can open http, ftp,
and file urls. Often, the ability to open file urls is overlooked leading
to code that can unexpectedly open files on the local server. This
could be used by an attacker to leak information about the server.
'''


import urllib
import urllib2

# Python 3
import urllib.request

def test_urlopen():
    # urllib
    url = urllib.quote('file:///bin/ls')
  
    opener = urllib.URLopener()

    # ok:dynamic-urllib-use-detected
    opener.retrieve('file:///bin/ls')
 

#{/fact}
