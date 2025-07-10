#include <iostream>

namespace {
    #define O_CREAT 1
    #define S_IRUSR 2
    #define S_IWUSR 3

    int open(int file, int permission) {
        return 1;
    }

    int open(int file, int permission, int mode) {
        return 1;
    }

    // {fact rule=loose-file-permissions@v1.0 defects=1}
    inline int open_file_bad() {
        int FILE;
        // BAD - this uses arbitrary bytes from the stack as mode argument
            return open(FILE, O_CREAT);
    }
    // {/fact}

    // {fact rule=loose-file-permissions@v1.0 defects=0}
    int open_file_good() {
        int FILE;
        // GOOD - the mode argument is supplied
            return open(FILE, O_CREAT, S_IRUSR | S_IWUSR);
    }
    // {/fact}

    int main() {
        return 1;
    }
}

