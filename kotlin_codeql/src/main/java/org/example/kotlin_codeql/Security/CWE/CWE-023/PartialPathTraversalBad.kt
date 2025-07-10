// {fact rule=path-traversal@v1.0 defects=1}
import java.io.File
import java.io.IOException

class PartialPathTraversalBad {
    @Throws(IOException::class)
    fun example(dir: File, parent: File) {
        if (!dir.canonicalPath.startsWith(parent.getCanonicalPath())) {
            throw IOException("Path traversal attempt: " + dir.getCanonicalPath())
        }
    }
}
// {/fact}
