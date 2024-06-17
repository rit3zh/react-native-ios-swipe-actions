import SwiftUI
import ExpoModulesCore
import Combine

struct SwipeListView: View {
    
    @ObservedObject var props: SwipeListProps
    
    
    var body: some View {
        
        if #available(iOS 16.0, *) {
            
            List {
                ForEach(props.children?.indices ?? 0..<0, id: \.self) { (index) in
                    let childSubviews = props.children?[index].reactSubviews().first?.reactSubviews()
                    if let section = props.children?[index].reactSubviews().first as? SwipeSectionExpoView {
                        Section(

                            header: Text(section.props.header), footer: Text(section.props.footer)) {
                                ForEach(childSubviews?.indices ?? 0..<0, id: \.self) { childIndex in
                                    if let v = childSubviews?[childIndex] {
                                        RepresentableView(view: v)
                                            .frame(width: v.frame.width, height: v.frame.height)                        .swipeActions(edge: .leading, allowsFullSwipe: props.leadingFullSwipeEnabled) {
                                                ForEach(0..<self.props.leadingSwipeActions.count, id: \.self) { _index in
                                                    Button(self.props.leadingSwipeActions[_index]["title"] ?? "no value", systemImage: self.props.leadingSwipeActions[_index]["icon"] ?? "", role: props.leadingFullSwipeDestructive ? .destructive: .cancel) {
                                                        props.onEvent(["onActionClick": ["indices": childIndex, "title": self.props.leadingSwipeActions[_index]["title"] ?? "no title"]])
                                                    }.tint(getColor(self.props.leadingSwipeActions[_index]["tint"]))
                                                        
                                                }
                                            }                        .swipeActions(edge: .trailing, allowsFullSwipe: props.trailingFullSwipeEnabled) {
                                                ForEach(0..<self.props.trailingSwipeActions.count, id: \.self) { index in
                                                    Button(self.props.trailingSwipeActions[index]["title"] ?? "no value", systemImage: self.props.trailingSwipeActions[index]["icon"] ?? "", role: props.trailingFullSwipeDestructive ? .destructive: .cancel) {
                                                        props.onEvent(["onActionClick": ["indices": childIndex as Any, "title": self.props.trailingSwipeActions[index]["title"] ?? "no title"]])
                                    
                                                    }.tint(getColor(self.props.trailingSwipeActions[index]["tint"]))
                                                }
                                            }
                                }
                            }
                        }
                        .reactNativeViewModifiers(mods: section.props.modifiers)
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
