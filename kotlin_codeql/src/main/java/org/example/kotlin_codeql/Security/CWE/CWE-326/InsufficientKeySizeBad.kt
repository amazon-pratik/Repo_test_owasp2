// {fact rule=insecure-cryptographic-storage@v1.0 defects=1}
import java.security.InvalidAlgorithmParameterException
import java.security.KeyPairGenerator
import java.security.NoSuchAlgorithmException
import java.security.spec.ECGenParameterSpec
import javax.crypto.KeyGenerator

class InsufficientKeySizeBad {
    init {
        val keyGen = KeyGenerator.getInstance("AES")
        keyGen.init(64) // BAD: Key size is less than 128
    }

    @Throws(NoSuchAlgorithmException::class, InvalidAlgorithmParameterException::class)
    fun dummy() {
        val keyPairGen1 = KeyPairGenerator.getInstance("RSA")
        keyPairGen1.initialize(1024) // BAD: Key size is less than 2048
        val keyPairGen2 = KeyPairGenerator.getInstance("DSA")
        keyPairGen2.initialize(1024) // BAD: Key size is less than 2048
        val keyPairGen3 = KeyPairGenerator.getInstance("DH")
        keyPairGen3.initialize(1024) // BAD: Key size is less than 2048
        val keyPairGen4 = KeyPairGenerator.getInstance("EC")
        val ecSpec = ECGenParameterSpec("secp112r1") // BAD: Key size is less than 256
        keyPairGen4.initialize(ecSpec)
    }
}
// {/fact}
