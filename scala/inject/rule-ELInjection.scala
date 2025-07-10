// License: LGPL-3.0 License (c) find-sec-bugs
package inject

import javax.el._
import javax.faces.context.FacesContext


class ELInjection {
  // {fact rule=code-injection@v1.0 defects=1}
  def valueExpr(expression: String) = {
    val context = FacesContext.getCurrentInstance
    val expressionFactory = context.getApplication.getExpressionFactory
    val elContext = context.getELContext
    // ruleid: scala_inject_rule-ELInjection
    val vex = expressionFactory.createValueExpression(elContext, expression, classOf[Nothing])
    vex.getValue(elContext).asInstanceOf[Nothing]
  }
  // {/fact}


  // {fact rule=code-injection@v1.0 defects=1}
  def methodExpr(expression: String) = {
    val context = FacesContext.getCurrentInstance
    val expressionFactory = context.getApplication.getExpressionFactory
    val elContext = context.getELContext
    // ruleid: scala_inject_rule-ELInjection
    val ex = expressionFactory.createMethodExpression(elContext, expression, classOf[Nothing], null)
    ex.getMethodInfo(elContext)
  }
  // {/fact}
}
