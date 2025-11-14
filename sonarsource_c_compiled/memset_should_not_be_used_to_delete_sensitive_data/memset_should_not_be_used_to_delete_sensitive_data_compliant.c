#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void memset_s(void *dest, size_t destsz, int value, size_t count) {
    if (dest == NULL || destsz < count) {
        // Handle error, for example, by returning an error code or terminating the program
        fprintf(stderr, "Error in custom_memset_s: Invalid parameters\n");
        exit(EXIT_FAILURE);
    }

    memset(dest, value, count);
}


void f_good(char *password, size_t bufferSize) {
  char localToken[256];
  password = (char *)malloc(256);

  // {fact rule=insecure-use-memset@v1.0 defects=0}
  memset_s(password, bufferSize, 0, strlen(password));
  // {/fact}

  // {fact rule=insecure-use-memset@v1.0 defects=0}
  memset_s(localToken, sizeof(localToken), 0, strlen(localToken));
  // {/fact}
  free(password);
}
