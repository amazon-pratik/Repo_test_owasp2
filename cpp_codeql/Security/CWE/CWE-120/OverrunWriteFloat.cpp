#include <iostream>

class MessageBox {
	public:
		MessageBox(char* hWnd, char* buffer, char* message, char* MB_OK) {

		}	
};


void displayValue(double value)
{
	char buffer[256];
	char* hWnd;
	char* MB_OK;

	// BAD: extreme values may overflow the buffer
	// {fact rule=classic-buffer-overflow@v1.0 defects=1}
	sprintf(buffer, "%f", value);

	MessageBox(hWnd, buffer, "A Number", MB_OK);
	// {/fact}
}