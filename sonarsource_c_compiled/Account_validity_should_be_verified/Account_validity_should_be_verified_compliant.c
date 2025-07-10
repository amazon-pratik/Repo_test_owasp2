#include <stdio.h>
// #include <security/pam_appl.h>
typedef void* pam_handle_t;

#define PAM_SUCCESS 0
#define PAM_DISALLOW_NULL_AUTHTOK 0
#define NULL 0 

// Function prototype
int valid_good(pam_handle_t *pamh);

int pam_authenticate(pam_handle_t *pamh, int flags)
{
return flags;
}

int pam_acct_mgmt(pam_handle_t *pamh, int flags){
    return flags;
}

// {fact rule=missing-step-in-authentication@v1.0 defects=0}
int valid_good(pam_handle_t *pamh) {
    if (pam_authenticate(pamh, PAM_DISALLOW_NULL_AUTHTOK) != PAM_SUCCESS) {
        return -1;
    }
    if (pam_acct_mgmt(pamh, 0) != PAM_SUCCESS) {
        return -1;
    }

    return 0;
}
// {/fact}

int main_account_validity() {
  // Call valid_good() to avoid unused function warning 
  pam_handle_t *pamh = NULL;
  valid_good(pamh);
  
  return 0;
}