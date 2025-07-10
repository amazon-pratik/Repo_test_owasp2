#include <string.h>
void initialize1(char *array) {
    // Your initialization code here
}

int main1()
{
    // {fact rule=detect-buffer-noassert@v1.0 defects=1}
    char array[10];
    initialize1(array);
    char *pos = memchr(array, '@', 42); // Noncompliant
    // {/fact}
    return 0;
}