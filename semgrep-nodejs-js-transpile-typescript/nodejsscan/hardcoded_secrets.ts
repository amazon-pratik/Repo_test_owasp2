// Case need to be removed from GT. Already covered by ‘CredSweeper’.

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:node_password
password = '1212';
x = 1;
password = x;
pass = 123;
// {/ex-fact}

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:node_password
PASSWORD = '12211';
// {/ex-fact}

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:node_password
obj['password'] = '121233';
// {/ex-fact}

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:node_password
obj2.password = '1234';
// {/ex-fact}

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:node_password
obj2.pass = '1234';
// {/ex-fact}

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:node_password
obj2["pass"] = '1234';
// {/ex-fact}

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}


// ruleid:node_password
const password = '1212';
// {/ex-fact}

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:node_password
let password = '1212';
// {/ex-fact}

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}

// ruleid:node_password
var password = '1212';
// {/ex-fact}

// {ex-fact rule=hardcoded-credentials@v1.0 defects=1}


// ruleid:node_api_key
angular.module('starter.services', [])
    .constant('api_key', '6e906986c3b199c51fff3154cfb76979')
this.apiUrl = api_url;
// {/ex-fact}
