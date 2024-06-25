import SwiftUI
import ExpoModulesCore
import Combine

struct SwipeListView: View {
    
    @ObservedObject var props: SwipeListProps
    
    var body: some View {
        if #available(iOS 16.0, *) {
            List {
                ForEach(props.children?.indices ?? 0..<0, id: \.self) { index in
                    let reactSubviews = props.children?[index].reactSubviews() ?? []
                    ForEach(reactSubviews.indices, id: \.self) { subIndex in
                        let reactView = reactSubviews[subIndex]
                        RepresentableView(view: reactView)
                            .frame(width: reactView.frame.width, height: reactView.frame.height)
                            .swipeActions(edge: .leading, allowsFullSwipe: props.leadingFullSwipeEnabled) {
                                ForEach(0..<self.props.leadingSwipeActions.count, id: \.self) { _index in
                                    Button(self.props.leadingSwipeActions[_index]["title"] ?? "no value", systemImage: self.props.leadingSwipeActions[_index]["icon"] ?? "", role: props.leadingFullSwipeDestructive ? .destructive: .cancel) {
                                        props.onEvent(["onActionClick": ["indices": index * reactSubviews.count + subIndex, "title": self.props.leadingSwipeActions[_index]["title"] ?? "no title"]])
                                    }.tint(getColor(self.props.leadingSwipeActions[_index]["tint"]))
                                }
                            }
                            .swipeActions(edge: .trailing, allowsFullSwipe: props.trailingFullSwipeEnabled) {
                                ForEach(0..<self.props.trailingSwipeActions.count, id: \.self) { _index in
                                    Button(self.props.trailingSwipeActions[_index]["title"] ?? "no value", systemImage: self.props.trailingSwipeActions[_index]["icon"] ?? "", role: props.trailingFullSwipeDestructive ? .destructive: .cancel) {
                                        props.onEvent(["onActionClick": ["indices": index * reactSubviews.count + subIndex, "title": self.props.trailingSwipeActions[_index]["title"] ?? "no title"]])
                                    }.tint(getColor(self.props.trailingSwipeActions[_index]["tint"]))
                                }
                            }
                    }
                }
            }
            .reactNativeViewModifiers(mods: props.modifiers)
            
        }
    }
}
