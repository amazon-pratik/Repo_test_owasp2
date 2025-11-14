// #include <curl/curl.h>

typedef void CURL; 
typedef int CURLcode;

// Add stub definition for CURLoption
typedef int CURLoption;

CURL* curl_easy_init()
{
    CURL *curl;
    return curl;
}
CURLoption CURLOPT_URL,CURLOPT_USE_SSL;
const char CURLUSESSL_ALL;

CURLcode my_curl_easy_setopt(CURL *handle, CURLoption option, const char *url)
{
    CURLcode cur;
    return cur;
}

int some()
{
    // CURL *curl_ftps = NULL;
    // CURL *curl_smtp_tls = NULL;

    // {fact rule=sensitive-information-leak@v1.0 defects=0}
    char* https_url = "https://example.com";
    // {/fact}
    // {fact rule=sensitive-information-leak@v1.0 defects=0}
    char* sftp_url = "sftp://anonymous@example.com";
    // {/fact}
    // {fact rule=sensitive-information-leak@v1.0 defects=0}
    char* ssh_url = "ssh://anonymous@example.com";
    // {/fact}

    // #include <curl/curl.h>

    // {fact rule=sensitive-information-leak@v1.0 defects=0}
    CURL *curl_ftps = curl_easy_init();
    my_curl_easy_setopt(curl_ftps, CURLOPT_URL, "ftp://example.com/");
    my_curl_easy_setopt(curl_ftps, CURLOPT_USE_SSL, CURLUSESSL_ALL); // FTP transport is done over TLS
    // {/fact}
    // {fact rule=sensitive-information-leak@v1.0 defects=0}
    CURL *curl_smtp_tls = curl_easy_init();
    my_curl_easy_setopt(curl_smtp_tls, CURLOPT_URL, "smtp://example.com:587");
    my_curl_easy_setopt(curl_smtp_tls, CURLOPT_USE_SSL, CURLUSESSL_ALL); // SMTP with STARTTLS
    // {/fact}
    return 0;
}


