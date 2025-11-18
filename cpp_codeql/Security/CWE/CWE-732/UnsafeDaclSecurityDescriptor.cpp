#include <iostream>
using namespace std;

namespace {
    #define SECURITY_DESCRIPTOR_REVISION 1

    class SECURITY_DESCRIPTOR {

    };

    class SECURITY_ATTRIBUTES {

    };

    bool InitializeSecurityDescriptor(SECURITY_DESCRIPTOR* pSD, int a) {
        return true;
    }

    bool SetSecurityDescriptorDacl(SECURITY_DESCRIPTOR* pSD, bool a, bool b, bool c) {
        return true;
    }


    int main() {
        // {fact rule=loose-file-permissions@v1.0 defects=0}
        SECURITY_DESCRIPTOR  pSD;
        SECURITY_ATTRIBUTES  SA;

        if (!InitializeSecurityDescriptor(&pSD, SECURITY_DESCRIPTOR_REVISION))
        {
            // error handling
        }
        if (!SetSecurityDescriptorDacl(&pSD,
            true,   // bDaclPresent - this value indicates the presence of a DACL in the security descriptor
            NULL,   // pDacl - the pDacl parameter does not point to a DACL. All access will be allowed
            false))
        {
            // error handling
        }
        // {/fact}
    }
}


