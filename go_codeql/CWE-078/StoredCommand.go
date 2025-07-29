// {fact rule=os-command-injection@v1.0 defects=1}
package main

import (
	"database/sql"
	"os/exec"
)

var db *sql.DB

func run(query string) {
	rows, _ := db.Query(query)
	var cmdName string
	rows.Scan(&cmdName)
	cmd := exec.Command(cmdName)
	cmd.Run()
}
// {/fact}
