import ExpoModulesCore
import SwiftUI

class EditableListExpoView: ExpoView {
  let props: EditingListProps
    let onEvent = EventDispatcher()

  override func didUpdateReactSubviews() {
    let subChildren = self.reactSubviews()
    props.children = subChildren
  }
  
  required init(appContext: AppContext? = nil) {
      props = EditingListProps(onEvent: onEvent)
    let hostingController = UIHostingController(rootView: EditableListView(props: props))
    super.init(appContext: appContext)
    setupHostingController(hostingController)
  }
}
