#include <iostream>
#include <sys/socket.h>
#include <string.h>
using namespace std;

namespace {
    int main() {

        // {fact rule=sensitive-information-leak@v1.0 defects=1}
        char* path = getenv("PATH");

        //...
        char *buffer;
        int socket;

        sprintf(buffer, "Cannot find exe on path: %s", path);
        send(socket, buffer, strlen(buffer), 0);
        // {/fact}
    }
}

