#include <iostream>
using namespace std;

namespace {

    void gets(char* buffer){
        //something
    }
    #define BUFFERSIZE (1024)

    // {fact rule=insecure-buffer-access@v1.0 defects=1}
    // BAD: using gets
    void echo_bad() {
        char buffer[BUFFERSIZE];
        gets(buffer);
        printf("Input was: '%s'\n", buffer);
    }
    // {/fact}

    // {fact rule=insecure-buffer-access@v1.0 defects=0}
    // GOOD: using fgets
    void echo_good() {
        char buffer[BUFFERSIZE];
        fgets(buffer, BUFFERSIZE, stdin);
        printf("Input was: '%s'\n", buffer);
    }
    // {/fact}

    int main() {
        return 1;
    }
}
