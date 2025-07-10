#include <stddef.h>


// {fact rule=null-pointer-dereference@v1.0 defects=1}
int deref_null_ptr() {
  int* ptr = 0;
  return *ptr; // Noncompliant: deference of a null pointer
}
// {/fact}

// {fact rule=null-pointer-dereference@v1.0 defects=1}
int subscript_null_ptr() {
  int* ptr = 0;
  return ptr[2]; // Noncompliant: subscript operator used on null pointer
}
// {/fact}


struct Aggregate {
  int x;
  int y;
};
// {fact rule=null-pointer-dereference@v1.0 defects=1}
int memberAccess() {
  int x;
  struct Aggregate* ptr = 0;
  struct Aggregate gt;
  return ptr-&gt;x; // Noncompliant: member access on a null pointer
}
// {/fact}

// {fact rule=null-pointer-dereference@v1.0 defects=1}
void call_null_ptr() {
  void (*func)(int) = NULL; // func is a pointer to a function
  func(10); // Noncompliant: the invocation of a null function pointer
}
// {/fact}

