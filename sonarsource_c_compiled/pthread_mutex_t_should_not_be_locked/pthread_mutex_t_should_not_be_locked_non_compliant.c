#include <pthread.h>

pthread_mutex_t m3 = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t m4 = PTHREAD_MUTEX_INITIALIZER;
// {fact rule=thread-safety-violation@v1.0 defects=1}
void locks() {
  pthread_mutex_lock(&m3);
  pthread_mutex_lock(&m3); // Noncompliant: 'm1' is already acquired
}
// {/fact}
// {fact rule=thread-safety-violation@v1.0 defects=1}
void unlocks() {
  pthread_mutex_unlock(&m3);
  pthread_mutex_unlock(&m3); // Noncompliant: 'm1' is already released
}
// {/fact}