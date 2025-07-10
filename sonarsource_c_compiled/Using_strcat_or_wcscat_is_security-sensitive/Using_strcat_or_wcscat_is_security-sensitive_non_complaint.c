#include <stdlib.h>
#include <string.h>
#include <stdio.h>

int doSomethingWith_using_strcat_func(char *dest){
    //something
    return 1;
}

// {fact rule=classic-buffer-overflow@v1.0 defects=1}
int func__using_strcat_bad(char *src) {
  char dest[256];
  strcpy(dest, "Result: ");
  strcat(dest, src); // Sensitive: might overflow
  return doSomethingWith_using_strcat_func(dest);
}
// {/fact}


