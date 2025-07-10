import java.nio.file.Paths

// {fact rule=use-of-rsa-algorithm-without-oaep@v1.0 defects=0}
internal object ExecRelative {
    @JvmStatic
    fun main(args: Array<String>) {
        // BAD: relative path
        Runtime.getRuntime().exec("make")

        // GOOD: absolute path
        Runtime.getRuntime().exec("/usr/bin/make")

        // GOOD: build an absolute path from known values
        val prefix = "/usr"
        Runtime.getRuntime().exec(prefix + "/bin/make")
    }
}
// {/fact}
