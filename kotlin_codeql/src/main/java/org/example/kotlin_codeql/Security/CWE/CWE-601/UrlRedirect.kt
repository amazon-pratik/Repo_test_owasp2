//// {fact rule=url-redirection-to-untrusted-site@v1.0 defects=0}
//class UrlRedirect : HttpServlet() {
//    @Throws(ServletException::class, IOException::class)
//    protected fun doGet(request: HttpServletRequest, response: HttpServletResponse) {
//        // BAD: a request parameter is incorporated without validation into a URL redirect
//        response.sendRedirect(request.getParameter("target"))
//
//        // GOOD: the request parameter is validated against a known fixed string
//        if (VALID_REDIRECT == request.getParameter("target")) {
//            response.sendRedirect(VALID_REDIRECT)
//        }
//    }
//
//    companion object {
//        private const val VALID_REDIRECT = "http://cwe.mitre.org/data/definitions/601.html"
//    }
//}
//// {/fact}
