#include <iostream>
#include <sys/socket.h>
#include <string.h>
using namespace std;

namespace {
    int main() {
        // {fact rule=sensitive-information-leak@v1.0 defects=0}
        char* path = getenv("PATH");

        //...
        int socket;

        char* message = "An internal error has occurred. Please try again or contact a system administrator.\n";
        send(socket, message, strlen(message), 0);
        // {/fact}
    }
}


