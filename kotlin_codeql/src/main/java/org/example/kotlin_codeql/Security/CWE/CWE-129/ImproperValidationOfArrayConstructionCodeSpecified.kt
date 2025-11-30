import java.util.*

// {fact rule=improper-validation-of-array-index@v1.0 defects=1}
object PossibleArrayIndexOutOfBounds {
    @JvmStatic
    fun main(args: Array<String>) {
        val numberOfItems: Int = Random().nextInt(10)
        if (numberOfItems >= 0) {
            /*
         * BAD numberOfItems may be zero, which would cause the array indexing operation to
         * throw an ArrayIndexOutOfBoundsException
         */
            val items: Array<String?> = arrayOfNulls<String>(numberOfItems)
            items[0] = "Item 1"
        }
        if (numberOfItems > 0) {
            /*
         * GOOD numberOfItems must be greater than zero, so the indexing succeeds.
         */
            val items: Array<String?> = arrayOfNulls<String>(numberOfItems)
            items[0] = "Item 1"
        }
    }
}
// {/fact}
