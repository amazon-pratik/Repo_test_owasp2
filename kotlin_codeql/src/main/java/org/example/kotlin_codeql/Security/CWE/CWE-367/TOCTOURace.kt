//// {fact rule=time-of-check-time-of-use-race-condition@v1.0 defects=unknown}
//internal class Resource {
//    @get:Synchronized
//    @set:Synchronized
//    var isReady: Boolean
//        get() {}
//        set(ready) {}
//
//    @Synchronized
//    fun act() {
//        check(isReady)
//    }
//
//    @Synchronized
//    fun bad(r: Resource) {
//        if (r.isReady) {
//            // r might no longer be ready, another thread might
//            // have called setReady(false)
//            r.act()
//        }
//    }
//
//    @Synchronized
//    fun good(r: Resource) {
//        synchronized(r) {
//            if (r.isReady) {
//                r.act()
//            }
//        }
//    }
//}
// {/fact}
