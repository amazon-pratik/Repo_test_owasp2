package org.example.kotlin_codeql.Security.CWE.`CWE-094`// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=unknown}

import org.apache.commons.jexl3.*
import org.apache.commons.jexl3.introspection.JexlSandbox
import java.io.BufferedReader

import java.io.IOException
import java.io.InputStreamReader

import java.net.Socket


@Throws(IOException::class)
fun evaluate(socket: Socket) {
    BufferedReader(
            InputStreamReader(socket.getInputStream())
    ).use { reader ->
        val onlyMath = JexlSandbox(false)
        onlyMath.white("java.lang.Math")
        val jexl: JexlEngine = JexlBuilder().sandbox(onlyMath).create()
        val input = reader.readLine()
        val expression: JexlExpression = jexl.createExpression(input)
        val context: JexlContext = MapContext()
        expression.evaluate(context)
    }
}
// {/fact}
