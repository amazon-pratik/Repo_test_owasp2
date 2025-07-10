#include <iostream>
using namespace std;
namespace {
    class X509 {

    };

    X509* SSL_get_peer_certificate(char *ssl) {
        return new X509();
    }

    int main() {
        char *ssl;
        // ...
        // {fact rule=improper-certificate-validation@v1.0 defects=1}
        X509* cert = SSL_get_peer_certificate(ssl); // BAD (SSL_get_verify_result is never called)
        // {/fact}
        // ...
    }
}

