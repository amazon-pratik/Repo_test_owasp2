// License: LGPL-3.0 License (c) find-sec-bugs
package cors

import javax.servlet.ServletException
import javax.servlet.http.HttpServlet
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import java.io.IOException

class PermissiveCORS extends HttpServlet {
  override protected def doGet(req: HttpServletRequest, resp: HttpServletResponse): Unit = {
    falsePositiveCORS(resp)
    resp.getWriter.print(req.getSession.getAttribute("secret"))
  }

  private def falsePositiveCORS(resp: HttpServletResponse): Unit = {
    resp.addHeader("Access-Control-Allow-Origin", "http://example.com") // OK
  }

  // Overly permissive Cross-domain requests accepted
  // {fact rule=insecure-cors-policy@v1.0 defects=1}
  def addPermissiveCORS(resp: HttpServletResponse): Unit = {
    // ruleid: scala_cors_rule-PermissiveCORS
    resp.addHeader("Access-Control-Allow-Origin", "*") // BAD

  }
  // {/fact}

  // {fact rule=insecure-cors-policy@v1.0 defects=1}
  def addPermissiveCORS2(resp: HttpServletResponse): Unit = {
    // ruleid: scala_cors_rule-PermissiveCORS
    resp.addHeader("access-control-allow-origin", "*")
  }
  // {/fact}

  // {fact rule=insecure-cors-policy@v1.0 defects=1}
  def addWildcardsCORS(resp: HttpServletResponse): Unit = {
    // ruleid: scala_cors_rule-PermissiveCORS
    resp.addHeader("Access-Control-Allow-Origin", "*.example.com")
  }
  // {/fact}

  // {fact rule=insecure-cors-policy@v1.0 defects=1}
  def addNullCORS(resp: HttpServletResponse): Unit = {
    // ruleid: scala_cors_rule-PermissiveCORS
    resp.addHeader("Access-Control-Allow-Origin", "null")
  }
  // {/fact}

  // {fact rule=insecure-cors-policy@v1.0 defects=1}
  def setPermissiveCORS(resp: HttpServletResponse): Unit = {
    // ruleid: scala_cors_rule-PermissiveCORS
    resp.setHeader("Access-Control-Allow-Origin", "*")
  }
  // {/fact}

  // {fact rule=insecure-cors-policy@v1.0 defects=1}
  def setPermissiveCORSWithRequestVariable(resp: HttpServletResponse, req: HttpServletRequest): Unit = {
    // ruleid: scala_cors_rule-PermissiveCORS
    resp.setHeader("Access-Control-Allow-Origin", req.getParameter("tainted"))
  }
  // {/fact}

  // {fact rule=insecure-cors-policy@v1.0 defects=1}
  def setPermissiveCORSWithRequestVariable2(resp: HttpServletResponse, req: HttpServletRequest): Unit = {
    val header = req.getParameter("tainted")
    // ruleid: scala_cors_rule-PermissiveCORS
    resp.addHeader("access-control-allow-origin", header)
  }
  // {/fact}
}
