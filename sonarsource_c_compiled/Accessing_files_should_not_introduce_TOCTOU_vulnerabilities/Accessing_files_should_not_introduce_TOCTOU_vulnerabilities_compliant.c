#include <stdio.h>
#include <stdlib.h>

// {fact rule=file-race-bad@v1.0 defects=0}
FILE *fopen_if_not_exists_bad(const char *file) {
  FILE *f = fopen(file, "wx");
  return f;
}
// {/fact}
