// {fact rule=insecure-connection@v1.0 defects=1}
// ruleid: detect-insecure-websocket
var scheme   = "ws://";
var uri      = scheme + window.document.location.host + "/";
var ws       = new WebSocket(uri);
ws.onmessage = function(message) {}
// {/fact}

// at start of the line
// ruleid: detect-insecure-websocket
ws://foo/bar

// {fact rule=insecure-connection@v1.0 defects=0}
// ok: detect-insecure-websocket
var secure_url = "wss://my/url";
// {/fact}

// {fact rule=insecure-connection@v1.0 defects=0}
// ok: detect-insecure-websocket
var amazon_url = "aws://my/url";
// {/fact}

// from https://github.com/ytdl-org/youtube-dl/blob/master/youtube_dl/extractor/yahoo.py#L124
// ok: detect-insecure-websocket
// # ytwnews://cavideo/
