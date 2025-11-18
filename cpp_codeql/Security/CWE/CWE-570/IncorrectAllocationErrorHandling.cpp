// #include <iostream>
// #include <stdlib.h>
// #include <cstring>

// using namespace std;

// namespace {
//     // {fact rule=expression-always-false@v1.0 defects=0}
//     // BAD: the allocation will throw an unhandled exception
//     // instead of returning a null pointer.
//     void bad1(std::size_t length) {
//       int* dest = new int[length];
//       if(!dest) {
//         return;
//       }
//       memset(dest, 0, length);
//       // ...
//     }
//     // {/fact}

//     // {fact rule=expression-always-false@v1.0 defects=0}
//     // BAD: the allocation won't throw an exception, but
//     // instead return a null pointer.
//     void bad2(std::size_t length) {
//       try {
//         int* dest = new(std::nothrow) int[length];
//         memset(dest, 0, length);
//         // ...
//       } catch(std::bad_alloc&) {
//         // ...
//       }
//     }
//     // {/fact}

//     // {fact rule=expression-always-false@v1.0 defects=0}
//     // GOOD: the allocation failure is handled appropriately.
//     void good1(std::size_t length) {
//       try {
//         int* dest = new int[length];
//         std::memset(dest, 0, length);
//         // ...
//       } catch(std::bad_alloc&) {
//         // ...
//       }
//     }
//     // {/fact}

//     // {fact rule=expression-always-false@v1.0 defects=0}
//     // BAD: the allocation will throw an unhandled exception
//     void good2(std::size_t length) {
//       int* dest = new int[length];
//       if(!dest) {
//         return;
//       }
//       std::memset(dest, 0, length);
//       // ...
//     }
//     // {/fact}

//     int main() {
//         return 1;
//     }
// }

