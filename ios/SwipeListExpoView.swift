import ExpoModulesCore
import SwiftUI

class SwipeListExpoView: ExpoView {
  let props: SwipeListProps
    let onEvent = EventDispatcher()

  override func didUpdateReactSubviews() {
    let subChildren = self.reactSubviews()
    props.children = subChildren
  }
  
  required init(appContext: AppContext? = nil) {
      props = SwipeListProps(onEvent: onEvent)
    let hostingController = UIHostingController(rootView: SwipeListView(props: props))
    super.init(appContext: appContext)
    setupHostingController(hostingController)
  }
}
