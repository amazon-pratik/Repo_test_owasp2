#{fact rule=file-injection@v1.0 defects=0}

import csv

# ok:unquoted-csv-writer
csv.writer(csvfile, delimiter=',', quotechar='"', quoting=1)

#{/fact}
