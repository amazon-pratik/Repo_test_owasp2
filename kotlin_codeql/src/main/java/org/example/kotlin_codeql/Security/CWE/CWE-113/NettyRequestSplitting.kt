import io.netty.handler.codec.http.DefaultHttpHeaders
import io.netty.handler.codec.http.DefaultHttpRequest
import io.netty.handler.codec.http.HttpMethod
import io.netty.handler.codec.http.HttpVersion
import java.lang.reflect.Method

// {fact rule=http-response-splitting@v1.0 defects=0}
class NettyRequestSplitting {
    // BAD: Disables the internal response splitting verification
    private val badHeaders: DefaultHttpHeaders = DefaultHttpHeaders(false)

    // GOOD: Verifies headers passed don't contain CRLF characters
    private val goodHeaders: DefaultHttpHeaders = DefaultHttpHeaders()

    // BAD: Disables the internal response splitting verification
    private val httpVersion: HttpVersion = HttpVersion.HTTP_1_1
    private val method: HttpMethod = HttpMethod.POST
    private val uri: String = "abcd"
    private val badRequest: DefaultHttpRequest = DefaultHttpRequest(httpVersion, method, uri, false)

    // GOOD: Verifies headers passed don't contain CRLF characters
    private val goodResponse: DefaultHttpRequest = DefaultHttpRequest(httpVersion, method, uri)
}
// {/fact}
