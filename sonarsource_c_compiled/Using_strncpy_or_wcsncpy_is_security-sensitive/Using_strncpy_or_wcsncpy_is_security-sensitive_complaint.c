#include <stdlib.h>
#include <string.h>

int doSomethingWith_strncpy_or_wcsncpy_good(char *dest){
    //something
    return 1;
}

// {fact rule=classic-buffer-overflow@v1.0 defects=0}
int using_strncpy_or_wcsncpy_is_security_sensitive_complaint(char *src) {
  char dest[256];
  dest[sizeof dest - 1] = 0;
  strncpy(dest, src, sizeof(dest)); // Compliant
  if (dest[sizeof dest - 1] != 0) {
    // Handle error
  }
  return doSomethingWith_strncpy_or_wcsncpy_good(dest);
}

// {/fact}