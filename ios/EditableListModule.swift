import ExpoModulesCore
import SwiftUI

public class EditableListModule: Module {
  public func definition() -> ModuleDefinition {
    Name("EditableList")
      View(EditableListExpoView.self) {
          Events("onEvent")
          
         
          Prop("modifiers") { (view: EditableListExpoView, prop: [[String: Any]]) in
              view.props.modifiers = prop
          }
          
          Prop("editingEnabled") { (view: EditableListExpoView, prop: Bool) in
              view.props.editingEnabled = prop
          }
      }
  }
}
