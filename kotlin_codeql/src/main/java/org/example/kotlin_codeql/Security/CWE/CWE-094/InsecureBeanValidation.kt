//// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=unknown}
//import org.hibernate.validator.constraintvalidation.HibernateConstraintValidatorContext
//import java.util.regex.Matcher
//import java.util.regex.Pattern
//import javax.validation.ConstraintValidator
//import javax.validation.ConstraintValidatorContext
//
//class TestValidator : ConstraintValidator<Annotation?, String?> {
//    object InterpolationHelper {
//        const val BEGIN_TERM = '{'
//        const val END_TERM = '}'
//        const val EL_DESIGNATOR = '$'
//        const val ESCAPE_CHARACTER = '\\'
//        private val ESCAPE_MESSAGE_PARAMETER_PATTERN = Pattern.compile("([$ESCAPE_CHARACTER$BEGIN_TERM$END_TERM$EL_DESIGNATOR])")
//        fun escapeMessageParameter(messageParameter: String?): String? {
//            return if (messageParameter == null) {
//                null
//            } else ESCAPE_MESSAGE_PARAMETER_PATTERN.matcher(messageParameter).replaceAll(Matcher.quoteReplacement(ESCAPE_CHARACTER.toString()) + "$1")
//        }
//    }
//
//    fun isValid(`object`: String, constraintContext: ConstraintValidatorContext): Boolean {
//        val value = "$`object` is invalid"
//
//        // Bad: Bean properties (normally user-controlled) are passed directly to `buildConstraintViolationWithTemplate`
//        constraintContext.buildConstraintViolationWithTemplate(value).addConstraintViolation().disableDefaultConstraintViolation()
//
//        // Good: Bean properties (normally user-controlled) are escaped
//        val escaped = InterpolationHelper.escapeMessageParameter(value)
//        constraintContext.buildConstraintViolationWithTemplate(escaped).addConstraintViolation().disableDefaultConstraintViolation()
//
//        // Good: Bean properties (normally user-controlled) are parameterized
//        val context: HibernateConstraintValidatorContext = constraintContext.unwrap(HibernateConstraintValidatorContext::class.java)
//        context.addMessageParameter("prop", `object`)
//        context.buildConstraintViolationWithTemplate("{prop} is invalid").addConstraintViolation()
//        return false
//    }
//
//    override fun isValid(p0: String?, p1: ConstraintValidatorContext?): Boolean {
//        TODO("Not yet implemented")
//    }
//}
//// {/fact}
