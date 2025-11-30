//// {fact rule=inclusion-of-sensitive-information-in-log-files@v1.0 defects=0}
//object SensitiveInfoLog {
//    @JvmStatic
//    fun main(args: Array<String>) {
//        run {
//            val logger: Logger = LogManager.getLogger(SensitiveInfoLog::class.java)
//            val password = "Pass@0rd"
//
//            // BAD: user password is written to debug log
//            logger.debug("User password is $password")
//        }
//        run {
//            val logger: Logger = LogManager.getLogger(SensitiveInfoLog::class.java)
//            val password = "Pass@0rd"
//
//            // GOOD: user password is never written to debug log
//            logger.debug("User password changed")
//        }
//    }
//}
// {/fact}
