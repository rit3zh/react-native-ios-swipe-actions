import SwiftUI
import ExpoModulesCore

class EditingListProps: ObservableObject {
  @Published var children: [UIView]?
  @Published var modifiers: [[String: Any]] = []
  @Published var onEvent: EventDispatcher
    
    @Published var editingEnabled:Bool = false
    
  init(onEvent: EventDispatcher) {
      self.onEvent = onEvent
      
  }
        
    
}
