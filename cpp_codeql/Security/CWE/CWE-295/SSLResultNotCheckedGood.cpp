#include <iostream>
using namespace std;
namespace {
    #define X509_V_OK 1

    class X509 {

    };

    X509* SSL_get_peer_certificate(char* ssl) {
        return new X509();
    }

    int SSL_get_verify_result(char *ssl) {
        return NULL;
    }

    int main() {
        // ...
        // {fact rule=improper-certificate-validation@v1.0 defects=0}
        char* ssl;
        X509 *cert = SSL_get_peer_certificate(ssl); // GOOD
        if (cert)
        {
            int result = SSL_get_verify_result(ssl);
            if (result == X509_V_OK)
            {
                // ...
        // {/fact}
            }
        }
    }
}

