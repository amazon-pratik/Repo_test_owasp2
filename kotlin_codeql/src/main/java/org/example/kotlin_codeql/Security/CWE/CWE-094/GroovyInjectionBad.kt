import groovy.lang.GroovyClassLoader
import groovy.lang.GroovyCodeSource
import groovy.lang.GroovyObject
import groovy.lang.GroovyShell
import groovy.util.Eval
import jakarta.servlet.http.HttpServletRequest

// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=1}
class GroovyInjection {
    fun injectionViaClassLoader(request: HttpServletRequest) {
        val script: String = request.getParameter("script")
        val classLoader = GroovyClassLoader()
        val groovy: Class<*> = classLoader.parseClass(script)
        val groovyObj: GroovyObject = groovy.newInstance() as GroovyObject
    }

    fun injectionViaEval(request: HttpServletRequest) {
        val script: String = request.getParameter("script")
        Eval.me(script)
    }

    fun injectionViaGroovyShell(request: HttpServletRequest) {
        val shell = GroovyShell()
        val script: String = request.getParameter("script")
        shell.evaluate(script)
    }

    fun injectionViaGroovyShellGroovyCodeSource(request: HttpServletRequest) {
        val shell = GroovyShell()
        val script: String = request.getParameter("script")
        val gcs = GroovyCodeSource(script, "test", "Test")
        shell.evaluate(gcs)
    }
}
// {/fact}
