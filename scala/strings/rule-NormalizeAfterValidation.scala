// License: LGPL-3.0 License (c) find-sec-bugs
package strings

import java.text.Normalizer
import java.util.regex.Matcher
import java.util.regex.Pattern


class NormalizeAfterValidation {
  // {fact rule=collapse-of-data@v1.0 defects=1}
  def normalizeDanger(s: CharSequence) = {
    // ruleid: scala_strings_rule-NormalizeAfterValidation
    val pattern = Pattern.compile("[<>]") // Check for angle brackets
    val matcher = pattern.matcher(s)
    if (matcher.find) throw new IllegalStateException
    Normalizer.normalize(s, Normalizer.Form.NFKC) // normalized after validation

  }
  // {/fact}
}
