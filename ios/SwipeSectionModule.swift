import ExpoModulesCore
import SwiftUI

public class SwipeSectionModule: Module {
  public func definition() -> ModuleDefinition {
    Name("SwipeSectionView")
    View(SwipeSectionExpoView.self) {
      Events("onEvent")
      Prop("modifiers") { (view: SwipeSectionExpoView, prop: [[String: Any]]) in
         view.props.modifiers = prop
      }
      Prop("header") { (view: SwipeSectionExpoView, prop: String) in
        view.props.header = prop
      }
      Prop("footer") { (view: SwipeSectionExpoView, prop: String) in
        view.props.footer = prop
      }
    }
  }
}
