package org.example.kotlin_codeql.Security.CWE.`CWE-094`// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=unknown}

import com.sun.tools.example.debug.expr.ExpressionParser
import org.codehaus.groovy.ast.expr.Expression
import org.springframework.expression.spel.standard.SpelExpressionParser
import org.springframework.expression.spel.support.SimpleEvaluationContext

import java.io.BufferedReader

import java.io.IOException
import java.io.InputStreamReader

import java.net.Socket


@Throws(IOException::class)
fun evaluate_2(socket: Socket): Any? {
    BufferedReader(
            InputStreamReader(socket.getInputStream())
    ).use { reader ->
        val string = reader.readLine()
        val parser: SpelExpressionParser = SpelExpressionParser()
        val expression: org.springframework.expression.Expression = parser.parseExpression(string)
        val context: SimpleEvaluationContext = SimpleEvaluationContext.forReadWriteDataBinding().build()
        return expression.getValue(context)
    }
}
// {/fact}
