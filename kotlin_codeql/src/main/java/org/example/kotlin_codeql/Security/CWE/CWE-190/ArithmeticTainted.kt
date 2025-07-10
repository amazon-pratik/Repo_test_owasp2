import java.io.BufferedReader
import java.io.InputStreamReader

// {fact rule=arithmetic-overflow@v1.0 defects=0}
internal object ArithmeticTainted {
    @JvmStatic
    fun main(args: Array<String>) {
        run {
            val data: Int
            val readerBuffered = BufferedReader(
                    InputStreamReader(System.`in`, "UTF-8")
            )
            val stringNumber: String = readerBuffered.readLine()
            data = stringNumber?.trim { it <= ' ' }?.toInt() ?: 0

            // BAD: may overflow if input data is very large, for example
            // 'Integer.MAX_VALUE'
            val scaled = data * 10

            //...

            // GOOD: use a guard to ensure no overflows occur
            val scaled2: Int
            scaled2 = if (data < Int.MAX_VALUE / 10) data * 10 else Int.MAX_VALUE
        }
    }
}
// {/fact}
