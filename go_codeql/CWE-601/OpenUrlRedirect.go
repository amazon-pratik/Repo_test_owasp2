// {fact rule=cross-site-scripting@v1.0 defects=1}
package main

import (
	"net/http"
)

func serve() {
	http.HandleFunc("/redir", func(w http.ResponseWriter, r *http.Request) {
		r.ParseForm()
		http.Redirect(w, r, r.Form.Get("target"), 302)
	})
}

// {/fact}
