import SwiftUI
import ExpoModulesCore

class SwipeListProps: ObservableObject {
  @Published var children: [UIView]?
  @Published var modifiers: [[String: Any]] = []
  @Published var onEvent: EventDispatcher
    
    
    @Published var leadingFullSwipeEnabled:Bool = false
    @Published var trailingFullSwipeEnabled:Bool = false
   
    @Published var leadingFullSwipeDestructive:Bool = false
    @Published var trailingFullSwipeDestructive:Bool = false
   
    
    @Published var editingEnabled:Bool = false
    @Published var leadingSwipeActions:[[String: String]]=[]
    @Published var trailingSwipeActions:[[String: String]]=[]
    


    
  init(onEvent: EventDispatcher) {
      self.onEvent = onEvent
      
  }
        
    
}
