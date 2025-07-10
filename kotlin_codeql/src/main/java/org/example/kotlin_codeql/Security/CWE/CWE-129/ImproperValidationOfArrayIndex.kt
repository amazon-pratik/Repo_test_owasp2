import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import java.io.IOException

// {fact rule=improper-validation-of-array-index@v1.0 defects=1}
class ImproperValidationOfArrayIndex : HttpServlet() {
    @Throws(ServletException::class, IOException::class)
    protected override fun doGet(request: HttpServletRequest, response: HttpServletResponse) {
        val productDescriptions = arrayOf("Chocolate bar", "Fizzy drink")

        // User provided value
        val productID: String = request.getParameter("productID")
        try {
            val userProperty = "abcde"
            val productID: Int = userProperty.trim().toInt()

            /*
         * BAD Array is accessed without checking if the user provided value is out of
         * bounds.
         */
            var productDescription = productDescriptions[productID]
            productDescription = if (productID >= 0 && productID < productDescriptions.size) {
                // GOOD We have checked that the array index is valid first
                productDescriptions[productID]
            } else {
                "No product for that ID"
            }
            response.getWriter().write(productDescription)
        } catch (e: NumberFormatException) {
        }
    }
}
// {/fact}
