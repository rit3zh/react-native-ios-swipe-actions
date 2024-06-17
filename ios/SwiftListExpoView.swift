import ExpoModulesCore
import SwiftUI

class SwiftListExpoView: ExpoView {
  let props: SwiftListProps
    let onEvent = EventDispatcher()

  override func didUpdateReactSubviews() {
    let subChildren = self.reactSubviews()
    props.children = subChildren
  }
  
  required init(appContext: AppContext? = nil) {
      props = SwiftListProps(onEvent: onEvent)
    let hostingController = UIHostingController(rootView: SwiftListView(props: props))
    super.init(appContext: appContext)
    setupHostingController(hostingController)
  }
}
