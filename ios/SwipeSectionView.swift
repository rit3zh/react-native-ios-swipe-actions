import SwiftUI
import ExpoModulesCore

struct SwipeSectionView: View {
  @ObservedObject var props: SwipeSectionProps
  
  var body: some View {
    EmptyView()
      .reactNativeViewModifiers(mods: props.modifiers)
  }
}
