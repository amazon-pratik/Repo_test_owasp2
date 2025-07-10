import groovy.lang.GroovyClassLoader
import jakarta.servlet.http.HttpServletRequest

// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=0}
class SandboxGroovyClassLoader(parent: ClassLoader?) : ClassLoader(parent) {
    companion object {
        /* override `loadClass` here to prevent loading sensitive classes, such as `java.lang.Runtime`, `java.lang.ProcessBuilder`, `java.lang.System`, etc.  */ /* Note we must also block `groovy.transform.ASTTest`, `groovy.lang.GrabConfig` and `org.buildobjects.process.ProcBuilder` to prevent compile-time RCE. */
        @Throws(Exception::class)
        fun runWithSandboxGroovyClassLoader(request: HttpServletRequest) {
            // GOOD: route all class-loading via sand-boxing classloader.
            val classLoader: SandboxGroovyClassLoader = SandboxGroovyClassLoader(GroovyClassLoader())
            val scriptClass: Class<*> = classLoader.loadClass(request.getQueryString())
            val scriptInstance = scriptClass.newInstance()
            val result = scriptClass.getDeclaredMethod("bar", *arrayOf()).invoke(scriptInstance, *arrayOf())
        }
    }
}
// {/fact}
