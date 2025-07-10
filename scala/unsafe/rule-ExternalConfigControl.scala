// License: LGPL-3.0 License (c) find-sec-bugs
package unsafe

import javax.servlet.http.HttpServletRequest
import java.sql.Connection
import java.sql.SQLException

class ExternalConfigControl {
  private val globalReq: HttpServletRequest = null
  private val globalConn: Connection = null

  // {fact rule=external-control-system@v1.0 defects=1}
  @throws[SQLException]
  def callSetCatalog(c: Connection, req: HttpServletRequest): Unit = {
    // ruleid: scala_unsafe_rule-ExternalConfigControl
    val tainted = req.getParameter("input")
    c.setCatalog(tainted)
    c.setCatalog("safe") // ok

    c.setCatalog("very ".concat("safe").toUpperCase)
  }
  // {/fact}


  // {fact rule=external-control-system@v1.0 defects=1}
  @throws[SQLException]
  def callSetCatalog2(c: Connection): Unit = {
    // ruleid: scala_unsafe_rule-ExternalConfigControl
    val tainted = globalReq.getParameter("input")
    c.setCatalog(tainted)
    c.setCatalog("safe")
    c.setCatalog("very ".concat("safe").toUpperCase)
  }
  // {/fact}


  // {fact rule=external-control-system@v1.0 defects=1}
  @throws[SQLException]
  def callSetCatalog3(): Unit = {
    // ruleid: scala_unsafe_rule-ExternalConfigControl
    val tainted = globalReq.getParameter("input")
    globalConn.setCatalog(tainted)
    globalConn.setCatalog("safe")
    globalConn.setCatalog("very ".concat("safe").toUpperCase)
  }
  // {/fact}
}
