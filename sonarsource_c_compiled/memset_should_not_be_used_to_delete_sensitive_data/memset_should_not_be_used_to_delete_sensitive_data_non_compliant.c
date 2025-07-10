#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void f_memset_bad(char *password, size_t bufferSize) {
  password = (char *)malloc(256);
  char localToken[256];
  // {fact rule=insecure-use-memset@v1.0 defects=1}
  memset(password, 0, strlen(password));  // Noncompliant
  // {/fact}

  // {fact rule=insecure-use-memset@v1.0 defects=1}
  memset(localToken, 0, strlen(localToken));  // Noncompliant

  // {/fact}
  free(password);
}

