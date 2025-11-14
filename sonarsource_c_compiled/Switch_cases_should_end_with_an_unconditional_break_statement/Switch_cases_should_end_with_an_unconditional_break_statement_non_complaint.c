#include<stdio.h>

void foo_switch_case(){
    //do doSomething
}

void doSomething_bad_switch_case(){
    //doSomething
}

void doSomethingElse_bad_switch_case(){
    //doSomethingElse
}


void switch_func(int myVariable){
    // {fact rule=omitted-break-statement@v1.0 defects=1}
    switch (myVariable) {
      case 1:
        foo_switch_case();
        break;
      case 2:  // Both 'doSomething_bad_switch_case()' and 'doSomethingElse_bad_switch_case()' will be executed. Is it on purpose ?
        doSomething_bad_switch_case();
      default:
        doSomethingElse_bad_switch_case();
        break;
    }
    // {/fact}
}

