
#include <sys/stat.h>
#include <fcntl.h>

void func_posix(){
int fd;

// {fact rule=loose-file-permissions@v1.0 defects=0}
open("myfile.txt", O_CREAT, S_IRWXU | S_IRWXG); // Compliant
// {/fact}

// {fact rule=loose-file-permissions@v1.0 defects=0}
mkdir("myfolder", S_IRWXU | S_IRWXG); // Compliant
// {/fact}

// {fact rule=loose-file-permissions@v1.0 defects=0}
chmod("myfile.txt", S_IRWXU | S_IRWXG);  // Compliant
// {/fact}

// {fact rule=loose-file-permissions@v1.0 defects=0}
fchmod(fd, S_IRWXU | S_IRWXG); // Compliant
// {/fact}

// {fact rule=loose-file-permissions@v1.0 defects=0}
umask(S_IRWXO); // Compliant: further created files or directories will not have permissions set for "other group"
// {/fact}

}
