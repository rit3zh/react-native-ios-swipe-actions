import SwiftUI
import ExpoModulesCore

class DiscloserGroupProps: ObservableObject {
  @Published var children: [UIView]?
  @Published var modifiers: [[String: Any]] = []
    @Published var titles: [[String: String]] = []
  @Published var onEvent: EventDispatcher

    init(onEvent: EventDispatcher) {
      self.onEvent = onEvent
      
  }
        
    
}
