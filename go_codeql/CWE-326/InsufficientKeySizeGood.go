// {fact rule=cryptographic-key-generator@v1.0 defects=0}
package main

import (
	"crypto/rand"
	"crypto/rsa"
	"fmt"
)

func main_1() {
	//Generate Private Key
	pvk, err := rsa.GenerateKey(rand.Reader, 2048)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println(pvk)
}
// {/fact}
