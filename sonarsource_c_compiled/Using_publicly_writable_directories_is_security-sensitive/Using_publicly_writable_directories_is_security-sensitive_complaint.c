
#include <stdio.h>
// ...
// {fact rule=insecure-temporary-file-or-directory@v1.0 defects=0}
void f_security_sensitive_good() {
  FILE * fp = tmpfile(); // Compliant
}
// {/fact}
