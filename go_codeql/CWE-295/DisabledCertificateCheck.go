// {fact rule=improper-certificate-validation@v1.0 defects=1}
package main

import (
	"crypto/tls"
	"net/http"
)

func doAuthReq(authReq *http.Request) *http.Response {
	tr := &http.Transport{
		TLSClientConfig: &tls.Config{InsecureSkipVerify: true},
	}
	client := &http.Client{Transport: tr}
	res, _ := client.Do(authReq)
	return res
}

// {/fact}

func main() {
	
}
