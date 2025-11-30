import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import java.io.IOException

// {fact rule=improper-validation-of-array-index@v1.0 defects=1}
class ImproperValidationOfArrayConstruction : HttpServlet() {
    @Throws(ServletException::class, IOException::class)
    protected override fun doGet(request: HttpServletRequest, response: HttpServletResponse?) {
        try {
            // User provided value
            val numberOfItems: Int = request.getParameter("numberOfItems").trim().toInt()
            if (numberOfItems >= 0) {
                /*
         * BAD numberOfItems may be zero, which would cause the array indexing operation to
         * throw an ArrayIndexOutOfBoundsException
         */
                val items: Array<String?> = arrayOfNulls<String>(numberOfItems)
                items[0] = "Item 1"
            }
            if (numberOfItems > 0) {
                /*
         * GOOD numberOfItems must be greater than zero, so the indexing succeeds.
         */
                val items: Array<String?> = arrayOfNulls<String>(numberOfItems)
                items[0] = "Item 1"
            }
        } catch (e: NumberFormatException) {
        }
    }
}
// {/fact}
