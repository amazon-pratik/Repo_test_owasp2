//// {fact rule=use-of-externally-controlled-input-to-select-classes-or-code@v1.0 defects=0}
//class MyActivity : FragmentActivity() {
//    protected fun onCreate(savedInstance: Bundle?) {
//        try {
//            super.onCreate(savedInstance)
//            // BAD: Fragment instantiated from user input without validation
//            run {
//                val fName: String = getIntent().getStringExtra("fragmentName")
//                getFragmentManager().beginTransaction().replace(com.android.internal.R.id.prefs,
//                        Fragment.instantiate(this, fName, null)).commit()
//            }
//            // GOOD: Fragment instantiated statically
//            run {
//                getFragmentManager().beginTransaction()
//                        .replace(com.android.internal.R.id.prefs, MyFragment()).commit()
//            }
//        } catch (e: Exception) {
//        }
//    }
//}
//// {/fact}
