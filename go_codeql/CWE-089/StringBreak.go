// {fact rule=cross-site-scripting@v1.0 defects=1}
package main

import (
	"encoding/json"
	"fmt"

	sq "github.com/Masterminds/squirrel"
)

func save(id string, version interface{}) {
	versionJSON, _ := json.Marshal(version)
	sq.StatementBuilder.
		Insert("resources").
		Columns("resource_id", "version_md5").
		Values(id, sq.Expr(fmt.Sprintf("md5('%s')", versionJSON))).
		Exec()
}

// {/fact}
