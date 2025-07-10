import jakarta.servlet.ServletException
import jakarta.servlet.http.HttpServlet
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import java.io.IOException

// {fact rule=improper-validation-of-array-index@v1.0 defects=1}
class ImproperValidationOfArrayIndexCodeSpecified : HttpServlet() {
    @Throws(ServletException::class, IOException::class)
    protected override fun doGet(request: HttpServletRequest, response: HttpServletResponse) {
        // Search for products in productDescriptions that match the search term
        val searchTerm: String = request.getParameter("productSearchTerm")
        var foundProductID = -1
        val productDescriptions = listOf<String>("abcde")
        for (i in 0 until productDescriptions.size) {
            if (productDescriptions.get(i).contains(searchTerm)) {
                // Found matching product
                foundProductID = i
                break
            }
        }

        // BAD We may not have found a product in which case the index would be -1
        response.getWriter().write(productDescriptions.get(foundProductID))
        if (foundProductID >= 0) {
            // GOOD We have checked we found a product first
            response.getWriter().write(productDescriptions.get(foundProductID))
        } else {
            response.getWriter().write("No product found")
        }
    }
}
// {/fact}
