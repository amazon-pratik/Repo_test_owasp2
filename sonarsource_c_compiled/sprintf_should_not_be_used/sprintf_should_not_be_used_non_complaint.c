#include <stdio.h>
#include <stdlib.h>

void sprintf_should_not_be_used_non_complaint(char *str){
    char *message = "Hello";
    // {fact rule=insecure-buffer-access@v1.0 defects=1}
    sprintf(str, "%s", message);   // Sensitive: `str` buffer size is not checked and it is vulnerable to overflows
    // {/fact}
}