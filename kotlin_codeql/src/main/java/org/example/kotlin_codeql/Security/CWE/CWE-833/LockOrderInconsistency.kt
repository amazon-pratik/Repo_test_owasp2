//// {fact rule=dead-and-deactivated-code@v1.0 defects=unknown}
//internal class Test {
//    private var primaryAccountBalance = 0
//    private val primaryLock = Any()
//    private var savingsAccountBalance = 0
//    private val savingsLock = Any()
//    fun transferToSavings(amount: Int): Boolean {
//        synchronized(primaryLock) {
//            synchronized(savingsLock) {
//                if (amount > 0 && primaryAccountBalance >= amount) {
//                    primaryAccountBalance -= amount
//                    savingsAccountBalance += amount
//                    return true
//                }
//            }
//        }
//        return false
//    }
//
//    fun transferToPrimary(amount: Int): Boolean {
//        // AVOID: lock order is different from "transferToSavings"
//        // and may result in deadlock
//        synchronized(savingsLock) {
//            synchronized(primaryLock) {
//                if (amount > 0 && savingsAccountBalance >= amount) {
//                    savingsAccountBalance -= amount
//                    primaryAccountBalance += amount
//                    return true
//                }
//            }
//        }
//        return false
//    }
//}
//// {/fact}
