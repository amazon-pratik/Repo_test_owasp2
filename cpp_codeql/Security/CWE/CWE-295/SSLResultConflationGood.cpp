#include <iostream>
using namespace std;

namespace {
    #define X509_V_OK 1

    #define X509_V_ERR_CERT_HAS_EXPIRED 1

    char* SSL_get_peer_certificate(char* ssl) {
        return NULL;
    }

    int SSL_get_verify_result(char* ssl) {
        return NULL;
    }

    void do_ok() {

    }

    void do_error() {

    }

    int main() {
        // ...

        char* cert;
        char* ssl;

        // {fact rule=improper-certificate-validation@v1.0 defects=0}
        if (cert = SSL_get_peer_certificate(ssl))
        {
            int result = SSL_get_verify_result(ssl);

            if (result == X509_V_OK) // GOOD
            {
                do_ok();
            } else {
                do_error();
            }
        }
        // {/fact}

    }
}

