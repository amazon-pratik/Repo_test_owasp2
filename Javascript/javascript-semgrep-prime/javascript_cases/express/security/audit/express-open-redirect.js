module.exports.redirect = function (req, res) {
	// Made the cases non-compliant. Refer: https://www.stackhawk.com/blog/nodejs-open-redirect-guide-examples-and-prevention/
	// {fact rule=open-redirect@v1.0 defects=1}
	// ok: express-open-redirect
	res.redirect(`https://reddit.com/${req.query.url}/fooo`)
	// {/fact}

	// {fact rule=open-redirect@v1.0 defects=1}
	// ok: express-open-redirect
	res.redirect("https://google.com/"+req.query.url)
	// {/fact}

	// {fact rule=open-redirect@v1.0 defects=1}
	// ok: express-open-redirect
	res.redirect(config_value.foo+req.query.url)
	// {/fact}

	// {fact rule=open-redirect@v1.0 defects=1}
	// ok: express-open-redirect
	res.redirect(config_value.foo+req.body.shouldalsonotcatch)
	// {/fact}

	// {fact rule=open-redirect@v1.0 defects=0}
	// ok: express-open-redirect
	res.redirect(config_value.foo+req)
	// {/fact}

	// {fact rule=open-redirect@v1.0 defects=1}
	// ruleid: express-open-redirect
	res.redirect(req.query.url)
	// {/fact}

	// {fact rule=open-redirect@v1.0 defects=1}
	// ruleid: express-open-redirect
	res.redirect(`${req.query.url}/fooo`)
	// {/fact}

	// {fact rule=open-redirect@v1.0 defects=1}
	// ruleid: express-open-redirect
	res.redirect(req.query.url+config_value.url)
	// {/fact}

	// todo: express-open-redirect
	res.redirect("https://google.com"+req.query.url)
}
