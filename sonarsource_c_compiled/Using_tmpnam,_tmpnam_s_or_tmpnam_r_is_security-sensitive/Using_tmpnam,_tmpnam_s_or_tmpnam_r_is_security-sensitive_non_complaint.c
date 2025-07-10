#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// {fact rule=insecure-temporary-file-or-directory@v1.0 defects=1}
int f_bad_case(char *tempData) {
  char *path = tmpnam(NULL); // Sensitive
  FILE* f = fopen(path, "w");
  fputs(tempData, f);
  fclose(f);
}
// {/fact}

