void access_exceeds1(void) {
  int id_sequence[3];
  // {fact rule=detect-buffer-noassert@v1.0 defects=1}
  id_sequence[0] = 100;
  id_sequence[1] = 200;
  id_sequence[2] = 300;
  id_sequence[3] = 400; // Noncompliant: memory access is out of bounds
  // Accessed memory exceeds upper limit of memory block
  // {/fact}
}
// {fact rule=detect-buffer-noassert@v1.0 defects=1}
void access_precedes1(int x) {
  int buf[100];
  int *p = buf;
  --p;
  p[0] = 9001; // Noncompliant: memory access is out of bounds
  // Accessed memory precedes memory block
}
// {/fact}

#include <string.h>
// {fact rule=detect-buffer-noassert@v1.0 defects=1}
void memcpy_fun1(void) {
  char src[] = {1, 2, 3, 4};
  char dst[10];
  memcpy(dst, src, 5); // Noncompliant: memory copy function accesses out-of-bound array element
}
// {/fact}


#include <stdio.h>
// {fact rule=detect-buffer-noassert@v1.0 defects=1}
int fun_memory_access1(void) {
  char buffer[64] = {0};
  if (fgets(buffer, 2048, stdin) != NULL) { // Noncompliant: target buffer may overflow
    printf("buffer contents: %s", buffer);
    return 0;
  }
  return 1;
}
// {/fact}

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// {fact rule=detect-buffer-noassert@v1.0 defects=1}
int foo_memory_access1(void) {
  const char *const str = "AAAA"
                          "BBBB"
                          "CCCC"
                          "DDDD";
  size_t str_len = strlen(str);
  char *buf1 = (char *)malloc(str_len + /*null terminator*/ 1);
  if (buf1 == NULL) { return 1; }
  memset(buf1, 0, str_len + 1);
  strncpy(buf1, str, str_len);
  char buf2[8] = {0};
  memcpy(buf2, buf1, str_len + 1); // Noncompliant: buf2 will overflow.
  printf("buf1: %s\n", buf1);
  printf("buf2: %s\n", buf2);
  free(buf1);
  return 0;
}
// {/fact}

#include <stdio.h>
// {fact rule=detect-buffer-noassert@v1.0 defects=1}
void bar_memory_access1(void) {
  int array[8] = {1, 2, 3, 4, 5, 6, 7, 8};
  array[8] = 42; // Noncompliant: index should be between 0 and 7
  for (size_t i = 0; i < 8; ++i) {
    printf("%d\n", array[i]); // Compliant: index is between 0 and 7
  }
}
// {/fact}

#include <string.h>
// {fact rule=detect-buffer-noassert@v1.0 defects=1}
void memcpy_fun(void) {
  char src[] = {1, 2, 3, 4};
  char dst[10];
  memcpy(dst, src, sizeof(src)); // Noncompliant: memory copy function accesses only valid array elements
}
// {/fact}
