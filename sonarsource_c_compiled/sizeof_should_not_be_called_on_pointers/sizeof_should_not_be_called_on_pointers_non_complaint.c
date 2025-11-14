#include <stddef.h>
#include<stdio.h>

void fun(int *data) {
  // {fact rule=incorrect-use-of-sizeof@v1.0 defects=1}
  size_t const dataSize = sizeof data / sizeof(int); // Noncompliant, type of data is int *
  // {/fact}
  
  int array[] = { 1, 2, 3, 5, 7, 13, 17, 19};

  // {fact rule=incorrect-use-of-sizeof@v1.0 defects=1}
  size_t const arraySize = sizeof(array + 1) / sizeof(int); // Noncompliant, type of array is int * too
  // {/fact}
  int primes[] = { 1, 2, 3, 5, 7, 13, 17, 19};

  // {fact rule=incorrect-use-of-sizeof@v1.0 defects=1}
  size_t const primesSize2 = sizeof(primes + 1) / sizeof(int); // Noncompliant, type of primes + 1 is int *
  // {/fact}
}