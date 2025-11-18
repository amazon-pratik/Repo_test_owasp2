#include <iostream>
#include <mutex>
using namespace std;

namespace {
    // {fact rule=multiple-locks@v1.0 defects=0}
    // class C {
    //   std::mutex mutex;
    // public:
    //   // BAD: recursion causes deadlock.
    //   int f(int n) {
    //     mutex.lock();
    //     int result = (n == 0) ? 1 : n*f(n-1);
    //     mutex.unlock();
    //     return result;
    //   }
    // };
    // {/fact}

    int main() {
        return 1;
    }
}

