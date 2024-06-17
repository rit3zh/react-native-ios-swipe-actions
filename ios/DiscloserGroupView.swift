import SwiftUI
import ExpoModulesCore
import Combine

struct DiscloserGroupView: View {
    @ObservedObject var props: DiscloserGroupProps
    @State private var revealDetails = false

    var body: some View {
        if #available(iOS 15.0, *) {
            List {
                ForEach(props.children?.indices ?? 0..<0, id: \.self) { index in
                    let childSubviews = props.children?[index].reactSubviews().first?.reactSubviews()
                    DisclosureGroup {
                        if let section = props.children?[index].reactSubviews().first as? DiscloserGroupExpoView {
                            ForEach(childSubviews ?? [], id: \.self) { v in
                                RepresentableView(view: v)
                                    .frame(width: v.frame.width, height: v.frame.height)
                            }
                        } else {
                            RepresentableView(view: props.children?[index] ?? UIView())
                                .frame(width: props.children?[index].frame.width, height: props.children?[index].frame.height)
                        }
                    } label: {
                        HStack {
                            if let titleDict = props.titles[safe: index],
                               let title = titleDict["title"] {
                                if let icon = titleDict["icon"],
                                   let imageColor = getColor(titleDict["iconColor"]) as Color? {
                                   
                                    Image(systemName: icon)
                                        .foregroundStyle(imageColor).padding(.trailing, 3.5)
                                }
                                
                                Text(title)
                                    .foregroundStyle(getColor(titleDict["titleColor"]) as Color? ?? .black)
                                
                               
                            } else {
                                Text("Click here to expand - \(index)")
                            }
                        }.reactNativeViewModifiers(mods: props.modifiers)
                    }
                }
            }
            .reactNativeViewModifiers(mods: props.modifiers)
        } else {
            Text("iOS 15.0 or later is required.")
        }
    }
}

extension Collection {
    subscript(safe index: Index) -> Element? {
        return indices.contains(index) ? self[index] : nil
    }
}
