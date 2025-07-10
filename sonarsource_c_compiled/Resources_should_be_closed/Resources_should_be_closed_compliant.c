#include <stdio.h>
#include <stdlib.h>
// {fact rule=incomplete-cleanup@v1.0 defects=0}
int process_file(int print) {
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

  fclose(f);
  return 0; // Compliant: file `f` has been closed
}
// {/fact}