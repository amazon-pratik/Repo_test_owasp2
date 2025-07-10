// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=unknown}
import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Environment
import java.io.File

internal class InstallApkWithFile {
    fun something() {
        /* Get a file from external storage */
        val file = File(Environment.getExternalStorageDirectory(), "myapp.apk")
        val intent = Intent(Intent.ACTION_VIEW)
        /* Set the mimetype to APK */intent.setDataAndType(Uri.fromFile(file), "application/vnd.android.package-archive")
        startActivity(intent)
    }

    private fun startActivity(intent: Intent) {

    }
}
// {/fact}
