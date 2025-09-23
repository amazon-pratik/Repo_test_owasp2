#include <iostream>

using namespace std;

namespace {
    class EVP_PKEY_CTX {

    };

    void EVP_PKEY_CTX_set_rsa_keygen_bits(EVP_PKEY_CTX *ctx, int size) {

    }

    void encrypt_with_openssl(EVP_PKEY_CTX *ctx) {

      // {fact rule=cryptographic-key-generator@v1.0 defects=1}
      // BAD: only 1024 bits for an RSA key
      EVP_PKEY_CTX_set_rsa_keygen_bits(ctx, 1024);
      // {/fact}

      // {fact rule=cryptographic-key-generator@v1.0 defects=0}
      // GOOD: 2048 bits for an RSA key
      EVP_PKEY_CTX_set_rsa_keygen_bits(ctx, 2048);
      // {/fact}
    }

    int main() {

    }
}
