// {fact rule=audit-log-file-deletion@v1.0 defects=unknown}
import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import java.io.IOException
import kotlin.Throws

class SQLInjection : HttpServlet() {
    @Throws(ServletException::class, IOException::class)
    override fun doGet(request: HttpServletRequest, response: HttpServletResponse?) {
        val sqlQueryBuilder = StringBuilder()
        sqlQueryBuilder.append("SELECT * FROM user WHERE user_id='")
        sqlQueryBuilder.append(request.getParameter("user_id"))
        sqlQueryBuilder.append("'")

        // ...
    }
}
// {/fact}
