//// {fact rule=owasp-top-ten-2013-a7-missing-function-level-access-control@v1.0 defects=0}
//import java.util.regex.Pattern
//import javax.servlet.http.HttpServlet
//
//class RegexInjectionDemo : HttpServlet() {
//    fun badExample(request: javax.servlet.http.HttpServletRequest): Boolean {
//        val regex: String = request.getParameter("regex")
//        val input: String = request.getParameter("input")
//
//        // BAD: Unsanitized user input is used to construct a regular expression
//        return input.matches(regex.toRegex())
//    }
//
//    fun goodExample(request: javax.servlet.http.HttpServletRequest): Boolean {
//        val regex: String = request.getParameter("regex")
//        val input: String = request.getParameter("input")
//
//        // GOOD: User input is sanitized before constructing the regex
//        return input.matches(Pattern.quote(regex).toRegex())
//    }
//}
//// {/fact}
