#include <stdio.h>
#include <stdbool.h>

void doSomething_condition_good1(){
}

void doSomethingElse_condition_good1(){
}

void func_good_condition(){
  // {fact rule=expression-always-true@v1.0 defects=1}
  bool a = false;
  if (a) { // Noncompliant
    doSomething_condition_good1(); // never executed
  }
  // {/fact}
  bool b = false;
  // {fact rule=expression-always-true@v1.0 defects=1}
  if (!a || b) { // Noncompliant; "!a" is always "true", "b" is never evaluated
    doSomething_condition_good1();
  }
  else {
    doSomethingElse_condition_good1(); // never executed
  }
  // {/fact}
}

