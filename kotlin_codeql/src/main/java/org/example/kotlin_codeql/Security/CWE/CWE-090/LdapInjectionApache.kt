// {fact rule=ldap-injection@v1.0 defects=0}
import jakarta.servlet.http.HttpServletRequest
import org.apache.directory.api.ldap.model.message.SearchRequest
import org.apache.directory.api.ldap.model.message.SearchRequestImpl
import org.apache.directory.api.ldap.model.name.Dn
import org.apache.directory.ldap.client.api.LdapConnection
import javax.naming.ldap.Rdn

class LdapInjectionApache {
    fun ldapQueryGood(request: HttpServletRequest, c: LdapConnection) {
        val organizationName: String = request.getParameter("organization_name")
        val username: String = request.getParameter("username")

        // GOOD: Organization name is encoded before being used in DN
        val safeDn = Dn("OU", "Organization")

        // GOOD: User input is encoded before being used in search filter
        val safeFilter: String = equal(username)
        val searchRequest: SearchRequest = SearchRequestImpl()
        searchRequest.setBase(safeDn)
        searchRequest.setFilter(safeFilter)
        c.search(searchRequest)
    }

    private fun equal(username: String): String {
        TODO("Not yet implemented")
    }
}
// {/fact}
