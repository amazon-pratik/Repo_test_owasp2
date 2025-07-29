// {fact rule=client-constructor-deprecated-rule@v1.0 defects=0}
package main

import (
	"path/filepath"
	"strings"
)

func isRel_1(candidate, target string) bool {
	// GOOD: resolves all symbolic links before checking
	// that `candidate` does not escape from `target`
	if filepath.IsAbs(candidate) {
		return false
	}
	realpath, err := filepath.EvalSymlinks(filepath.Join(target, candidate))
	if err != nil {
		return false
	}
	relpath, err := filepath.Rel(target, realpath)
	return err == nil && !strings.HasPrefix(filepath.Clean(relpath), "..")
}
// {/fact}

func main() {
	
}