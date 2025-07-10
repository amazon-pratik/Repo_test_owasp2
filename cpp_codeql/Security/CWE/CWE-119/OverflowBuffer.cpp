#include <iostream>
#include <cstring>

namespace {
    int main() {
        // {fact rule=improper-restriction-of-operations-within-memory-bounds@v1.0 defects=1}
        const char *message = "Hello";
        char password[32];
        char buffer[256];

        memcpy(buffer, message, 256);
        // {/fact}
    }
}


