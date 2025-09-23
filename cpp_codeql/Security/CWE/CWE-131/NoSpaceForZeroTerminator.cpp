#include <iostream>
#include <sys/socket.h>
#include <cstring>

char* flawed_strdup(const char *input)
{
	char *copy;
    // {fact rule=improper-size-of-a-memory-buffer@v1.0 defects=1}
	/* Fail to allocate space for terminating '\0' */
	copy = (char *)malloc(strlen(input));
	strcpy(copy, input);
	return copy;
	// {/fact}
}

