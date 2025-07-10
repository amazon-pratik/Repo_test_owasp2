// License: LGPL-3.0 License (c) find-sec-bugs
package strings

import java.text.Normalizer
import java.util.regex.Matcher
import java.util.regex.Pattern


class ModifyAfterValidation {

  // {fact rule=collapse-of-data@v1.0 defects=1}
  def modifyDanger(str: String) = {
    var s = Normalizer.normalize(str, Normalizer.Form.NFKC)
    val pattern = Pattern.compile("<script>")
    // ruleid: scala_strings_rule-ModifyAfterValidation
    val matcher = pattern.matcher(s)
    if (matcher.find) throw new IllegalArgumentException("Invalid input")
    s = s.replaceAll("[\\p{Cn}]", "") // modified after validation

    s
  }
  // {/fact}


  // {fact rule=collapse-of-data@v1.0 defects=1}
  def modifyDanger2(str: String) = {
    var s = Normalizer.normalize(str, Normalizer.Form.NFKC)
    val pattern = Pattern.compile("<script>")
    // ruleid: scala_strings_rule-ModifyAfterValidation
    val matcher = pattern.matcher(s)
    if (matcher.find) throw new Exception("Invalid input")
    s = s.replace("[\\p{Cn}]", "")
    s
  }
  // {/fact}
}
