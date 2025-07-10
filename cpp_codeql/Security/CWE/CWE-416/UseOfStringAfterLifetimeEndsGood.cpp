#include <iostream>
#include <string>
void work(const char*) {

}
// {fact rule=use-after-free@v1.0 defects=0}
// GOOD: the concatenated string outlives the call to `work`. So the pointer
// obtainted from `c_str` is valid.
void work_with_combined_string_good(std::string s1, std::string s2) {
  auto combined_string = s1 + s2;
  work(combined_string.c_str());
}
// {/fact}