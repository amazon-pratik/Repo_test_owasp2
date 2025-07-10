using System;
using System.Web;
using System.Xml;
using System.Xml.XPath;
using System.Xml.Xsl;

public class XPathInjectionHandler : IHttpHandler
{
    public void ProcessRequest(HttpContext ctx)
    {
        string userName = (string)ctx.Request;

        //{fact rule=xpath-injection@v1.0 defects=1}
        // BAD: Use user-provided data directly in an XPath expression
        string badXPathExpr = "//users/user[login/text()='" + userName + "']/home_dir/text()";
        XPathExpression.Compile(badXPathExpr);
        //{/fact}

        //{fact rule=xpath-injection@v1.0 defects=0}
        // GOOD: XPath expression uses variables to refer to parameters
        string xpathExpression = "//users/user[login/text()=$username]/home_dir/text()";
        XPathExpression xpath = XPathExpression.Compile(xpathExpression);
        //{/fact}

        // Arguments are provided as a XsltArgumentList()
        XsltArgumentList varList = new XsltArgumentList();
        varList.AddParam("userName", string.Empty, userName);

        // CustomContext is an application specific class, that looks up variables in the
        // expression from the varList.
        CustomContext context = new CustomContext(new NameTable(), varList);
      xpath.SetContext((IXmlNamespaceResolver?)context);
    }
}

internal class CustomContext
{
    private NameTable nameTable;
    private XsltArgumentList varList;

    public CustomContext(NameTable nameTable, XsltArgumentList varList)
    {
        this.nameTable = nameTable;
        this.varList = varList;
    }
}