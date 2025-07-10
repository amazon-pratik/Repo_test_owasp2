// #include <curl/curl.h>

typedef void CURL; 
typedef int CURLcode;

// Add stub definition for CURLoption
typedef int CURLoption;

CURL* curl_easy_init1()
{
    CURL *curl;
    return curl;
}


CURLoption CURLOPT_URL,CURLOPT_USE_SSL;
const char CURLUSESSL_ALL;

CURLcode my_curl_easy_setopt1(CURL *handle, CURLoption option, const char *url)
{
    CURLcode *curl;
    return *curl;
}

int some1()
{

    // {fact rule=sensitive-information-leak@v1.0 defects=1}
    char* http_url = "http://example.com"; // Sensitive
    // {/fact}

    // {fact rule=sensitive-information-leak@v1.0 defects=1}
    char* ftp_url = "ftp://anonymous@example.com"; // Sensitive
    // {/fact}

    // {fact rule=sensitive-information-leak@v1.0 defects=1}
    char* telnet_url = "telnet://anonymous@example.com"; // Sensitive
    // {/fact}


     // {fact rule=sensitive-information-leak@v1.0 defects=1}
    CURL *curl_ftp = curl_easy_init1();
    my_curl_easy_setopt1(curl_ftp, CURLOPT_URL, "ftp://example.com/"); // Sensitive
    // {/fact}
    // {fact rule=sensitive-information-leak@v1.0 defects=1}
    CURL *curl_smtp = curl_easy_init1();
    my_curl_easy_setopt1(curl_smtp, CURLOPT_URL, "smtp://example.com:587"); // Sensitive
    // {/fact}
    return 0;
}