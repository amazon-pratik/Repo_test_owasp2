#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>

void func_without_verifying_good(){
    // {fact rule=missing-check-on-createnewfile@v1.0 defects=0}
    const char* root_dir = "/jail/";
    if (chdir(root_dir) == -1) {
      exit(-1);
    } // Compliant
    // {/fact}
    
    const char* any_dir = "/any/";
    
    // {fact rule=missing-check-on-createnewfile@v1.0 defects=0}
    int fd = open(any_dir, O_RDONLY | O_DIRECTORY);
    if(fchdir(fd) == -1) {
      exit(-1);
    } // Compliant
    // {/fact}
    

}