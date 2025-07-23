#include <iostream>
using namespace std;

namespace {
     
     void memset(char* pass, int num, int len){
        //Something
     }


    int main() {
    int MAX_PASSWORD_LENGTH;

    // {fact rule=insecure-use-memset@v1.0 defects=1}
    char password[MAX_PASSWORD_LENGTH];
    // read and verify password
    memset(password, 0, MAX_PASSWORD_LENGTH);
    // {/fact}
    }
}
