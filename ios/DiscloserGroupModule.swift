
import ExpoModulesCore
import SwiftUI

public class DiscloserGroupModule: Module {
  public func definition() -> ModuleDefinition {
    Name("DiscloserGroup")
      View(DiscloserGroupExpoView.self) {
          Events("onEvent")
          
          
          Prop("modifiers") { (view: DiscloserGroupExpoView, prop: [[String: Any]]) in
              view.props.modifiers = prop
          }
          Prop("titles") { (view: DiscloserGroupExpoView, prop: [[String: String]]) in
              view.props.titles = prop
          }
      }
  }
}
