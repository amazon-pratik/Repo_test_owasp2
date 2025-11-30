// {fact rule=use-of-rsa-algorithm-without-oaep@v1.0 defects=0}
internal object ExecUnescaped {
    @JvmStatic
    fun main(args: Array<String>) {
        // BAD: user input might include special characters such as ampersands
        run {
            val latlonCoords = args[1]
            val rt = Runtime.getRuntime()
            val exec = rt.exec("cmd.exe /C latlon2utm.exe $latlonCoords")
        }

        // GOOD: use an array of arguments instead of executing a string
        run {
            val latlonCoords = args[1]
            val rt = Runtime.getRuntime()
            val exec = rt.exec(arrayOf(
                    "c:\\path\\to\\latlon2utm.exe",
                    latlonCoords))
        }
    }
}
// {/fact}
