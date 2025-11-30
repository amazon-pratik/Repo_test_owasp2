// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=unknown}

import com.sun.tools.example.debug.expr.ExpressionParser
import org.springframework.expression.Expression
import org.springframework.expression.spel.standard.SpelExpressionParser

import java.io.BufferedReader

import java.io.IOException
import java.io.InputStreamReader

import java.net.Socket


@Throws(IOException::class)
fun evaluate(socket: Socket): Any? {
    BufferedReader(
            InputStreamReader(socket.getInputStream())
    ).use { reader ->
        val string = reader.readLine()
        val parser: SpelExpressionParser = SpelExpressionParser()
        val expression: Expression = parser.parseExpression(string)
        return expression.getValue()
    }
}
// {/fact}
