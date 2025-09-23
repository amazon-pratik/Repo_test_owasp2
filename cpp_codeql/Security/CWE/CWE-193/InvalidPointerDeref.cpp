#include <iostream>
using namespace std;

namespace {
    void *malloc(unsigned int) {

    }

    unsigned int get_size() {

    }

    void write_data(const unsigned char*, const unsigned char*) {

    }

    int main(int argc, char* argv[]) {
      unsigned size = get_size();

      {
        // {fact rule=off-by-one-error@v1.0 defects=1}
        unsigned char *begin = (unsigned char*)malloc(size);
        if(!begin) return -1;

        unsigned char* end = begin + size;
        write_data(begin, end);
        *end = '\0'; // BAD: Out-of-bounds write
        // {/fact}
      }

      {
        // {fact rule=off-by-one-error@v1.0 defects=0}
        unsigned char *begin = (unsigned char*)malloc(size);
        if(!begin) return -1;

        unsigned char* end = begin + size;
        write_data(begin, end);
        *(end - 1) = '\0'; // GOOD: writing to the last byte
        // {/fact}
      }

    }
}
