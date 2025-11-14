#include <stdlib.h>
#include <string.h>

int doSomethingWith_using_strcpy_good(char *dest){
    //something
    return 1;
}

// {fact rule=classic-buffer-overflow@v1.0 defects=0}
int f_using_strcpy_good(char *src) {
  char *dest = malloc(strlen(src) + 1); // For the final 0
  strcpy(dest, src); // Compliant: we made sure the buffer is large enough
  int r= doSomethingWith_using_strcpy_good(dest);
  free(dest);
  return r;
}
// {/fact}