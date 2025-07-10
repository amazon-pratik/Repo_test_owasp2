//import android.content.BroadcastReceiver
//import android.content.Context
//import android.content.Intent
//
//// {fact rule=improper-verification-of-intent-by-broadcast-receiver@v1.0 defects=0}
//class ShutdownReceiver : BroadcastReceiver() {
//    override fun onReceive(context: Context?, intent: Intent) {
//        if (!intent.getAction().equals(Intent.ACTION_SHUTDOWN)) {
//            return
//        }
//        mainActivity.saveLocalData()
//        mainActivity.stopActivity()
//    }
//}
// {/fact}
