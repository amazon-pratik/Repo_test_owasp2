#include <stdbool.h>

// {fact rule=unused-assigned-variables@v1.0 defects=0}
int foo_good_unused_assignments1(int y) {
  int x = 200; // Compliant: no unnecessary assignment
  return x + y;
}
// {/fact}

int bar_assignments(){
    // dosomething
    return 1;
}
int buz_assignments();
// {fact rule=unused-assigned-variables@v1.0 defects=0}
int foo_good_assignments2(bool b) {
  int x = 0;
  if (b) {
    x = bar_assignments();
    return x;
  }
  // Compliant: no more dead stores and superfluous code
  // Assuming call to buz() had no important side effects
  return x;
}
// {/fact}