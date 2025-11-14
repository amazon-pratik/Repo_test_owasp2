#include <stdlib.h>
#include <string.h>

int doSomethingWith_using_strcat(char *dest){
    //something
    return 1;
}

// {fact rule=classic-buffer-overflow@v1.0 defects=0}
int f_using_strcat_good(char *src) {
  char result[] = "Result: ";
  char *dest = malloc(sizeof(result) + strlen(src)); // Not need of +1 for final 0 because sizeof will already count one 0
  strcpy(dest, result);
  strcat(dest, src); // Compliant: the buffer size was carefully crafted
  int r = doSomethingWith_using_strcat(dest);
  free(dest);
  return r;
}
// {/fact}

