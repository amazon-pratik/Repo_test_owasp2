// {fact rule=insecure-connection@v1.0 defects=0}
package main

import (
	"log"
	"net/http"
)

const (
	certFile = "path/to/cert.pem" // Path to your certificate file
	keyFile  = "path/to/key.pem"  // Path to your key file
)

func use(pw string) {
	return
}

func serve1() {
	http.HandleFunc("/register", func(w http.ResponseWriter, r *http.Request) {
		r.ParseForm()
		user := r.Form.Get("user")
		pw := r.Form.Get("password")

		log.Printf("Registering new user %s.\n", user)

		// ...
		use(pw)
	})
	http.ListenAndServeTLS(":80", certFile, keyFile, nil)
}
// {/fact}

func main() {
	
}
