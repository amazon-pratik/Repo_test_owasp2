//// {ex-fact rule=improper-certificate-validation@v1.0" defects=0}
//internal class Bad : WebViewClient() {
//    // BAD: All certificates are trusted.
//    fun onReceivedSslError(view: WebView?, handler: SslErrorHandler, error: SslError?) { // $hasResult
//        handler.proceed()
//    }
//}
//
//internal class Good : WebViewClient() {
//    var myPubKey: PublicKey? = null
//
//    // GOOD: Only certificates signed by a certain public key are trusted.
//    fun onReceivedSslError(view: WebView?, handler: SslErrorHandler, error: SslError) { // $hasResult
//        try {
//            val cert: X509Certificate = error.getCertificate().getX509Certificate()
//            cert.verify(myPubKey)
//            handler.proceed()
//        } catch (e: CertificateException) {
//            handler.cancel()
//        } catch (e: NoSuchAlgorithmException) {
//            handler.cancel()
//        } catch (e: InvalidKeyException) {
//            handler.cancel()
//        } catch (e: NoSuchProviderException) {
//            handler.cancel()
//        } catch (e: SignatureException) {
//            handler.cancel()
//        }
//    }
//}
// {/ex-fact}
