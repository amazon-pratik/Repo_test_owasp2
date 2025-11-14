#include <stdio.h>

// {fact rule=insecure-buffer-access@v1.0 defects=0}
void buffer_good(){
    char buffer[10];
    scanf("%9s", buffer);
    buffer[9] = '\0'; //null termination
}
// {/fact}
