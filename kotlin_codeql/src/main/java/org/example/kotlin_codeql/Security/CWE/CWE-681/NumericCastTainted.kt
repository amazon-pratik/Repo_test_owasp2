//// {fact rule=incorrect-conversion-between-numeric-types@v1.0 defects=0}
//internal object Test {
//    @Throws(IOException::class)
//    @JvmStatic
//    fun main(args: Array<String>) {
//        run {
//            val data: Long
//            val readerBuffered = BufferedReader(
//                    InputStreamReader(System.`in`, "UTF-8"))
//            val stringNumber: String = readerBuffered.readLine()
//            data = stringNumber?.trim { it <= ' ' }?.toLong() ?: 0
//
//            // AVOID: potential truncation if input data is very large,
//            // for example 'Long.MAX_VALUE'
//            val scaled = data.toInt()
//
//            //...
//
//            // GOOD: use a guard to ensure no truncation occurs
//            val scaled2: Int
//            scaled2 = if (data > Int.MIN_VALUE && data < Int.MAX_VALUE) data.toInt() else throw IllegalArgumentException("Invalid input")
//        }
//    }
//}
// {/fact}
