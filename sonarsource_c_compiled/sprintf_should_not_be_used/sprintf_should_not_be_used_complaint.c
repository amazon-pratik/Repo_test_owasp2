#include <stdio.h>
#include <stdlib.h>

void sprintf_should_not_be_used_complaint(char *str){
    char *message = "Hello";
    // {fact rule=insecure-buffer-access@v1.0 defects=0}
    snprintf(str, sizeof(str), "%s", message); // Prevent overflows by enforcing a maximum size for `str` buffer
    // {/fact}
    
    size_t buflen = snprintf(0, 0, "%s", message);
    char* buf = malloc(buflen + 1); // For the final 0
    sprintf(buf, "%s", message);
}
