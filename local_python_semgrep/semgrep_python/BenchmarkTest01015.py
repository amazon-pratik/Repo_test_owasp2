#{fact rule=os-command-injection@v1.0 defects=1}

import sh

long = os.environ.get("LONG", "")

confurl = os.environ.get("SEMGREP_CONFIG_URL", "")
# ruleid: string-concat
sh.semgrep("--config {}".format(confurl))


#{/fact}
