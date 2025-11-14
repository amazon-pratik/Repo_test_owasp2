void access_exceeds(void) {
  // {fact rule=detect-buffer-noassert@v1.0 defects=0}
  int id_sequence[3];
  // Compliant: all memory accesses are within valid bounds between 0 and 2
  id_sequence[0] = 100;
  id_sequence[1] = 200;
  id_sequence[2] = 300;
  // {/fact}
}
// {fact rule=detect-buffer-noassert@v1.0 defects=0}
void access_precedes(int x) {
  int buf[100];
  int *p = buf;
  p[0] = 9001; // Compliant: memory access within valid bounds
}
// {/fact}

#include <stdio.h>
// {fact rule=detect-buffer-noassert@v1.0 defects=0}
int fun_memory_access(void) {
  char buffer[64] = {0};
  if (fgets(buffer, 64, stdin) != NULL) { // Compliant: reads at most 64 - 1 characters
    printf("buffer contents: %s", buffer);
    return 0;
  }
  return 1;
}
// {/fact}

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int foo_memory_access(void) {
  const char *const str = "AAAA"
                          "BBBB"
                          "CCCC"
                          "DDDD";
  size_t str_len = strlen(str);
  char *buf1 = (char *)malloc(str_len + /*null terminator*/ 1);
  if (buf1 == NULL) { return 1; }
  memset(buf1, 0, str_len + 1);
  strncpy(buf1, str, str_len + 1);
  // {fact rule=detect-buffer-noassert@v1.0 defects=0}
  char buf2[8] = {0};
  // Compliant: copy only `sizeof(buf2) - 1` bytes and leave the last
  // terminating null byte ('\0') untouched such that `buf2` can be correctly
  // printed in the subsequent lines.
  memcpy(buf2, buf1,  sizeof(buf2) - 1);
  printf("buf1: %s\n", buf1);
  printf("buf2: %s\n", buf2);
  free(buf1);
  return 0;
}
// {/fact}


#include <stdio.h>
// {fact rule=detect-buffer-noassert@v1.0 defects=0}
void bar_memory_access(void) {
  int array[8] = {1, 2, 3, 4, 5, 6, 7, 8};
  array[7] = 42; // Compliant: index is between 0 and 7
  for (size_t i = 0; i < 8; ++i) {
    printf("%d\n", array[i]); // Compliant: index is between 0 and 7
  }
}
// {/fact}
