#include <stdlib.h>
// {fact rule=redundant-free-usage@v1.0 defects=0}
void memory_locations_should_not_be_released_good(int size) {
  char* cp = (char*) malloc(sizeof(char) * size);

  // ...
  if (cp) {
    // ...
  }

  free(cp); // Compliant: no previous call to free in the above branch
}
// {/fact}
// {fact rule=redundant-free-usage@v1.0 defects=0}
void memory_locations_should_not_be_released_good1(int size) {
  char* cp = (char*) malloc(sizeof(char) * size);

  // ...
  if (cp) {
    // ...
    free(cp);
    // cp = NULL; // This will prevent freeing the same memory again
  }
  else{
    free(cp); // Compliant: if the memory was freed in the if-block above, free(NULL) is a no-op
  }
}
// {/fact}

