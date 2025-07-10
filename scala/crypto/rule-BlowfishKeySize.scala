// License: LGPL-3.0 License (c) find-sec-bugs
package crypto

import javax.crypto.KeyGenerator
import java.security.NoSuchAlgorithmException

class BlowfishKeySize {
  // {fact rule=insecure-cryptography@v1.0 defects=1}
  @throws[NoSuchAlgorithmException]
  def danger(): Unit = {
    // ruleid: scala_crypto_rule-BlowfishKeySize
    val keyGen = KeyGenerator.getInstance("Blowfish")
    keyGen.init(64)
  }
  // {/fact}
}
