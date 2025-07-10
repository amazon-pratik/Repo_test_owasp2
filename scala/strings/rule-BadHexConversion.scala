// License: LGPL-3.0 License (c) find-sec-bugs
package strings

import java.io.UnsupportedEncodingException
import java.security.MessageDigest
import java.security.NoSuchAlgorithmException

class BadHexConversion {
  @throws[NoSuchAlgorithmException]
  @throws[UnsupportedEncodingException]


  // {fact rule=nan-injection@v1.0 defects=1}
  def danger(text: String) = {
    val md: MessageDigest = MessageDigest.getInstance("SHA-256")
    // ruleid: scala_strings_rule-BadHexConversion
    val resultBytes = md.digest(text.getBytes("UTF-8"))
    val stringBuilder = new StringBuilder
    for (b <- resultBytes) {
      stringBuilder.append(Integer.toHexString(b))
    }
    stringBuilder.toString
  }
  // {/fact}


  // {fact rule=nan-injection@v1.0 defects=1}
  @throws[NoSuchAlgorithmException]
  @throws[UnsupportedEncodingException]
  def danger2(text: String) = {
    val md: MessageDigest = MessageDigest.getInstance("SHA-256")
    // ruleid: scala_strings_rule-BadHexConversion
    val resultBytes = md.digest(text.getBytes("UTF-8"))
    val stringBuilder = new StringBuilder
    var i = 0
    val resultBytesLength = resultBytes.length
    while ({
      i < resultBytesLength
    }) {
      val b = resultBytes(i)
      stringBuilder.append(Integer.toHexString(b))
      i += 1
    }
    stringBuilder.toString
  }
  // {/fact}
}
