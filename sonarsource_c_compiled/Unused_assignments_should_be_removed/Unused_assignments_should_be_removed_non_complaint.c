#include <stdbool.h>
#include <stdio.h>

int foo1() {
  // {fact rule=unused-assigned-variables@v1.0 defects=1}
  int x = 0; // Noncompliant: dead store, next line overwrites x
  // {/fact}

  // {fact rule=unused-assigned-variables@v1.0 defects=1}
  x = 100; // Noncompliant: dead store, next line overwrites x
  x = 200;
  int y = 0;
  // {/fact}

  // {fact rule=unused-assigned-variables@v1.0 defects=1}
  y += 9001; // Noncompliant: dead store, y is never used
  // {/fact}

  // {fact rule=unused-assigned-variables@v1.0 defects=1}
  int z = 300; // Noncompliant: dead store, next line overwrites z
  z = 400;
  return x + z * 2;
  // {/fact}
}
// {fact rule=unused-assigned-variables@v1.0 defects=1}
int foo2(int y) {
  int x = 0;
  x = 100; // Noncompliant: dead store
  x = 200;
  return x + y;
}
// {/fact}

int bar_assignments_bad1(){
    return 1;
}
int buz_assignments_bad(){
    return 2;
}
// {fact rule=unused-assigned-variables@v1.0 defects=1}
int foo_assignments_bad3(bool b) {
  int x = 0;
  if (b) {
    x = bar_assignments_bad1();
    return x;
  }
  if (x != 0) {
    int y = buz_assignments_bad();
    y += 9001; // Noncompliant: dead store
  }
  return x;
}
// {/fact}


