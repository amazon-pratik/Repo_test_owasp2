//// {fact rule=excessive-permissions-grant@v1.0 defects=0}
//import java.io.StringReader
//import java.io.StringWriter
//import java.net.Socket
//import javax.xml.XMLConstants
//import javax.xml.transform.TransformerFactory
//import javax.xml.transform.stream.StreamResult
//import javax.xml.transform.stream.StreamSource
//
//class XsltInjection {
//    @Throws(Exception::class)
//    fun transform(socket: Socket, inputXml: String?) {
//        val xslt = StreamSource(socket.getInputStream())
//        val xml = StreamSource(StringReader(inputXml))
//        val result = StringWriter()
//        val factory = TransformerFactory.newInstance()
//
//        // BAD: User provided XSLT stylesheet is processed
//        factory.newTransformer(xslt).transform(xml, StreamResult(result))
//
//        // GOOD: The secure processing mode is enabled
//        factory.setFeature(XMLConstants.FEATURE_SECURE_PROCESSING, true)
//        factory.newTransformer(xslt).transform(xml, StreamResult(result))
//    }
//}
// {/fact}
