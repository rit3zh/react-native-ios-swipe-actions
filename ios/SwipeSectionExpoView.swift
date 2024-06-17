import ExpoModulesCore
import SwiftUI

class SwipeSectionExpoView: ExpoView {
  let props: SwipeSectionProps
  let onEvent = EventDispatcher()

  override func didUpdateReactSubviews() {
    let subChildren = self.reactSubviews()
    props.children = subChildren
  }
  
  required init(appContext: AppContext? = nil) {
    props = SwipeSectionProps(onEvent: onEvent)
    let hostingController = UIHostingController(rootView: SwipeSectionView(props: props))
    super.init(appContext: appContext)
    setupHostingController(hostingController)
  }
}
