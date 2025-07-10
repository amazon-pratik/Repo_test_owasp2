//import org.apache.commons.jexl3.JexlArithmetic
//import org.apache.commons.jexl3.JexlBuilder
//import org.apache.commons.jexl3.JexlOperator
//import org.apache.commons.jexl3.introspection.JexlMethod
//import org.apache.commons.jexl3.introspection.JexlPropertyGet
//import org.apache.commons.jexl3.introspection.JexlPropertySet
//import org.apache.commons.jexl3.introspection.JexlUberspect
//import org.owasp.esapi.errors.AccessControlException
//import java.util.*
//
//// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=unknown}
//private abstract class JexlUberspectSandbox : JexlUberspect {
//    private val uberspect: JexlUberspect = JexlBuilder().create().getUberspect()
//    private fun checkAccess(obj: Any) {
//        if (!ALLOWED_CLASSES.contains(obj.javaClass.canonicalName)) {
//            throw AccessControlException("Not allowed", "")
//        }
//    }
//
//    override fun getMethod(obj: Any, method: String?, vararg args: Any?): JexlMethod {
//        checkAccess(obj)
//        return uberspect.getMethod(obj, method, args)
//    }
//
//    override fun getResolvers(op: JexlOperator?, obj: Any): List<JexlUberspect.PropertyResolver> {
//        checkAccess(obj)
//        return uberspect.getResolvers(op, obj)
//    }
//
//    override fun setClassLoader(loader: ClassLoader?) {
//        uberspect.setClassLoader(loader)
//    }
//
//    val version: Int
//        get() = uberspect.getVersion()
//
//    override fun getConstructor(obj: Any, vararg args: Any?): JexlMethod {
//        checkAccess(obj)
//        return uberspect.getConstructor(obj, args)
//    }
//
//    override fun getPropertyGet(obj: Any, identifier: Any?): JexlPropertyGet {
//        checkAccess(obj)
//        return uberspect.getPropertyGet(obj, identifier)
//    }
//
//    override fun getPropertyGet(resolvers: List<JexlUberspect.PropertyResolver?>?, obj: Any, identifier: Any?): JexlPropertyGet {
//        checkAccess(obj)
//        return uberspect.getPropertyGet(resolvers, obj, identifier)
//    }
//
//    override fun getPropertySet(obj: Any, identifier: Any?, arg: Any?): JexlPropertySet {
//        checkAccess(obj)
//        return uberspect.getPropertySet(obj, identifier, arg)
//    }
//
//    override fun getPropertySet(resolvers: List<JexlUberspect.PropertyResolver?>?, obj: Any, identifier: Any?, arg: Any?): JexlPropertySet {
//        checkAccess(obj)
//        return uberspect.getPropertySet(resolvers, obj, identifier, arg)
//    }
//
//    override fun getIterator(obj: Any): Iterator<*> {
//        checkAccess(obj)
//        return uberspect.getIterator(obj)
//    }
//
//    override fun getArithmetic(arithmetic: JexlArithmetic?): JexlArithmetic.Uberspect {
//        return uberspect.getArithmetic(arithmetic)
//    }
//
//    companion object {
//        private val ALLOWED_CLASSES: List<String> = Arrays.asList("java.lang.Math", "java.util.Random")
//    }
//}
//// {/fact}
