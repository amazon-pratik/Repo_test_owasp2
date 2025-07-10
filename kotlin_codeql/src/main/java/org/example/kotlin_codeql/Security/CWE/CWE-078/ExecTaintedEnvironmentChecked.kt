import jakarta.servlet.http.HttpServletRequest
import java.lang.ProcessBuilder

// {fact rule=use-of-rsa-algorithm-without-oaep@v1.0 defects=0}
internal class ExecTaintedEnvironmentChecked {
    fun getHomeRequest(request: HttpServletRequest) {
        val builder = ProcessBuilder()
        val env: MutableMap<String, String> = builder.environment()
        val debug: String = request.getParameter("debug")

        // GOOD: Checking the value and not tainting the variable added to the environment
        if (debug != null) {
            env["PYTHONDEBUG"] = "1"
        }
    }
}
// {/fact}
