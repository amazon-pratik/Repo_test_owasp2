
// {fact rule=use-of-uninitialized-variable@v1.0 defects=0}
int function(int flag, int b) {
  int a;
  if (flag) {
    a = b;
  } else {
    a = 10;
  }
  return a; // Compliant
}
// {/fact}

// {fact rule=use-of-uninitialized-variable@v1.0 defects=0}
int function1(int flag, int b) {
  int a;
  if (flag) {
    a = b;
  } else {
    return 10;
  }
  return a; // Compliant
}
// {/fact}

// {fact rule=use-of-uninitialized-variable@v1.0 defects=0}
int function2(int flag, int b) {
  int a = 10;
  if (flag) {
    a = b;
  }
  return a; // Compliant
}
// {/fact}


// {fact rule=use-of-uninitialized-variable@v1.0 defects=0}
int function3(int flag, int b) {
  int const a = flag ? b : 10;
  return a; // Compliant
}
// {/fact}
