#include <stdio.h>
#include <stdlib.h>
#include <string.h>


// {fact rule=insecure-temporary-file-or-directory@v1.0 defects=0}
int f_good_case(char *tempData) {
  // The file will be opened in "wb+" mode, and will be automatically removed on normal program exit
  FILE* f = tmpfile(); // Compliant
  fputs(tempData, f);
  fclose(f);
  return 0;
}
// {/fact}