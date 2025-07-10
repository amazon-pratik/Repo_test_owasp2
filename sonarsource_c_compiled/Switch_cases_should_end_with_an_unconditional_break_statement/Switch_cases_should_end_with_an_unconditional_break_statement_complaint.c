
void foo_good_switch_case(){
    //do doSomething
}

void doSomething_good_switch_case(){
    //doSomething
}

void doSomethingElse_good_switch_case(){
    //doSomethingElse
}


void switch_good(int myVariable){
    // {fact rule=omitted-break-statement@v1.0 defects=0}
    switch(myVariable) {
      case 1:
        foo_good_switch_case();
        break;
      case 2:
        doSomething_good_switch_case();
        break;
      default:
        doSomethingElse_good_switch_case();
        break;
    }
    // {/fact}
}