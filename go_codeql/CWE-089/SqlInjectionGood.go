// {fact rule=cross-site-scripting@v1.0 defects=0}
package main

import (
	"database/sql"
	"net/http"
)

func handlerGood(db *sql.DB, req *http.Request) {
	q := "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='?' ORDER BY PRICE"
	db.Query(q, req.URL.Query()["category"])
}
// {/fact}
