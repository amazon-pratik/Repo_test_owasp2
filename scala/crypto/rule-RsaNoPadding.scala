// License: LGPL-3.0 License (c) find-sec-bugs
// source: https://github.com/find-sec-bugs/find-sec-bugs/blob/master/findsecbugs-samples-java/src/test/java/testcode/crypto/RsaNoPadding.java
// hash: a7694d0

package crypto

import javax.crypto.Cipher


/**
 * Code sample taken from : http://cwe.mitre.org/data/definitions/780.html
 */
class RsaNoPadding {
  @throws[Exception]
  def rsaCipherOk(): Unit = {
    Cipher.getInstance("RSA/ECB/OAEPWithMD5AndMGF1Padding")
    Cipher.getInstance("RSA")
    Cipher.getInstance("RSA/ECB/OAEPWithMD5AndMGF1Padding", "BC")
  }

  @throws[Exception]
  def rsaCipherWeak(): Unit = {
    // {fact rule=insecure-rsa-algorithm@v1.0 defects=1}
    // ruleid: scala_crypto_rule-RsaNoPadding
    Cipher.getInstance("RSA/NONE/NoPadding")
    // {/fact}
    // {fact rule=insecure-rsa-algorithm@v1.0 defects=1}
    // ruleid: scala_crypto_rule-RsaNoPadding
    Cipher.getInstance("RSA/NONE/NoPadding", "BC")
    // {/fact}
  }

  @throws[Exception]
  def dataflowCipherWeak(): Unit = {
    val cipher1 = null
    Cipher.getInstance(cipher1)
    val cipher2 = "RSA/NONE/NoPadding"
    // {fact rule=insecure-rsa-algorithm@v1.0 defects=1}
    // ruleid: scala_crypto_rule-RsaNoPadding
    Cipher.getInstance(cipher2)
    // {/fact}
    val cipher3 = null
    Cipher.getInstance(cipher3)
  }
}
