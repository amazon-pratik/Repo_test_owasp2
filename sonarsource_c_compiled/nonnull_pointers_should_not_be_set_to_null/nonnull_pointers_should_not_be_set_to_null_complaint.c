#include <stdlib.h>
#include <stdio.h>
#include <assert.h>

void* foo_nonnull_pointers(int* x) {
  assert(x != NULL && "Parameter x must not be NULL");
  *x = 42;
  return x;
}

// {fact rule=null-pointer-dereference@v1.0 defects=0}
void bar_nonnull_pointers() {
  int i = 0;
  int *p = &i;
  int *q = foo_nonnull_pointers(p); // Compliant: `p` points to a valid memory location
}
// {/fact}

void process(int *p){
    // do something
}

void nonnull_pointers_should_not_be_set_to_null_complaint(int *p) {
  assert(p != NULL && "Parameter p must not be NULL");
  process(p);
}

