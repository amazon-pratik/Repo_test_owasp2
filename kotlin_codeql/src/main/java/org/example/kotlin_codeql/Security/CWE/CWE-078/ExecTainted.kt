// {fact rule=use-of-rsa-algorithm-without-oaep@v1.0 defects=1}
internal object ExecTainted {
    @JvmStatic
    fun main(args: Array<String>) {
        val script = System.getenv("SCRIPTNAME")
        if (script != null) {
            // BAD: The script to be executed is controlled by the user.
            Runtime.getRuntime().exec(script)
        }
    }
}
// {/fact}
