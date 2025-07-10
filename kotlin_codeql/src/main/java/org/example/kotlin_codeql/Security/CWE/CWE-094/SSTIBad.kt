import jakarta.servlet.http.HttpServletRequest
import org.apache.velocity.VelocityContext
import org.apache.velocity.app.Velocity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import java.io.StringWriter

// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=1}
@Controller
class VelocitySSTI {
    @GetMapping(value = arrayOf("bad"))
    fun bad(request: HttpServletRequest) {
        Velocity.init()
        val code: String = request.getParameter("code")
        val context = VelocityContext()
        context.put("name", "Velocity")
        context.put("project", "Jakarta")
        val w = StringWriter()
        // org.example.kotlin_codeql.Security.CWE.`CWE-094`.org.example.kotlin_codeql.Security.CWE.`CWE-094`.org.example.kotlin_codeql.Security.CWE.`CWE-094`.org.example.kotlin_codeql.Security.CWE.`CWE-094`.evaluate( Context context, Writer out, String logTag, String instring )
        Velocity.evaluate(context, w, "mystring", code)
    }
}
// {/fact}
