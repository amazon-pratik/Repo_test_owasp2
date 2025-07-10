//// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=unknown}
//import android.content.Intent
//import android.content.pm.PackageInstaller
//
//internal class InstallApkWithPackageInstaller {
//    fun example1() {
//
//        /* Create the package installer and session */
//        val packageInstaller: PackageInstaller = getPackageManager().getPackageInstaller()
//        val params: PackageInstaller.SessionParams = SessionParams(PackageInstaller.SessionParams.MODE_FULL_INSTALL)
//        val sessionId: Int = packageInstaller.createSession(params)
//        session = packageInstaller.openSession(sessionId)
//        session.openWrite("package", 0, -1).use { packageInSession ->
//            getAssets().open(assetName).use { `is` ->
//                val buffer = ByteArray(16384)
//                var n: Int
//                while (`is`.read(buffer).also { n = it } >= 0) {
//                    packageInSession.write(buffer, 0, n)
//                }
//            }
//        }
//
//        /* Create status receiver */
//        val intent = Intent(this, InstallApkSessionApi::class.java)
//        intent.setAction(PACKAGE_INSTALLED_ACTION)
//        val pendingIntent: PendingIntent = PendingIntent.getActivity(context, 0, intent, 0)
//        val statusReceiver: IntentSender = pendingIntent.getIntentSender()
//
//        /* Commit the session */session.commit(statusReceiver)
//    }
//
//    companion object {
//        private const val PACKAGE_INSTALLED_ACTION = "com.example.SESSION_API_PACKAGE_INSTALLED"
//    }
//}
// {/fact}
