#include <iostream>

namespace {
void log(char *message, int factor) {
    // Some logic
}

int main() {
    int factor = atoi(getenv("BRANCHING_FACTOR"));

    // {fact rule=integer-overflow@v1.0 defects=0}
    // GOOD: Prevent overflow by checking the input
    if (factor < 0 || factor > 1000) {
        log("Factor out of range (%d)\n", factor);
        return -1;
    }
    // {/fact}

    // This line can allocate too little memory if factor
    // is very large.
    char **root_node = (char **) malloc(factor * sizeof(char *));
}
}

