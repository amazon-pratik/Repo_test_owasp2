#include <iostream>

namespace {
    void openUrl(char *url)
    {
        // ...
    }

    int main() {
        // {fact rule=insecure-connection@v1.0 defects=1}
        openUrl("http://example.com"); // BAD
        // {/fact}

        // {fact rule=insecure-connection@v1.0 defects=0}
        openUrl("https://example.com"); // GOOD: Opening a connection to a URL using HTTPS enforces SSL.
        // {/fact}
    }
}

