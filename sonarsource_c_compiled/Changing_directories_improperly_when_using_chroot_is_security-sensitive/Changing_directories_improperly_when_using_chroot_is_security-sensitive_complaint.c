#include <stdlib.h>
#include <unistd.h>

void func_good_changing_directories(){
    // {fact rule=insecure-use-of-chroot@v1.0 defects=0}
    const char* root_dir = "/jail/";
    // {/fact}
    
    // {fact rule=insecure-use-of-chroot@v1.0 defects=0}
    if(chdir(root_dir) == -1) {
      exit(-1);
    }
    // {/fact}
    
    // {fact rule=insecure-use-of-chroot@v1.0 defects=0}
    if(chroot(root_dir) == -1) {  // compliant: the current dir is changed to the jail and the results of both functions are checked
      exit(-1);
    }
    // {/fact}

}