//// {fact rule=unintended-proxy-or-intermediary@v1.0 defects=0}
//import android.content.ContentResolver
//import java.nio.file.FileSystems
//
//class Example : Activity() {
//    fun onCreate() {
//        // BAD: Externally-provided URI directly used in content resolution
//        run {
//            val contentResolver: ContentResolver = getContentResolver()
//            val uri: Uri = getIntent().getParcelableExtra("URI_EXTRA") as Uri
//            val `is`: InputStream = contentResolver.openInputStream(uri)
//            copyToExternalCache(`is`)
//        }
//        // BAD: input URI is not normalized, and check can be bypassed with ".." characters
//        run {
//            val contentResolver: ContentResolver = getContentResolver()
//            val uri: Uri = getIntent().getParcelableExtra("URI_EXTRA") as Uri
//            val path: String = uri.getPath()
//            if (path.startsWith("/data")) throw SecurityException()
//            val `is`: InputStream = contentResolver.openInputStream(uri)
//            copyToExternalCache(`is`)
//        }
//        // GOOD: URI is properly validated to block access to internal files
//        run {
//            val contentResolver: ContentResolver = getContentResolver()
//            val uri: Uri = getIntent().getParcelableExtra("URI_EXTRA") as Uri
//            val path: String = uri.getPath()
//            val normalized: Path = FileSystems.getDefault().getPath(path).normalize()
//            if (normalized.startsWith("/data")) throw SecurityException()
//            val `is`: InputStream = contentResolver.openInputStream(uri)
//            copyToExternalCache(`is`)
//        }
//    }
//
//    private fun copyToExternalCache(`is`: InputStream) {
//        // Reads the contents of is and writes a file in the app's external
//        // cache directory, which can be read publicly by applications in the same device.
//    }
//}
//// {/fact}
