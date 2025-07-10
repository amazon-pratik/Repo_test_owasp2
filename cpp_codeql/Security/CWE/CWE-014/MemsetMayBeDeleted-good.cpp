#include <iostream>

using namespace std;

namespace {

    void memset_s(char* pass, int len, int num, int len1){
        //something
    }

    int main() {
        int MAX_PASSWORD_LENGTH;
        // {fact rule=insecure-use-memset@v1.0 defects=0}
        char password[MAX_PASSWORD_LENGTH];
        // read and verify password
        memset_s(password, MAX_PASSWORD_LENGTH, 0, MAX_PASSWORD_LENGTH);
        // {/fact}
}
}

