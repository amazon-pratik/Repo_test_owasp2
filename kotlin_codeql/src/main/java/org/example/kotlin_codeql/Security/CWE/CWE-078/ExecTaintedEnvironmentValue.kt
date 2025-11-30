import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import java.lang.ProcessBuilder

class ExecTaintedEnvironmentValue {
    // {fact rule=use-of-rsa-algorithm-without-oaep@v1.0 defects=1}
    fun doGet(request: HttpServletRequest, response: HttpServletResponse?) {
        val path: String = request.getParameter("path")
        val processBuilder = ProcessBuilder()
        val env: MutableMap<String, String> = processBuilder.environment()
        // BAD: path is tainted and being added to the environment
        env["PATH"] = path
        processBuilder.start()
    }
// {/fact}
}

