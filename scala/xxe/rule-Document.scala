// License: LGPL-3.0 License (c) find-sec-bugs
package xxe

import org.xml.sax.InputSource
import javax.xml.XMLConstants
import javax.xml.parsers.DocumentBuilder
import javax.xml.parsers.DocumentBuilderFactory


object DocumentXXE {
  @throws[Exception]
  def main(args: Array[String]): Unit = {
    unsafe1(args(0))
    unsafe2(args(0))
    unsafe3(args(0))
  }

  // {fact rule=xml-external-entity@v1.0 defects=1}
  @throws[Exception]
  def unsafe1(str: String): Unit = {
    val df = DocumentBuilderFactory.newInstance
    df.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, false)
    val builder = df.newDocumentBuilder
    // ruleid: scala_xxe_rule-Document
    builder.parse(str)
  }
  // {/fact}


  // {fact rule=xml-external-entity@v1.0 defects=1}
  @throws[Exception]
  def unsafe2(str: String): Unit = {
    val df = DocumentBuilderFactory.newInstance
    df.setFeature("http://apache.org/xml/features/disallow-doctype-decl", false)
    val builder = df.newDocumentBuilder
    // ruleid: scala_xxe_rule-Document
    builder.parse(str)
  }
  // {/fact}

  
  // {fact rule=xml-external-entity@v1.0 defects=1}
  @throws[Exception]
  def unsafe3(str: String): Unit = {
    val df = DocumentBuilderFactory.newInstance
    val builder = df.newDocumentBuilder
    // ruleid: scala_xxe_rule-Document
    builder.parse(str)
  }
  // {/fact}
}
