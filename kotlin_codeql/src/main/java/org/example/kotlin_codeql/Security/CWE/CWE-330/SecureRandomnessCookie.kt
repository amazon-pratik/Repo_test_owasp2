//// {fact rule=use-of-insufficiently-random-values@v1.0 defects=unknown}
//import com.sun.org.apache.xerces.internal.impl.dv.util.Base64
//import java.security.SecureRandom
//
//class SecureRandomCookie {
//    init {
//        val r = SecureRandom()
//        val bytes = ByteArray(16)
//        r.nextBytes(bytes)
//        val cookieValue = Base64.encode(bytes)
//        val cookie = Cookie("name", cookieValue)
//        response.addCookie(cookie)
//    }
//}
//// {/fact}
