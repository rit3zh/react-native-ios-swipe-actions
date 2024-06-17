import SwiftUI
import ExpoModulesCore
import Combine


struct SegmentControlView: View {
    @ObservedObject var props: SegmentControlProps

    var body: some View {
        if #available(iOS 14.0, *) {
            Picker("", selection: $props.selection) {
                ForEach(0..<props.options.count, id: \.self) { index in
                    if let image = props.options[index]["image"] as? Bool,
                       let label = props.options[index]["label"] as? String {
                        if image {
                            Image(systemName: label)
                        } else {
                            Text(label)
                        }
                    }
                }
            }
            .reactNativeViewModifiers(mods: props.modifiers)
            .onChange(of: props.selection) { newValue in
                props.onEvent(["onValueChange": ["value": newValue]])
            }
        }
    }
}
