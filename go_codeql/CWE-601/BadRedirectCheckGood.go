// {fact rule=cross-site-scripting@v1.0 defects=1}
package main

func sanitizeUrl1(redir string) string {
	if len(redir) > 1 && redir[0] == '/' && redir[1] != '/' && redir[1] != '\\' {
		return redir
	}
	return "/"
}
// {/fact}
