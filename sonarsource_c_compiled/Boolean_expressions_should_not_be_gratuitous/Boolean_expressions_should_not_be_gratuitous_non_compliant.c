#include <stdbool.h>
#include<stdio.h>

void doSomething_boolean(){
    //do something
}


void func_boolean(){
    bool a = true;
    char *b = "b";
    char *c = "c";
    a = true;
    // {fact rule=expression-always-true@v1.0 defects=1}
    if (a) { // Noncompliant
      doSomething_boolean();
    }
    // {/fact}
    // {fact rule=expression-always-true@v1.0 defects=1}
    if (b && a) { // Noncompliant; "a" is always "true"
      doSomething_boolean();
    }
    // {/fact}
    // {fact rule=expression-always-true@v1.0 defects=1}
    if (c || !a) { // Noncompliant; "!a" is always "false"
      doSomething_boolean();
    }
    // {/fact}
}
