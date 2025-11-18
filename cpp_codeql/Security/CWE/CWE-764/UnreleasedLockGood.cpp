#include <iostream>
#include <mutex>
using namespace std;

namespace {
    bool doWork() {
        return true;
    }

    class RAII_Mutex
    {
        std::mutex lock;
    public:
        RAII_Mutex(mutex &m)
        {
            lock.lock();
        }

        ~RAII_Mutex()
        {
            lock.unlock();
        }
    };

    // {fact rule=multiple-locks@v1.0 defects=0}
    std::mutex a_mutex;
    inline int fun() {
        new RAII_Mutex(a_mutex);

        bool succeeded = doWork();
        if (!succeeded) {
            // GOOD: the RAII_Mutex is destroyed, releasing the lock
            return -1;
        }

        return 1;
    }
    // {/fact}

    int main() {
        return 1;
    }
}
