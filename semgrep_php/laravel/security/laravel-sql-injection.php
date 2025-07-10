<?php

$tainted = $_GET['userinput'];

// https://laravel.com/docs/8.x/database
// Since unprepared statements do not bind parameters, they may be vulnerable to SQL injection. You should never allow user controlled values within an unprepared statement.
// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-sql-injection
DB::unprepared("update users set votes = 100 where name = '$tainted'");
// {/fact}

// https://laravel.com/docs/8.x/queries
// PDO does not support binding column names. Therefore, you should never allow user input to dictate the column names referenced by your queries, including "order by" columns.
// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-sql-injection
$user = DB::table('users')->where($tainted, 'John')->first();
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-sql-injection
$titles = DB::table('users')->pluck($tainted);
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-sql-injection
DB::table('users')->orderBy($tainted);
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-sql-injection
$price = DB::table('orders')->max($tainted);
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-sql-injection
$query = DB::table('users')->select($tainted);
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
// ok: laravel-sql-injection
$user = DB::table('users')->where('name', $tainted)->first();
// {/fact}

// https://laravel.com/docs/8.x/queries
// Raw statements will be injected into the query as strings, so you should be extremely careful to avoid creating SQL injection vulnerabilities.
// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-sql-injection
$users = DB::table('users')->select(DB::raw($tainted));
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-sql-injection
$orders = DB::table('orders')->selectRaw($tainted);
// {/fact}

// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-sql-injection
$orders = DB::table('orders')->whereRaw($tainted);
// {/fact}

// {fact rule=sql-injection@v1.0 defects=0}
// ok: laravel-sql-injection
$orders = DB::table('orders')->selectRaw('price * ? as price_with_tax', [$tainted]);
// {/fact}

