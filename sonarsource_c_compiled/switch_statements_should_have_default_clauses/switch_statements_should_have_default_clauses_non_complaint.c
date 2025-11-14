#include <stdio.h>
#include <stdlib.h>

void doSomethingbad_switch_statements(){
    //something
}

void doSomethingElsebad_switch_statements(){
    //something
}

void switch_statements_should_have_default_clauses_non_complaint(){
    int param = 5;
    // {fact rule=missing-default-condition@v1.0 defects=1}
    switch (param) { // Noncompliant - default clause is missing
      case 0:
        doSomethingbad_switch_statements();
        break;
      case 1:
        doSomethingElsebad_switch_statements();
        break;
    }
    // {/fact}
}