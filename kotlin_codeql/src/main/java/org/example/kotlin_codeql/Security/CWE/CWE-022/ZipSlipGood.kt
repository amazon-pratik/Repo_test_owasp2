// {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
import java.io.File
import java.io.FileOutputStream
import java.util.zip.ZipEntry

class ZipSlipGood {
    @Throws(Exception::class)
    fun writeZipEntry(entry: ZipEntry, destinationDir: File) {
        val file = File(destinationDir, entry.name)
        if (!file.toPath().normalize().startsWith(destinationDir.toPath())) throw Exception("Bad zip entry")
        val fos = FileOutputStream(file) // OK
        // ... write entry to fos ...
    }
}
// {/fact}
