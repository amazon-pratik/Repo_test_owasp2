import jakarta.servlet.http.HttpServletRequest

// {fact rule=use-of-rsa-algorithm-without-oaep@v1.0 defects=0}
internal class ExecTaintedEnvironmentValidated {
    fun doGetRequest(request: HttpServletRequest) {
        val opt: String = request.getParameter("opt")
        val value: String = request.getParameter("value")
        val processBuilder = ProcessBuilder()
        val env: MutableMap<String, String> = processBuilder.environment()

// GOOD: opt and value are checked before being added to the environment
        val permittedJavaOptions = "Something"
        if (permittedJavaOptions.contains(opt) && validOption(opt, value)) {
            env[opt] = value
        }
    }

    private fun validOption(opt: String, value: String): Boolean {
        return false
    }
}
// {/fact}
