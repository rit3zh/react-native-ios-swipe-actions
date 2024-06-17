import SwiftUI
import ExpoModulesCore

class SegmentControlProps: ObservableObject {
    @Published var selection: Int = 0
    @Published var options: [[String: Any]] = []
    @Published var modifiers: [[String: Any]] = []
    @Published var onEvent: EventDispatcher
    
    init(onEvent: EventDispatcher) {
        self.onEvent = onEvent
    }
}
