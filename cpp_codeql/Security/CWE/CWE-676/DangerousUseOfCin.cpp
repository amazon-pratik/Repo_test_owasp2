#include <iostream>
using namespace std;

namespace {
    #define BUFFER_SIZE 20

    void bad()
    {   // {fact rule=insecure-buffer-access@v1.0 defects=1}
        char buffer[BUFFER_SIZE];
        // BAD: Use of 'cin' without specifying the length of the input.
        cin >> buffer;
        buffer[BUFFER_SIZE-1] = '\0';
        // {/fact}
    }

    void good()
    {   // {fact rule=insecure-buffer-access@v1.0 defects=0}
        char buffer[BUFFER_SIZE];
        // GOOD: Specifying the length of the input before using 'cin'.
        cin.width(BUFFER_SIZE);
        cin >> buffer;
        buffer[BUFFER_SIZE-1] = '\0';
        // {/fact}
    }

    int main() {
        return 1;
    }
}
