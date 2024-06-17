import ExpoModulesCore
import SwiftUI

public class SwiftListModule: Module {
  public func definition() -> ModuleDefinition {
    Name("SwiftList")
      View(SwiftListExpoView.self) {
          Events("onEvent")
          
          
          Prop("modifiers") { (view: SwiftListExpoView, prop: [[String: Any]]) in
              view.props.modifiers = prop
          }
      }
  }
}

