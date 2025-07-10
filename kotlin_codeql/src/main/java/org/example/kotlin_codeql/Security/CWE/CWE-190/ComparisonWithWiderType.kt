//// {ex-fact rule=arithmetic-overflow@v1.0 defects=0}
//internal object Test {
//    @JvmStatic
//    fun main(args: Array<String>) {
//        run {
//            val BIGNUM = Int.MAX_VALUE
//            val MAXGET = (Short.MAX_VALUE + 1).toLong()
//            val buf = CharArray(BIGNUM)
//            var bytesReceived: Short = 0
//
//            // BAD: 'bytesReceived' is compared with a value of wider type.
//            // 'bytesReceived' overflows before reaching MAXGET,
//            // causing an infinite loop.
//            while (bytesReceived < MAXGET) {
//                bytesReceived += Test.getFromInput(buf, bytesReceived).toShort()
//            }
//        }
//        run {
//            var bytesReceived2: Long = 0
//
//            // GOOD: 'bytesReceived2' has a type at least as wide as MAXGET.
//            while (bytesReceived2 < MAXGET) {
//                bytesReceived2 += Test.getFromInput(buf, bytesReceived2.toShort()).toLong()
//            }
//        }
//    }
//
//    fun getFromInput(buf: CharArray?, pos: Short): Int {
//        // write to buf
//        // ...
//        return 1
//    }
//}
// {/ex-fact}
