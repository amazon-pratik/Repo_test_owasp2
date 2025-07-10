// {fact rule=arithmetic-overflow@v1.0 defects=0}
internal object ArithmeticWithExtremeValues {
    @JvmStatic
    fun main(args: Array<String>) {
        run {
            val i = Long.MAX_VALUE
            // BAD: overflow
            val j = i + 1
        }
        run {
            val i = Int.MAX_VALUE
            // GOOD: no overflow
            val j = i.toLong() + 1
        }
    }
}
// {/fact}
