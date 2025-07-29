// {fact rule=client-constructor-deprecated-rule@v1.0 defects=0}
package main

import (
	"archive/zip"
	"io/ioutil"
	"path/filepath"
	"strings"
)

func unzipGood(f string) {
	r, _ := zip.OpenReader(f)
	for _, f := range r.File {
		p, _ := filepath.Abs(f.Name)
		// GOOD: Check that path does not contain ".." before using it
		if !strings.Contains(f.Name, "..") {
			ioutil.WriteFile(p, []byte("present"), 0666)
		}
	}
}
// {/fact}
