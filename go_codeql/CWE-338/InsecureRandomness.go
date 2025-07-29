// {fact rule=weak-random-number-generation@v1.0 defects=1}
package main

import (
	"math/rand"
)

var charset = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")

func generatePassword() string {
	s := make([]rune, 20)
	for i := range s {
		s[i] = charset[rand.Intn(len(charset))]
	}
	return string(s)
}

// {/fact}

func main() {
	
}
