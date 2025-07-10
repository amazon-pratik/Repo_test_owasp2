#include <stdio.h>

int getValue_conditions(){
    return 10;
}

void doSomethingbad_conditions(){
    //do something
}

void func_conditions(int x){
    // {fact rule=insecure-assignment@v1.0 defects=1}
    if (x = getValue_conditions()) { // Noncompliant: assigning and checking. Is it on purpose?
    doSomethingbad_conditions();
    }
    // {/fact}
}

