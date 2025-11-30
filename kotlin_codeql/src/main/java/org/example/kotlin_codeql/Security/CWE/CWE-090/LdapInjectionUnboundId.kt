// {fact rule=ldap-injection@v1.0 defects=0}
import org.apache.directory.ldap.client.api.LdapConnection
import jakarta.servlet.http.HttpServletRequest

import org.apache.directory.api.ldap.model.message.SearchScope
import org.apache.directory.api.ldap.model.name.Dn
import org.apache.directory.api.ldap.model.name.Rdn
import com.unboundid.ldap.sdk.Filter


class LdapInjectionUnboundId {
    fun ldapQueryGood(request: HttpServletRequest, c: LdapConnection) {
        val organizationName: String = request.getParameter("organization_name")
        val username: String = request.getParameter("username")

        // GOOD: Organization name is encoded before being used in DN
        val safeDn = Dn(Rdn("OU", "People"), Rdn("O", organizationName))

        // GOOD: User input is encoded before being used in search filter
        val safeFilter: Filter = Filter.createEqualityFilter("username", username)
        c.search(safeDn, "something", SearchScope.ONELEVEL, "hello")
    }
}
// {/fact}
