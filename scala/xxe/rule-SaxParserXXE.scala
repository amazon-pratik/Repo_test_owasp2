// License: LGPL-3.0 License (c) find-sec-bugs
package xxe

import org.xml.sax.ErrorHandler
import org.xml.sax.SAXException
import org.xml.sax.helpers.DefaultHandler
import javax.xml.parsers.ParserConfigurationException
import javax.xml.parsers.SAXParser
import javax.xml.parsers.SAXParserFactory
import java.io.ByteArrayInputStream
import java.io.IOException
import java.io.InputStream

object SaxParserXXE {

  // {fact rule=xml-external-entity@v1.0 defects=1}
  @throws[ParserConfigurationException]
  @throws[SAXException]
  @throws[IOException]
  private def receiveXMLStream(inStream: InputStream, defHandler: DefaultHandler): Unit = { // ...
    val spf = SAXParserFactory.newInstance
    val saxParser = spf.newSAXParser
    // ruleid: scala_xxe_rule-SaxParserXXE
    saxParser.parse(inStream, defHandler)
  }
  // {/fact}

  @throws[ParserConfigurationException]
  @throws[SAXException]
  @throws[IOException]
  def main(args: Array[String]): Unit = {
    val xmlString = "<?xml version=\"1.0\"?>" + "<!DOCTYPE test [  <!ENTITY foo SYSTEM \"C:/Code/public.txt\"> ]><test>&foo;</test>" // Tainted input
    val is = new ByteArrayInputStream(xmlString.getBytes)
    receiveXMLStream(is, new DefaultHandler)
  }
}
