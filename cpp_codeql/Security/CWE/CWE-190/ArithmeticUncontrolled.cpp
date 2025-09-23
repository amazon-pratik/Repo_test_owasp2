#include <iostream>
#include <climits>


namespace {
    int main(int argc, char** argv) {
        int i = rand();
        // {fact rule=integer-overflow@v1.0 defects=1}
        // BAD: potential overflow
        int j = i + 1000;
        // {/fact}

        // ...

        int n = rand();
        int k;
        // {fact rule=integer-overflow@v1.0 defects=0}
        // GOOD: use a guard to prevent overflow
        if (n < INT_MAX-1000)
            k = n + 1000;
        else
            k = INT_MAX;
        // {/fact}
    }

}
