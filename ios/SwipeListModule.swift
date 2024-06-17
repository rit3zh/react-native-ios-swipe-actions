import ExpoModulesCore
import SwiftUI

public class SwipeListModule: Module {
  public func definition() -> ModuleDefinition {
    Name("SwipeList")
      View(SwipeListExpoView.self) {
          Events("onEvent")
          
    
          Prop("modifiers") { (view: SwipeListExpoView, prop: [[String: Any]]) in
              view.props.modifiers = prop
          }
          Prop("leadingSwipeActions") { (view: SwipeListExpoView, prop: [[String: String]]) in
              view.props.leadingSwipeActions = prop
          }
          
          Prop("trailingSwipeActions") { (view: SwipeListExpoView, prop: [[String: String]]) in
              view.props.trailingSwipeActions = prop
          }
          
          Prop("trailingFullSwipeDestructive") { (view: SwipeListExpoView, prop: Bool) in
              view.props.trailingFullSwipeDestructive = prop
          }

          Prop("leadingFullSwipeDestructive") { (view: SwipeListExpoView, prop: Bool) in
              view.props.leadingFullSwipeDestructive = prop
          }
          
          Prop("trailingFullSwipeEnabled") { (view: SwipeListExpoView, prop: Bool) in
              view.props.trailingFullSwipeEnabled = prop
          }
          
          Prop("leadingFullSwipeEnabled") { (view: SwipeListExpoView, prop: Bool) in
              view.props.leadingFullSwipeEnabled = prop
          }
      }
  }
}
