#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>

void func_without_verifying_bad(){
    // {fact rule=missing-check-on-createnewfile@v1.0 defects=1}
    const char* any_dir = "/any/";
    chdir(any_dir); // Sensitive: missing check of the return value
    // {/fact}
    
    // {fact rule=missing-check-on-createnewfile@v1.0 defects=1}
    int fd = open(any_dir, O_RDONLY | O_DIRECTORY);
    fchdir(fd); // Sensitive: missing check of the return value
    // {/fact}

}
