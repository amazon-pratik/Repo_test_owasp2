var node_serialize = require("node-serialize")
var serialize_to_js = require('serialize-to-js');

module.exports.value = function (req,res){
	// {fact rule=untrusted-deserialization@v1.0 defects=1}
	// ruleid: express-third-party-object-deserialization
	node_serialize.unserialize(req.files.products.data.toString('utf8'))
	// {/fact}

	// {fact rule=untrusted-deserialization@v1.0 defects=0}
	// ok: express-third-party-object-deserialization
	fake.unserialize(req.files)
	// {/fact}
}


module.exports.value1 = function (req,res){
	var str = new Buffer(req.cookies.profile, 'base64').toString();
	// {fact rule=untrusted-deserialization@v1.0 defects=1}
	// ruleid: express-third-party-object-deserialization
	serialize_to_js.deserialize(str)
	// {/fact}
	
	// {fact rule=untrusted-deserialization@v1.0 defects=0}
	// ok: express-third-party-object-deserialization
	foo.deserialize(str)
	// {/fact}
}
