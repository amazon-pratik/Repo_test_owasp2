#{fact rule=os-command-injection@v1.0 defects=0}

import sh

long = os.environ.get("LONG", "")

# ok: string-concat
sh.ls("-al")

#{/fact}
