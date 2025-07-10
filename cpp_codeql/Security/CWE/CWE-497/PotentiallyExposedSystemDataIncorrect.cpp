#include <iostream>
using namespace std;

namespace {
    int main() {
        // {fact rule=sensitive-information-leak@v1.0 defects=1}
        char* key = getenv("APP_KEY");

        //...

        fprintf(stderr, "Key not recognized: %s\n", key);
        // {/fact}
    }
}

