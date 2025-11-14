#include <stdlib.h>
#include <string.h>

// {fact rule=classic-buffer-overflow@v1.0 defects=0}
size_t using_strlen_or_wcslen_is_security_sensitive_good(char *src) {
  char dest[256];
  strncpy(dest, src, sizeof dest); // Truncation may happen
  dest[sizeof dest - 1] = 0;
  return strlen(dest); // Compliant: "dest" is guaranteed to be null-terminated
}
// {/fact}