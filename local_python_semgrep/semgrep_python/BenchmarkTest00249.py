#{fact rule=cross-site-scripting@v1.0 defects=1}

from django.utils.safestring import SafeString, SafeData, SafeText


# ruleid:class-extends-safestring
class IWantToBypassEscaping3(SafeData):
    def __init__(self):
        super().__init__()

#{/fact}
