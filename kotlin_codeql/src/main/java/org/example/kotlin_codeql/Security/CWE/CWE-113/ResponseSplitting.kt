import jakarta.servlet.ServletException
import jakarta.servlet.http.Cookie
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import java.io.IOException

// {fact rule=http-response-splitting@v1.0 defects=0}
class ResponseSplitting2 : HttpServlet() {
    @Throws(ServletException::class, IOException::class)
    protected override fun doGet(request: HttpServletRequest, response: HttpServletResponse) {
        // BAD: setting a cookie with an unvalidated parameter
        val cookie = Cookie("name", request.getParameter("name"))
        response.addCookie(cookie)

        // GOOD: remove special characters before putting them in the header
        val name = removeSpecial(request.getParameter("name"))
        val cookie2 = Cookie("name", name)
        response.addCookie(cookie2)
    }

    companion object {
        private fun removeSpecial(str: String): String {
            return str.replace("[^a-zA-Z ]".toRegex(), "")
        }
    }
}
// {/fact}
