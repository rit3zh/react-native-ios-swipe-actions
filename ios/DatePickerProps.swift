import SwiftUI
import ExpoModulesCore

class DatePickerProps: ObservableObject {
  @Published var title: String = ""
  @Published var selection: String = ""
  @Published var displayedComponents: [String] = []

    @Published var startComponent: [String: Int] = [:]
    @Published var endComponent: [String: Int] = [:]
    
  @Published var modifiers: [[String: Any]] = []
  @Published var onEvent: EventDispatcher


  init(onEvent: EventDispatcher) {
    self.onEvent = onEvent
  }
}
