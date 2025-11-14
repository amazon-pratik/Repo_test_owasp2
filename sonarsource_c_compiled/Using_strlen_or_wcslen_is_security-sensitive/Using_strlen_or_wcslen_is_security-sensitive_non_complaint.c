#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// {fact rule=classic-buffer-overflow@v1.0 defects=1}
size_t using_strlen_or_wcslen_is_security_sensitive_non_complaint(char *src) {
  char dest[256];
  strncpy(dest, src, sizeof dest); // Truncation may happen
  return strlen(dest); // Sensitive: "dest" will not be null-terminated if truncation happened
}
// {/fact}


