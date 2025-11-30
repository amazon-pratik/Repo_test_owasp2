// {fact rule=path-traversal@v1.0 defects=0}
import java.io.File
import java.io.IOException

class PartialPathTraversalGood {
    @Throws(IOException::class)
    fun example(dir: File, parent: File) {
        if (!dir.toPath().normalize().startsWith(parent.toPath())) {
            throw IOException("Path traversal attempt: " + dir.canonicalPath)
        }
    }
}
// {/fact}
