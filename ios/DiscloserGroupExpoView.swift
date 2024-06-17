import ExpoModulesCore
import SwiftUI

class DiscloserGroupExpoView: ExpoView {
  let props: DiscloserGroupProps
    let onEvent = EventDispatcher()

  override func didUpdateReactSubviews() {
    let subChildren = self.reactSubviews()
    props.children = subChildren
  }
  
  required init(appContext: AppContext? = nil) {
      props = DiscloserGroupProps(onEvent: onEvent)
    let hostingController = UIHostingController(rootView: DiscloserGroupView(props: props))
    super.init(appContext: appContext)
    setupHostingController(hostingController)
  }
}
