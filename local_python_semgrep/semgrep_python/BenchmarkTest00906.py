#{fact rule=os-command-injection@v1.0 defects=1}

import sh

long = os.environ.get("LONG", "")
# ruleid: string-concat
sh.ls("-a" + long)


#{/fact}
