<?php
// https://www.cloudways.com/blog/laravel-security/
Route::get('this-is-prone-to-sql-injection', function($name) {
return DB::select(
// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-api-route-sql-injection
DB::raw("SELECT * FROM users WHERE name = $name"));
// {/fact}
});

Route::get('this-is-also-prone-to-sql-injection', function($name) {
return DB::select(
// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-api-route-sql-injection
DB::raw("SELECT * FROM users WHERE name = " . $name));
// {/fact}
});

Route::get('this-is-prone-to-sql-injection-too', function($name) {
return DB::select(
// {fact rule=sql-injection@v1.0 defects=1}
// ruleid: laravel-api-route-sql-injection
DB::raw("SELECT * FROM users WHERE name = $name AND someproperty = foo"));
// {/fact}
});

Route::get('safe-from-sql-injection', function($name) {
return DB::select(
// {fact rule=sql-injection@v1.0 defects=0}
// ok: laravel-api-route-sql-injection
DB::raw("SELECT * FROM users WHERE name = ?", [$name]));
// {/fact}
});
?>
