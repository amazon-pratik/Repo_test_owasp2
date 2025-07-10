var untrusted_code = '"toString": !<tag:yaml.org,2002:js/function> "function (){very_evil_thing();}"';
var notneeded = 1;
// {fact rule=untrusted-deserialization@v1.0 defects=1}

// I'm just converting that string, what could possibly go wrong?
// ruleid:yaml_deserialize
require('js-yaml').load(untrusted_code) + ''
// {/fact}


var yaml = require('js-yaml')

import yaml2 from 'js-yaml';
// {fact rule=untrusted-deserialization@v1.0 defects=1}

// ruleid:yaml_deserialize
yaml.load(untrusted_code)
// {/fact}

// {fact rule=untrusted-deserialization@v1.0 defects=1}

// ruleid:yaml_deserialize
yaml2.load(untrusted_code)
// {/fact}
