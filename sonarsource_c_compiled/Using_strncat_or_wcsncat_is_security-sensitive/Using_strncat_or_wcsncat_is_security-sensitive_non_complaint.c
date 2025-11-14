#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int doSomethingWith_strncat_or_wcsncat_bad(char *dest){
    //something
    return 1;
}

// {fact rule=classic-buffer-overflow@v1.0 defects=1}
int f_strncat_or_wcsncat_bad(char *src) {
  char dest[256];
  strcpy(dest, "Result: ");
  strncat(dest, src, sizeof dest); // Sensitive: passing the buffer size instead of the remaining size
  return doSomethingWith_strncat_or_wcsncat_bad(dest);
}
// {/fact}


