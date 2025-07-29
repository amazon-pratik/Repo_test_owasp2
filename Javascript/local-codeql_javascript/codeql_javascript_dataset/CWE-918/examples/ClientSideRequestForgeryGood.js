//{fact rule=server-side-request-forgery@v1.0 defects=0}

async function loadMessage() {
    const query = new URLSearchParams(location.search);
    const url = '/api/messages/' + Number(query.get('message_id'));
    const data = await (await fetch(url)).json();
    document.getElementById('message').innerHTML = data.html;
}


//{/fact}