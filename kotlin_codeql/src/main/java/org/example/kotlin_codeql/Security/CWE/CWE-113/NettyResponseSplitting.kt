// {fact rule=http-response-splitting@v1.0 defects=0}
import io.netty.handler.codec.http.DefaultHttpHeaders
import io.netty.handler.codec.http.DefaultHttpResponse
import io.netty.handler.codec.http.HttpResponseStatus
import io.netty.handler.codec.http.HttpVersion

class ResponseSplitting1 {
    // BAD: Disables the internal response splitting verification
    private val badHeaders: DefaultHttpHeaders = DefaultHttpHeaders(false)

    // GOOD: Verifies headers passed don't contain CRLF characters
    private val goodHeaders: DefaultHttpHeaders = DefaultHttpHeaders()

    // BAD: Disables the internal response splitting verification
    private val version: HttpVersion = HttpVersion.HTTP_1_1
    private val httpResponseStatus: HttpResponseStatus = HttpResponseStatus.MULTI_STATUS
    private val badResponse: DefaultHttpResponse = DefaultHttpResponse(version, httpResponseStatus, false)

    // GOOD: Verifies headers passed don't contain CRLF characters
    private val goodResponse: DefaultHttpResponse = DefaultHttpResponse(version, httpResponseStatus)
}
// {/fact}
