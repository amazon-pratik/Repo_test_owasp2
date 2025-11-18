#include <iostream>
#include <climits>

namespace {
    int main(int argc, char** argv) {
        int i = INT_MAX;
        // {fact rule=integer-overflow@v1.0 defects=1}
        // BAD: overflow
        int j = i + 1;
        // {/fact}

        // ...

        int l = INT_MAX;
        // {fact rule=integer-overflow@v1.0 defects=0}
        // GOOD: no overflow
        long k = (long)l + 1;
        // {/fact}
    }
}

