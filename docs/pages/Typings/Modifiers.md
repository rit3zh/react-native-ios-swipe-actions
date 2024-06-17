# Type Alias: `Modifiers`

> **Modifiers**: `object`

The `Modifiers` type alias defines a set of properties that can be used to modify and style React Native components. Each property is optional and allows for detailed customization of the component's appearance and behavior.

## Type Declaration

### animation?

- **Type**: `object`
  - **animation.type**: `"spring"` | `"easeIn"` | `"easeOut"` | `"easeInOut"` | `"linear"` | `"interpolatingSpring"` | `"bouncy"` | `"smooth"` | `"default"`
  - **animation.value**: `any`

### autocorrectionDisabled?

- **Type**: `boolean`

### background?

- **Type**: [`Color`](Color.md) | `LinearGradient`

### blendMode?

- **Type**: `"color"` | `"colorBurn"` | `"colorDodge"` | `"darken"` | `"difference"` | `"exclusion"` | `"hardLight"` | `"hue"` | `"lighten"` | `"luminosity"` | `"multiply"` | `"overlay"` | `"saturation"` | `"screen"` | `"softLight"` | `"sourceAtop"` | `"destinationOver"` | `"destinationOut"` | `"plusDarker"` | `"plusLighter"` | `"normal"`

### blur?

- **Type**: `number`

### bold?

- **Type**: `boolean`

### border?

- **Type**: `object`
  - **border.color?**: [`Color`](Color.md)
  - **border.width?**: `number`

### brightness?

- **Type**: `number`

### buttonStyle?

- **Type**: `"bordered"` | `"borderless"` | `"plain"` | `"borderedProminent"`

### clipShape?

- **Type**: `"circle"` | `"roundedRectangle"` | `"capsule"` | `"rectangle"` | `"ellipse"` | `object`

### compositingGroup?

- **Type**: `boolean`

### contentTransition?

- **Type**: `"numericText"` | `"opacity"` | `"identity"` | `"interpolate"` | `"symbolEffect"`

### contrast?

- **Type**: `number`

### cornerRadius?

- **Type**: `number`

### datePickerStyle?

- **Type**: `"compact"` | `"wheel"` | `"graphical"` | `"automatic"`

### disabled?

- **Type**: `boolean`

### environment?

- **Type**: `object`
  - **environment.colorScheme?**: `"light"` | `"dark"`

### fill?

- **Type**: [`Color`](Color.md)

### fixedSize?

- **Type**: `boolean` | `object`

### font?

- **Type**: `"body"` | `"callout"` | `"caption"` | `"caption2"` | `"footnote"` | `"headline"` | `"largeTitle"` | `"subheadline"` | `"title"` | `"title2"` | `"title3"`

### fontSize?

- **Type**: `number`

### fontWeight?

- **Type**: `"ultralight"` | `"thin"` | `"light"` | `"regular"` | `"medium"` | `"semibold"` | `"bold"` | `"heavy"` | `"black"`

### foregroundStyle?

- **Type**: [`Color`](Color.md) | [`Color`](Color.md)[] | `LinearGradient`

### frame?

- **Type**: `object`

### grayscale?

- **Type**: `number`

### hidden?

- **Type**: `boolean`

### ignoresSafeArea?

- **Type**: `boolean`

### imageScale?

- **Type**: `"small"` | `"medium"` | `"large"`

### italic?

- **Type**: `boolean`

### keyboardType?

- **Type**: `"numberPad"` | `"phonePad"` | `"namePhonePad"` | `"emailAddress"` | `"decimalPad"` | `"twitter"` | `"webSearch"` | `"asciiCapableNumberPad"` | `"numbersAndPunctuation"` | `"URL"` | `"asciiCapable"` | `"default"`

### labelIsHidden?

- **Type**: `boolean`

### lineLimit?

- **Type**: `number`

### listStyle?

- **Type**: `"inset"` | `"grouped"` | `"plain"` | `"insetGrouped"` | `"sidebar"`

### mask?

- **Type**: `string`

### offset?

- **Type**: `object`
  - **offset.x?**: `number`
  - **offset.y?**: `number`

### onAppear?

- **Type**: () => `void`

### onDisappear?

- **Type**: () => `void`

### opacity?

- **Type**: `number`

### padding?

- **Type**: `number` | `boolean` | `object`

### pickerStyle?

- **Type**: `"wheel"` | `"segmented"` | `"menu"`

### position?

- **Type**: `object`
  - **position.x?**: `number`
  - **position.y?**: `number`

### redacted?

- **Type**: `"privacy"` | `"placeholder"` | `"invalidated"`

### resizable?

- **Type**: `boolean`

### rotationEffect?

- **Type**: `object`
  - **rotationEffect.degrees?**: `number`
  - **rotationEffect.radians?**: `number`

### saturation?

- **Type**: `number`

### scaleEffect?

- **Type**: `number`

### scrollDisabled?

- **Type**: `boolean`

### sensoryFeedback?

- **Type**: `object`
  - **sensoryFeedback.feedback**: `"warning"` | `"error"` | `"success"` | `"alignment"` | `"decrease"` | `"impact"` | `"increase"` | `"levelChange"` | `"selection"` | `"start"` | `"stop"`
  - **sensoryFeedback.trigger**: `any`

### shadow?

- **Type**: `object`
  - **shadow.color?**: [`Color`](Color.md)
  - **shadow.opacity?**: `number`
  - **shadow.radius?**: `number`
  - **shadow.x?**: `number`
  - **shadow.y?**: `number`

### strikethrough?

- **Type**: `boolean` | `object`

### stroke?

- **Type**: `object`
  - **stroke.color**: [`Color`](Color.md)
  - **stroke.lineWidth**: `number`

### symbolRenderingMode?

- **Type**: `"palette"` | `"monochrome"` | `"hierarchical"` | `"multicolor"`

### textContentType?

- **Type**: `"name"` | `"namePrefix"` | `"givenName"` | `"middleName"` | `"familyName"` | `"nameSuffix"` | `"nickname"` | `"jobTitle"` | `"organizationName"` | `"location"` | `"fullStreetAddress"` | `"streetAddressLine1"` | `"streetAddressLine2"` | `"addressCity"` | `"addressState"` | `"addressCityAndState"` | `"sublocality"` | `"countryName"` | `"postalCode"` | `"telephoneNumber"` | `"emailAddress"` | `"URL"` | `"creditCardNumber"` | `"username"` | `"password"` | `"newPassword"` | `"oneTimeCode"` | `"shipmentTrackingNumber"` | `"flightNumber"` | `"dateTime"` | `"birthdate"` | `"birthdateDay"` | `"birthdateMonth"` | `"birthdateYear"` | `"creditCardSecurityCode"` | `"creditCardName"` | `"creditCardGivenName"` | `"creditCardMiddleName"` | `"creditCardFamilyName"` | `"creditCardExpiration"` | `"creditCardExpirationMonth"` | `"creditCardExpirationYear"` | `"creditCardType"`

### textFieldStyle?

- **Type**: `"plain"` | `"roundedBorder"`

### textInputAutocapitalization?

- **Type**: `"never"` | `"words"` | `"sentences"` | `"characters"`

### tint?

- **Type**: [`Color`](Color.md)

### underline?

- **Type**: `boolean` | `object`

### zIndex?

- **Type**: `number`

## Source

utils/modifiers.ts:51
