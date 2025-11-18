#include <iostream>

namespace {
    class MessageBox {
        public:
            MessageBox(char* hWnd, char* buffer, char* message, char* MB_OK) {

            }
    };

    void sayHello(uint32_t userId)
    {
        char buffer[18];
        char* hWnd;
        char* MB_OK;

        // BAD: this message overflows the buffer if userId >= 10000
        // {fact rule=classic-buffer-overflow@v1.0 defects=1}
        sprintf(buffer, "Hello, user %d!", userId);

        MessageBox(hWnd, buffer, "New Message", MB_OK);
        // {/fact}
    }
}
