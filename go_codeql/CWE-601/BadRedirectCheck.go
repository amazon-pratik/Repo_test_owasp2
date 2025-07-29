// {fact rule=cross-site-scripting@v1.0 defects=1}
package main

func sanitizeUrl(redir string) string {
	if len(redir) > 0 && redir[0] == '/' {
		return redir
	}
	return "/"
}
// {/fact}
