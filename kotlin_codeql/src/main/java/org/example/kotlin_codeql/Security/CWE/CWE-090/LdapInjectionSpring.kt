// {fact rule=ldap-injection@v1.0 defects=0}
import jakarta.servlet.http.HttpServletRequest
import org.owasp.esapi.Encoder
import org.owasp.esapi.reference.DefaultEncoder
import javax.naming.NamingException
import javax.naming.directory.DirContext
import javax.naming.directory.SearchControls

class LdapInjectionSpring {
    @Throws(NamingException::class)
    fun ldapQueryBad(request: HttpServletRequest, ctx: DirContext) {
        val organizationName: String = request.getParameter("organization_name")
        val username: String = request.getParameter("username")

        // BAD: User input used in DN (Distinguished Name) without encoding
        val dn = "OU=People,O=$organizationName"

        // BAD: User input used in search filter without encoding
        val filter = "username=$username"
        ctx.search(dn, filter, SearchControls())
    }

    @Throws(NamingException::class)
    fun ldapQueryGood(request: HttpServletRequest, ctx: DirContext) {
        val organizationName: String = request.getParameter("organization_name")
        val username: String = request.getParameter("username")

        // ESAPI encoder
        val encoder: Encoder = DefaultEncoder.getInstance()

        // GOOD: Organization name is encoded before being used in DN
        val safeOrganizationName: String = encoder.encodeForDN(organizationName)
        val safeDn = "OU=People,O=$safeOrganizationName"

        // GOOD: User input is encoded before being used in search filter
        val safeUsername: String = encoder.encodeForLDAP(username)
        val safeFilter = "username=$safeUsername"
        ctx.search(safeDn, safeFilter, SearchControls())
    }
}
// {/fact}
