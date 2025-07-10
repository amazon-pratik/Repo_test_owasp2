//// {ex-fact rule=sensitive-information-leak@v1.0 defects=0}
//class IntentUriPermissionManipulation : Activity() {
//    // BAD: the user-provided Intent is returned as-is
//    fun dangerous() {
//        val intent: Intent = getIntent()
//        intent.putExtra("result", "resultData")
//        setResult(intent)
//    }
//
//    // GOOD: a new Intent is created and returned
//    fun safe() {
//        val intent = Intent()
//        intent.putExtra("result", "resultData")
//        setResult(intent)
//    }
//
//    // GOOD: the user-provided Intent is sanitized before being returned
//    fun sanitized() {
//        val intent: Intent = getIntent()
//        intent.putExtra("result", "resultData")
//        intent.removeFlags(
//                Intent.FLAG_GRANT_WRITE_URI_PERMISSION or Intent.FLAG_GRANT_READ_URI_PERMISSION)
//        setResult(intent)
//    }
//}
//// {/ex-fact}
