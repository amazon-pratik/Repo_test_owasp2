#include <stdbool.h>

int foo_boolean(bool a){
    return 0;
}

void doSomethinggood_boolean(){
    //do something
}


void func_good_boolean(){
    bool a = true;
    char *b = "b";
    char *c = "c";
    // {fact rule=expression-always-true@v1.0 defects=0}
    if(foo_boolean(a)) {
      doSomethinggood_boolean();
    }
    // {/fact}
    
    // {fact rule=expression-always-true@v1.0 defects=0}
    if(b) {
      doSomethinggood_boolean();
    }
    // {/fact}
    
    // {fact rule=expression-always-true@v1.0 defects=0}
    if(c) {
      doSomethinggood_boolean();
    }
    // {/fact}

}