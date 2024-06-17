import ExpoModulesCore

public class SegmentControlModule: Module {
  public func definition() -> ModuleDefinition {
    Name("SegmentControl")
    View(SegmentControlExpoView.self) {
      Events("onEvent")
        Prop("options") { (view: SegmentControlExpoView, prop: [[String: Any]]) in
        view.props.options = prop
      }
      Prop("selection") { (view: SegmentControlExpoView, prop: Int) in
        view.props.selection = prop
      }
      Prop("modifiers") { (view: SegmentControlExpoView, prop: [[String: Any]]) in
        view.props.modifiers = prop
      }
    }
  }
}
