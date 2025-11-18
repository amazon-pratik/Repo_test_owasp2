#include <iostream>
#include <mutex>
using namespace std;

namespace {
    bool doWork() {
        return true;
    }
    // {fact rule=multiple-locks@v1.0 defects=1}
    std::mutex a_mutex;
    inline int fun() {
        a_mutex.lock();
        bool succeeded = doWork();
        if (!succeeded) {
            // BAD: this does not release the mutex
            return -1;
        }
        a_mutex.unlock();
        return 1;
    }
    // {/fact}

    int main() {
        return 1;
    }
}
