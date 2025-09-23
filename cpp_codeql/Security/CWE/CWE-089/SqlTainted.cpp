#include <iostream>

namespace {
    void runSql(char* query) {
      // Some logic
    }

    void encodeSqlString(char* userNameSql, int length, char* userName) {
      // Some logic
    }

    int main(int argc, char** argv) {
      char *userName = argv[2];

      // BAD
      // {fact rule=insecure-buffer-access@v1.0 defects=1}
      char query1[1000] = {0};
      sprintf(query1, "SELECT UID FROM USERS where name = \"%s\"", userName);
      runSql(query1);
      // {/fact}

      // GOOD
      // {fact rule=insecure-buffer-access@v1.0 defects=1}
      char userNameSql[1000] = {0};
      encodeSqlString(userNameSql, 1000, userName);
      char query2[1000] = {0};
      sprintf(query2, "SELECT UID FROM USERS where name = \"%s\"", userNameSql);
      runSql(query2);
      // {/fact}
    }
}

