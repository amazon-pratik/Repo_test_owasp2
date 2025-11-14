#include <stdlib.h>
// {fact rule=redundant-free-usage@v1.0 defects=1}
void memory_locations_should_not_be_released_bad(int size) {
  char* cp = (char*) malloc(sizeof(char) * size);

  // ...
  if (cp) {
    // ...
    free(cp);
  }

  free(cp);  // Noncompliant: potential call to free in the above branch
}
// {/fact}