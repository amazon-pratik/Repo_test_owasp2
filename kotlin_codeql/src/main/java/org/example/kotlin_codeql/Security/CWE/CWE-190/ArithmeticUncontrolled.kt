// {fact rule=arithmetic-overflow@v1.0 defects=0}
import java.security.SecureRandom

internal object ArithmeticUncontrolled {
    @JvmStatic
    fun main(args: Array<String>) {
        run {
            val data = SecureRandom().nextInt()

            // BAD: may overflow if data is large
            val scaled = data * 10

            // ...

            // GOOD: use a guard to ensure no overflows occur
            val scaled2: Int
            scaled2 = if (data < Int.MAX_VALUE / 10) data * 10 else Int.MAX_VALUE
        }
    }
}
// {/fact}
