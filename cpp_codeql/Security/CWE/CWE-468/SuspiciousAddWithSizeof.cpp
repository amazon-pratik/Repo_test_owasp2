// {fact rule=incorrect-pointer-scaling@v1.0 defects=1}
inline int example1(int i) {
  int intArray[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
  int *intPointer = intArray;
  // BAD: the offset is already automatically scaled by sizeof(int),
  // so this code will compute the wrong offset.
  return *(intPointer + (i * sizeof(int)));
}
// {/fact}

// {fact rule=incorrect-pointer-scaling@v1.0 defects=0}
inline int example2(int i) {
  int intArray[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
  int *intPointer = intArray;
  // GOOD: the offset is automatically scaled by sizeof(int).
  return *(intPointer + i);
}
// {/fact}