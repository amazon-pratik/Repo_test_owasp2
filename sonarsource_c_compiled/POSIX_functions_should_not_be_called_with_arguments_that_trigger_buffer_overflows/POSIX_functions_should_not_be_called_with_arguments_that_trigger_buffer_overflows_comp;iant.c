#include <string.h>
#include <stdlib.h>
int initialize(char* array);
int initialize(char* array)
{
    return 0;
}
int main_POSIX(){
    // {fact rule=detect-buffer-noassert@v1.0 defects=0}
    char array[10];
    initialize(array);
    char *pos = memchr(array, '@', sizeof(array));
    // {/fact}
    return 0;
}