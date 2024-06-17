import SwiftUI
import ExpoModulesCore
import Combine

struct SwiftListView: View {
    @ObservedObject var props: SwiftListProps
    
    var body: some View {
        if #available(iOS 15.0, *) {
            List {
                ForEach(props.children?.indices ?? 0..<0, id: \.self) { index in
                    let childSubviews = props.children?[index].reactSubviews().first?.reactSubviews()
                    if let section = props.children?[index].reactSubviews().first as? DiscloserGroupExpoView {
                        DiscloserGroupView(props: section.props)
                    } else {
                        RepresentableView(view: props.children?[index] ?? UIView())
                            .frame(width: props.children?[index].frame.width, height: props.children?[index].frame.height)
                    }
                }
            }
            .reactNativeViewModifiers(mods: props.modifiers)
        }
    }
}
