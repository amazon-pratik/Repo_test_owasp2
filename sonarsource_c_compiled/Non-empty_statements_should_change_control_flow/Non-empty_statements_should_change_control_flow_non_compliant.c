#include <stdio.h>
// {fact rule=insecure-comparison@v1.0 defects=1}

int add1(int a, int b) {
  int result = 0;
  a + b; // Noncompliant: no side effect, hides a bug, the developer likely accidentally duplicated the line
  return result;
}
// {/fact}
// {fact rule=insecure-comparison@v1.0 defects=1}
int mul1(int a, int b) {
  int result = 1;
  result == a; // Noncompliant: no side effect, hides a bug, the developer intended to assign
  result *= b;
  return result;
}
// {/fact}
// {fact rule=insecure-comparison@v1.0 defects=1}
int sub1(int a, int b) {
  int result = a - b;
  a - b; // Noncompliant: no side effect, there is no underlying bug, but the statement is useless
  return result;
}
// {/fact}
