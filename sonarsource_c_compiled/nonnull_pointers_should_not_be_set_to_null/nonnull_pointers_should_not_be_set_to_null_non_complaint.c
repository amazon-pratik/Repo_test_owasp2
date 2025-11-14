#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <assert.h>

void* nonnull_pointers_should_not_be_set_to_null3(int* x) {
  assert(x != NULL && "Parameter x must not be NULL");
  *x = 42;
  return x;
}

// {fact rule=null-pointer-dereference@v1.0 defects=1}
void bar1() {
  int *p = NULL;
  int *q = nonnull_pointers_should_not_be_set_to_null3(p); // Noncompliant: null value is passed as an argument marked "nonnull"
}
// {/fact}

// {fact rule=null-pointer-dereference@v1.0 defects=1}
int* nonnull_pointers_should_not_be_set_to_null4() {
  return NULL; // Noncompliant: function may not return a null pointer
}
// {/fact}

void process1(int *p){
  // do something
}

// {fact rule=null-pointer-dereference@v1.0 defects=1}
void nonnull_pointers_should_not_be_set_to_null5(int *p) {
  p = NULL; // Noncompliant: `p` is marked "nonnull" but is set to null
  process1(p);
}
// {/fact}

