#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int doSomethingWith_using_strcpy_bad(char *dest){
    //something
    return 1;
}

// {fact rule=classic-buffer-overflow@v1.0 defects=1}
int f_using_strcpy_bad(char *src) {
  char dest[256];
  strcpy(dest, src); // Sensitive: might overflow
  return doSomethingWith_using_strcpy_bad(dest);
}
// {/fact}

