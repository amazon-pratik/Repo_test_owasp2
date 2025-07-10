// {fact rule=insecure-comparison@v1.0 defects=0}
int add(int a, int b) {
  int result = a + b;
  return result;
}
// {/fact}
// {fact rule=insecure-comparison@v1.0 defects=0}
int mul(int a, int b) {
  int result = 1;
  result = a;
  result *= b;
  return result;
}
// {/fact}
// {fact rule=insecure-comparison@v1.0 defects=0}
int sub(int a, int b) {
  int result = a - b;
  return result;
}
// {/fact}

