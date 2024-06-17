import SwiftUI

struct DatePickerView: View {
    @ObservedObject var props: DatePickerProps
    @State var date = Date()

    var body: some View {
        if #available(iOS 15.0, *) {
            if props.startComponent.isEmpty {
                DatePicker(props.title, selection: $date, displayedComponents: mapDisplayedComponents(props.displayedComponents))
                    .reactNativeViewModifiers(mods: props.modifiers, onEvent: props.onEvent)
                    .onAppear {
                        date = ISO8601DateFormatter().date(from: props.selection) ?? Date()
                    }
                    .onChange(of: date) { newValue in
                        props.onEvent([
                            "onValueChange": newValue.ISO8601Format()
                        ])
                    }
            } else {
                let calendar = Calendar.current
                let startComponents = DateComponents(year: props.startComponent["year"], month: props.startComponent["month"], day: props.startComponent["day"], hour: props.startComponent["hour"], minute: props.startComponent["minute"], second: props.startComponent["second"])
                let endComponents = DateComponents(year: props.endComponent["year"], month: props.endComponent["month"], day: props.endComponent["day"], hour: props.endComponent["hour"], minute: props.endComponent["minute"], second: props.endComponent["second"])
                let startDate = calendar.date(from: startComponents)!
                let endDate = calendar.date(from: endComponents)!
                
                DatePicker(props.title, selection: $date, in: startDate...endDate, displayedComponents: mapDisplayedComponents(props.displayedComponents))
                    .reactNativeViewModifiers(mods: props.modifiers, onEvent: props.onEvent)
                    .onAppear {
                        date = ISO8601DateFormatter().date(from: props.selection) ?? Date()
                    }
                    .onChange(of: date) { newValue in
                        props.onEvent([
                            "onValueChange": newValue.ISO8601Format()
                        ])
                    }
            }
        }
    }

    func mapDisplayedComponents(_ components: [String]) -> DatePickerComponents {
        var result: DatePickerComponents = []
        for component in components {
            switch component {
            case "date":
                result.insert(.date)
            case "hourAndMinute":
                result.insert(.hourAndMinute)
            default:
                result.insert(.date)
            }
        }
        return result
    }
}
