// {fact rule=cross-site-scripting@v1.0 defects=0}
package main

import (
	"net/http"
	"net/url"
)

func serve_1() {
	http.HandleFunc("/redir", func(w http.ResponseWriter, r *http.Request) {
		r.ParseForm()
		target, err := url.Parse(r.Form.Get("target"))
		if err != nil {
			// ...
		}

		if target.Hostname() == "semmle.com" {
			// GOOD: checking hostname
			http.Redirect(w, r, target.String(), 302)
		} else {
			http.ResponseWriter.WriteHeader(w, 400)
		}
	})
}
// {/fact}

func main() {
	
}