//// {fact rule=use-of-cryptographically-weak-prng@v1.0 defects=1}
//import org.apache.commons.lang3.RandomStringUtils
//
///**
// * Utility class for generating random Strings.
// */
//object RandomUtil {
//    private const val DEF_COUNT = 20
//
//    /**
//     * Generate a password.
//     *
//     * @return the generated password.
//     */
//    fun generatePassword(): String {
//        return RandomStringUtils.randomAlphanumeric(DEF_COUNT) // BAD: RandomStringUtils does not use SecureRandom
//    }
//
//    /**
//     * Generate an activation key.
//     *
//     * @return the generated activation key.
//     */
//    fun generateActivationKey(): String {
//        return RandomStringUtils.randomNumeric(DEF_COUNT) // BAD: RandomStringUtils does not use SecureRandom
//    }
//
//    /**
//     * Generate a reset key.
//     *
//     * @return the generated reset key.
//     */
//    fun generateResetKey(): String {
//        return RandomStringUtils.randomNumeric(DEF_COUNT) // BAD: RandomStringUtils does not use SecureRandom
//    }
//
//    /**
//     * Generate a unique series to validate a persistent token, used in the
//     * authentication remember-me mechanism.
//     *
//     * @return the generated series data.
//     */
//    fun generateSeriesData(): String {
//        return RandomStringUtils.randomAlphanumeric(DEF_COUNT) // BAD: RandomStringUtils does not use SecureRandom
//    }
//
//    /**
//     * Generate a persistent token, used in the authentication remember-me mechanism.
//     *
//     * @return the generated token data.
//     */
//    fun generateTokenData(): String {
//        return RandomStringUtils.randomAlphanumeric(DEF_COUNT) // BAD: RandomStringUtils does not use SecureRandom
//    }
//}
//// {/fact}
