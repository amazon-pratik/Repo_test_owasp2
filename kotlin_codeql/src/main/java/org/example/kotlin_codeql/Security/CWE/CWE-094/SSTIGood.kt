import jakarta.servlet.http.HttpServletRequest
import org.apache.velocity.VelocityContext
import org.apache.velocity.app.Velocity
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import java.io.StringWriter

// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=0}
@Controller
class VelocitySSTIGood {
    @GetMapping(value = arrayOf("good"))
    fun good(request: HttpServletRequest?) {
        Velocity.init()
        val context = VelocityContext()
        context.put("name", "Velocity")
        context.put("project", "Jakarta")
        val s = "We are using \$project \$name to render this."
        val w = StringWriter()
        Velocity.evaluate(context, w, "mystring", s)
        println(" string : $w")
    }
}
// {/fact}
