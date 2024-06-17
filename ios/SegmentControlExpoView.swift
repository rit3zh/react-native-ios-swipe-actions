import ExpoModulesCore
import SwiftUI

class SegmentControlExpoView: ExpoView {
  let props: SegmentControlProps
  let onEvent = EventDispatcher()
  
  required init(appContext: AppContext? = nil) {
    props = SegmentControlProps(onEvent: onEvent)
    let hostingController = UIHostingController(rootView: SegmentControlView(props: props))
    super.init(appContext: appContext)
    setupHostingController(hostingController)
  }
}
