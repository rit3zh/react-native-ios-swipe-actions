import SwiftUI
import ExpoModulesCore
import Combine

struct Restaurant: Identifiable {
    let id = UUID()
    let name: String
}

struct RestaurantRow: View {
    var restaurant: Restaurant

    var body: some View {
        Text("Come and eat at \(restaurant.name)")
    }
}

struct EditableListView: View {
    
    let restaurants = [
        Restaurant(name: "Joe's Original"),
        Restaurant(name: "The Real Joe's Original"),
        Restaurant(name: "Original Joe's")
    ]
    
    @ObservedObject var props: EditingListProps
    @State var editMode: EditMode = .inactive
    @State private var users = ["Paul", "Taylor", "Adele"]
    
    var body: some View {
        if #available(iOS 16.0, *) {
            List {
                ForEach(props.children?.indices ?? 0..<0, id: \.self) { index in
                    let childSubviews = props.children?[index].reactSubviews().first?.reactSubviews()
                    if let section = props.children?[index].reactSubviews().first as? SwipeSectionExpoView {
                        Section(
                            
                            header: Text(section.props.header), footer: Text(section.props.footer)) {
                                ForEach(childSubviews ?? [], id: \.self) { v in
                                    RepresentableView(view: v)
                                        .frame(width: v.frame.width, height: v.frame.height)
                                }
                            }
                            .reactNativeViewModifiers(mods: section.props.modifiers)
                    } else {
                        RepresentableView(view: props.children?[index] ?? UIView())
                            .frame(width: props.children?[index].frame.width, height: props.children?[index].frame.height)
                    }
                }
                .onMove(perform: props.editingEnabled ? move : nil)
                .onDelete(perform: props.editingEnabled ? delete : nil)
                
            }.environment(\.editMode, .constant(props.editingEnabled ? .active : .inactive))
            .reactNativeViewModifiers(mods: props.modifiers)
        }
    }

    func move(from source: IndexSet, to destination: Int) {
        let indices = Array(source)

        props.onEvent(["onMove": ["indices": indices, "destination": destination]])
    }

    func delete(at offsets: IndexSet) {
        let indices = Array(offsets)
        props.onEvent(["onDelete": ["indices": indices]])
    }
}
