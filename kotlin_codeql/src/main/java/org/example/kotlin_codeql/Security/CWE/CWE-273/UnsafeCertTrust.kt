//// {ex-fact rule=sensitive-information-leak@v1.0 defects=unknown}
//import javax.net.ssl.SSLContext
//import javax.net.ssl.SSLParameters
//import javax.net.ssl.SSLSocket
//
//
//fun main() {
//    run {
//        val sslContext = SSLContext.getInstance("TLS")
//        val sslEngine = sslContext.createSSLEngine()
//        val sslParameters = sslEngine.sslParameters
//        sslParameters.endpointIdentificationAlgorithm = "HTTPS" //GOOD: Set a valid endpointIdentificationAlgorithm for SSL engine to trigger hostname verification
//        sslEngine.sslParameters = sslParameters
//    }
//    run {
//        val sslContext = SSLContext.getInstance("TLS")
//        val sslEngine = sslContext.createSSLEngine() //BAD: No endpointIdentificationAlgorithm set
//    }
//    run {
//        val sslContext = SSLContext.getInstance("TLS")
//        val socketFactory = sslContext.socketFactory
//        val socket = socketFactory.createSocket("www.example.com", 443) as SSLSocket
//        val sslParameters: SSLParameters = sslEngine.getSSLParameters()
//        sslParameters.endpointIdentificationAlgorithm = "HTTPS" //GOOD: Set a valid endpointIdentificationAlgorithm for SSL socket to trigger hostname verification
//        socket.sslParameters = sslParameters
//    }
//    run {
//        val connectionFactory: com.rabbitmq.client.ConnectionFactory = ConnectionFactory()
//        connectionFactory.useSslProtocol()
//        connectionFactory.enableHostnameVerification() //GOOD: Enable hostname verification for rabbitmq ConnectionFactory
//    }
//    run {
//        val connectionFactory: com.rabbitmq.client.ConnectionFactory = ConnectionFactory()
//        connectionFactory.useSslProtocol() //BAD: Hostname verification for rabbitmq ConnectionFactory is not enabled
//    }
//}
// {/ex-fact}
