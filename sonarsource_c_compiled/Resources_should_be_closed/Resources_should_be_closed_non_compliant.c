#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// {fact rule=incomplete-cleanup@v1.0 defects=1}
int process_file_bad(int print) {
  FILE *f = fopen("example.txt", "r");
  if (!f) {
    perror("fopen() failed");
    return 1;
  }

  if (print) {
    char buffer[256];
    while (fgets(buffer, 256, f)) {
      printf("%s", buffer);
    }
  }

  return 0; // Noncompliant: file `f` has not been closed
}
// {/fact}


