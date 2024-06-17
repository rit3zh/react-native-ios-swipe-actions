import { NativeListProps } from "react-native-swift-components";

export const SwipeActionsOptions: NativeListProps = {
  leadingFullSwipeEnabled: true,
  leadingFullSwipeDestructive: false,
  leadingSwipeActions: [
    {
      title: "Read",
      icon: "envelope.open.fill",
      tint: "#2f89ff",
    },
    {
      title: "Remind Me",
      icon: "clock.fill",
      tint: "#5d5be6",
    },
  ],
  trailingFullSwipeDestructive: true,
  trailingFullSwipeEnabled: true,
  trailingSwipeActions: [
    {
      title: "Archive",
      icon: "archivebox.fill",
      tint: "#bf5bf2",
    },
    {
      title: "Flag",
      icon: "flag.fill",
      tint: "#fe9d0a",
    },
    {
      title: "More",
      icon: "ellipsis.circle.fill",
      tint: "a4a3a4",
    },
  ],
};
