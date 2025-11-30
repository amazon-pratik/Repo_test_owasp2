//// {fact rule=excessive-permissions-grant@v1.0 defects=0}
//class UnsafeAndroidAccess : Activity() {
//    fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        setContentView(R.layout.webview)
//
//        // BAD: Have both JavaScript and cross-origin resource access enabled in webview while
//        // taking remote user inputs
//        run {
//            val wv: WebView = findViewById(R.id.my_webview) as WebView
//            val webSettings: WebSettings = wv.getSettings()
//            webSettings.setJavaScriptEnabled(true)
//            webSettings.setAllowUniversalAccessFromFileURLs(true)
//            wv.setWebViewClient(object : WebViewClient() {
//                fun shouldOverrideUrlLoading(view: WebView, url: String?): Boolean {
//                    view.loadUrl(url)
//                    return true
//                }
//            })
//            val thisUrl: String = getIntent().getExtras().getString("url") // dangerous remote input from  the intent's Bundle of extras
//            wv.loadUrl(thisUrl)
//        }
//
//        // BAD: Have both JavaScript and cross-origin resource access enabled in webview while
//        // taking remote user inputs
//        run {
//            val wv: WebView = findViewById(R.id.my_webview) as WebView
//            val webSettings: WebSettings = wv.getSettings()
//            webSettings.setJavaScriptEnabled(true)
//            webSettings.setAllowUniversalAccessFromFileURLs(true)
//            wv.setWebViewClient(object : WebViewClient() {
//                fun shouldOverrideUrlLoading(view: WebView, url: String?): Boolean {
//                    view.loadUrl(url)
//                    return true
//                }
//            })
//            val thisUrl: String = getIntent().getStringExtra("url") //dangerous remote input from intent extra
//            wv.loadUrl(thisUrl)
//        }
//
//        // GOOD: Have JavaScript and cross-origin resource access disabled by default on modern Android (Jellybean+) while taking remote user inputs
//        run {
//            val wv: WebView = findViewById(-1) as WebView
//            val webSettings: WebSettings = wv.getSettings()
//            wv.setWebViewClient(object : WebViewClient() {
//                fun shouldOverrideUrlLoading(view: WebView, url: String?): Boolean {
//                    view.loadUrl(url)
//                    return true
//                }
//            })
//            val thisUrl: String = getIntent().getExtras().getString("url") // remote input
//            wv.loadUrl(thisUrl)
//        }
//
//        // GOOD: Have JavaScript enabled in webview but remote user input is not allowed
//        run {
//            val wv: WebView = findViewById(-1) as WebView
//            val webSettings: WebSettings = wv.getSettings()
//            webSettings.setJavaScriptEnabled(true)
//            wv.setWebViewClient(object : WebViewClient() {
//                fun shouldOverrideUrlLoading(view: WebView, url: String?): Boolean {
//                    view.loadUrl(url)
//                    return true
//                }
//            })
//            wv.loadUrl("https://www.mycorp.com")
//        }
//    }
//}
// {/fact}
