#include <stdio.h>
#include <limits.h>

struct OptionalInt {
    int has_value;
    int value;
};


struct OptionalInt safe_division(int a, int b) {
   struct OptionalInt result;
  // While the following check correctly prevents signed integer overflows,
  // it fails to prevent divide-by-zero errors. If `b` is equal to `0`, the
  // application emits undefined behavior.
  if ((a == INT_MIN) && (b == -1)) {
    result.has_value = 0;
    return result;
  }
  // {fact rule=divided-by-zero@v1.0 defects=1}
  result.has_value = 1;
  result.value = a / b; 
  return result; // Noncompliant: causes undefined behavior if `b` is zero
  // {/fact}
}

// {fact rule=divided-by-zero@v1.0 defects=1}
struct OptionalInt safe_division_by_zero_good2(int a, int b) {
  struct OptionalInt result;
  
  if ((a == INT_MIN) && (b == -1)) {
    result.has_value = 0;
    return result;
  }
  result.value = a/b;
  return result; // Noncompliant: check to prevent divide-by-zero in the caller
}
// {/fact}

struct OptionalInt foo_division_by_zero_3(int a, int b) {
  if (b == 0) {
    a = 1;
  }
  return safe_division(a, b);
}

int main(){
    printf("Hello World");
    return 0;
}
