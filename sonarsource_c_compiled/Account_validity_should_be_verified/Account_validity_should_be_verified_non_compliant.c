#include <stdio.h>
// #include <security/pam_appl.h>

typedef void* pam_handle_t;

#define PAM_SUCCESS 0
#define PAM_DISALLOW_NULL_AUTHTOK 0

// {fact rule=missing-step-in-authentication@v1.0 defects=1}
int valid(pam_handle_t *pamh) {
    if (pam_authenticate(pamh, PAM_DISALLOW_NULL_AUTHTOK) != PAM_SUCCESS) { // Noncompliant
        return -1;
    }

    return 0;
}
// {/fact}
