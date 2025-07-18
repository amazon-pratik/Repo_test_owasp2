#include <iostream>

#define X509_V_OK 1

#define X509_V_ERR_CERT_HAS_EXPIRED 1
namespace {
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
    char* ssl;
    char* cert;
	// {fact rule=improper-certificate-validation@v1.0 defects=1}
	if (cert = SSL_get_peer_certificate(ssl))
	{
		int result = SSL_get_verify_result(ssl);

		if ((result == X509_V_OK) || (result == X509_V_ERR_CERT_HAS_EXPIRED)) // BAD (conflates OK and a non-OK codes)
		{
			do_ok();
		} else {
			do_error();
		}
	}
	// {/fact}
}
}
