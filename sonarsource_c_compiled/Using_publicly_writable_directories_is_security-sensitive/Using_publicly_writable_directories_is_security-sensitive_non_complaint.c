
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// ...
// {fact rule=insecure-temporary-file-or-directory@v1.0 defects=1}
void f_security_sensitive_bad2() {
  FILE * fp = fopen("/tmp/temporary_file", "r"); // Sensitive
}


// ...
// {fact rule=insecure-temporary-file-or-directory@v1.0 defects=1}
void f_security_sensitive_bad1() {
  char *tmpdir = getenv("TMPDIR");
  char *filename = malloc(strlen(tmpdir) + strlen("/temporary_file") + 1);
  sprintf(filename, "%s/temporary_file", tmpdir);

  FILE *fp = fopen(filename, "w");

  free(filename);
}
// {/fact}

