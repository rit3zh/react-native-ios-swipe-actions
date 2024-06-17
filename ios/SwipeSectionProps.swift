import SwiftUI
import ExpoModulesCore

class SwipeSectionProps: ObservableObject {
  @Published var children: [UIView]?
  @Published var modifiers: [[String: Any]] = []
  @Published var header: String = ""
  @Published var footer: String = ""
  @Published var isExpanded: Bool = true
  @Published var onEvent: EventDispatcher
  init(onEvent: EventDispatcher) {
    self.onEvent = onEvent
  }
}
