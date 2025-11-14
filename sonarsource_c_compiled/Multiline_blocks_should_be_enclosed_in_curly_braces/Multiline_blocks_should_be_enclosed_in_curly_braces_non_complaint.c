#include <string.h>
#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>

void firstActionInBlock()
{

}

void secondAction()
{

}

void thirdAction()
{

}

void doTheThing(char str)
{

}
void doSomething()
{
  bool condition = true;
  // {fact rule=incorrect-block-delimmation@v1.0 defects=1}
  if (condition)
    firstActionInBlock();
   secondAction();  // Noncompliant: secondAction is executed unconditionally
  thirdAction();
  // {/fact}

  // {fact rule=incorrect-block-delimmation@v1.0 defects=1}
  if (condition) firstActionInBlock(); secondAction();  // Noncompliant: secondAction is executed unconditionally
  // {/fact}

  // {fact rule=incorrect-block-delimmation@v1.0 defects=1}
  if (condition) firstActionInBlock(); 
    secondAction();  // Noncompliant: secondAction is executed unconditionally
  // {/fact}

  // {fact rule=incorrect-block-delimmation@v1.0 defects=1}
  if (condition); secondAction();  // Noncompliant: secondAction is executed unconditionally
  // {/fact}

  char str;
  int array[] = {1, 2, 3, 4, 5};
  int lt=5;
  // {fact rule=incorrect-block-delimmation@v1.0 defects=1}
  for (int i = 0; i < sizeof(array); i++)
    str = array[i];
  doTheThing(str);  // Noncompliant: executed only on the last element
  // {/fact}

}
