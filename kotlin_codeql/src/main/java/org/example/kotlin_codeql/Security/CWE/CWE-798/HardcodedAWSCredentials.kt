//// {fact rule=use-of-hard-coded-credentials@v1.0 defects=unknown}
//import com.amazonaws.auth.AWSCredentials
//
//object HardcodedAWSCredentials {
//    @JvmStatic
//    fun main(args: Array<String>) {
//        //Hardcoded credentials for connecting to AWS services
//        //To fix the problem, use other approaches including AWS credentials file, environment variables, or instance/container credentials instead
//        val creds: AWSCredentials = BasicAWSCredentials("ACCESS_KEY", "SECRET_KEY") //sensitive call
//    }
//}
//// {/fact}
