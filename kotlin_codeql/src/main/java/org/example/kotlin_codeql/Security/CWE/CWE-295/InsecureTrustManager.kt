//// {ex-fact rule=improper-certificate-validation@v1.0" defects=1}
//internal class InsecureTrustManager : X509TrustManager {
//    val acceptedIssuers: Array<Any>?
//        get() = null
//
//    @Throws(CertificateException::class)
//    fun checkServerTrusted(chain: Array<X509Certificate?>?, authType: String?) {
//        // BAD: Does not verify the certificate chain, allowing any certificate.
//    }
//
//    @Throws(CertificateException::class)
//    fun checkClientTrusted(chain: Array<X509Certificate?>?, authType: String?) {
//    }
//
//    var context: SSLContext = SSLContext.getInstance("TLS")
//    var trustManager: Array<TrustManager> = arrayOf(InsecureTrustManager())
//}
//// {/ex-fact}
