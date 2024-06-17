To make your "List.mdx" file even better, you can add clear descriptions for each property, provide examples, and ensure that it is well-structured for readability. Here’s an enhanced version:

---

# Type Alias: `ListProps`

The `ListProps` type alias is an object that extends `Modifiers` and contains properties for configuring a list component, including swipe actions, styling, and event handling.

## Type Declaration

### Properties

#### `children?`

- **Type**: `React.ReactNode | ReactElement[]`
- **Description**: Optional. The content to be rendered inside the list. Can be a single React node or an array of React elements.

#### `leadingFullSwipeDestructive?`

- **Type**: `boolean`
- **Description**: Optional. Indicates if a full swipe from the leading edge (left side) of the list item is destructive.

#### `leadingFullSwipeEnabled?`

- **Type**: `boolean`
- **Description**: Optional. Enables or disables full swipe actions from the leading edge (left side) of the list item.

#### `leadingSwipeActions?`

- **Type**: [`SwipeActions`](Actions.md)[]
- **Description**: Optional. Array of swipe actions available from the leading edge (left side) of the list item. Refer to the [`SwipeActions`](Actions.md) documentation for details.

#### `onActionClick?`

- **Type**: (`index: number, title?: string`) => `any`
- **Parameters**:
  - `index`: `number` - The index of the action.
  - `title?`: `string` - The optional title of the action.
- **Returns**: `any`
- **Description**: Optional. Callback function invoked when an action is clicked.

#### `style?`

- **Type**: `StyleProp<ViewStyle>`
- **Description**: Optional. Custom styles to be applied to the list.

#### `trailingFullSwipeDestructive?`

- **Type**: `boolean`
- **Description**: Optional. Indicates if a full swipe from the trailing edge (right side) of the list item is destructive.

#### `trailingFullSwipeEnabled?`

- **Type**: `boolean`
- **Description**: Optional. Enables or disables full swipe actions from the trailing edge (right side) of the list item.

#### `trailingSwipeActions?`

- **Type**: [`SwipeActions`](Actions.md)[]
- **Description**: Optional. Array of swipe actions available from the trailing edge (right side) of the list item. Refer to the [`SwipeActions`](Actions.md) documentation for details.

## Source

List/types.ts:23
