#include <stdio.h>
#include <stdlib.h>
void freed_memory_should_not_be_used_complaint(){
int* intArray = (int*)malloc(sizeof(int)*10);
// ...
// {fact rule=use-after-free@v1.0 defects=0}
intArray[9] = 0;  // Compliant
free(intArray);
// {/fact}

// {fact rule=use-after-free@v1.0 defects=0}
intArray[10];
// ...
intArray[9] = 0;  // Compliant
// {/fact}

// {fact rule=use-after-free@v1.0 defects=0}
// std::vector<int> intArray;

// intArray.resize(10);
intArray = realloc(intArray,sizeof(int) *10);
// ...
intArray[9] = 0;  // Compliant
// {/fact}
}