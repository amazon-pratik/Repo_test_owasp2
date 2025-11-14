#include <stdio.h>
#include <stdlib.h>

void doSomething_switch_statements(){
    //something
}

void doSomethingElse_switch_statements(){
    //something
}

void doDefault_switch_statements(){
    //something
}

void switch_statements_should_have_default_clauses_good(){
    int param = 5;
    // {fact rule=missing-default-condition@v1.0 defects=0}
    switch (param) {
      case 0:
        doSomething_switch_statements();
        break;
      case 1:
        doSomethingElse_switch_statements();
        break;
      default:
        doDefault_switch_statements();
        break;
    }
    // {/fact}
}
