import SwiftUI
import ExpoModulesCore

class SwiftListProps: ObservableObject {
  @Published var children: [UIView]?
  @Published var modifiers: [[String: Any]] = []
  @Published var onEvent: EventDispatcher
    
  init(onEvent: EventDispatcher) {
      self.onEvent = onEvent
      
  }
}
