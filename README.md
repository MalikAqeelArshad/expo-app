# Expo App

A professional React Native application built with **Expo SDK 57**, featuring a custom component library, file-based routing with Expo Router, and cross-platform support for iOS, Android, and Web.

## Tech Stack

- **Expo SDK 57** — Universal React Native platform
- **React Native 0.86** — Native mobile framework
- **React 19.2** — UI library with latest features
- **Expo Router 57** — File-based routing
- **TypeScript 6.0** — Type safety
- **New Architecture** — Enabled for improved performance

## Project Structure

```
expo-app/
├── app/                    # File-based routes (Expo Router)
│   ├── _layout.tsx         # Root layout with Stack navigator
│   ├── index.tsx           # Home screen
│   ├── common.tsx          # Component showcase screen
│   ├── products.tsx        # Products screen
│   ├── messages.tsx        # Messages screen
│   ├── account.tsx         # Account screen
│   └── listings/           # Nested route group
│       ├── index.tsx       # Listings list
│       └── details.tsx     # Listing details
├── components/             # Reusable UI components
│   ├── Button.tsx          # Custom button component
│   ├── Card.tsx            # Card container component
│   ├── Icon.tsx            # Icon wrapper (MaterialCommunityIcons)
│   ├── Input.tsx           # Text input with icon support
│   ├── Picker.tsx          # Picker component
│   ├── Screen.tsx          # Safe area screen wrapper
│   ├── Select.tsx          # Dropdown select with search
│   ├── Switch.tsx          # Toggle switch component
│   ├── Text.tsx            # Typography component
│   └── lists/              # List-related components
│       ├── ListItem.tsx
│       ├── ListItemDelete.tsx
│       └── ListItemSeparator.tsx
├── utils/                  # Shared utilities
│   ├── colors.ts           # Color palette
│   ├── data.ts             # Mock data
│   ├── styles.ts           # Shared styles
│   └── types.ts            # TypeScript type definitions
├── assets/                 # Images and icons
├── App.tsx                 # App entry point
├── app.json                # Expo configuration
├── eas.json                # EAS Build configuration
├── package.json            # Dependencies
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Expo Go](https://expo.dev/client) (for testing on physical devices)

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Start the development server
yarn start

# Start with specific platform
yarn ios       # iOS simulator
yarn android   # Android emulator
yarn web       # Web browser
```

### Building

```bash
# Build for production
eas build --platform all

# Build for specific platform
eas build --platform ios
eas build --platform android
```

## Component Library

This app includes a comprehensive set of reusable components:

| Component | Description |
|-----------|-------------|
| `Button` | Customizable button with variants |
| `Card` | Container with shadow and rounded corners |
| `Icon` | MaterialCommunityIcons wrapper with theming |
| `Input` | Text input with icon and validation support |
| `Picker` | Scrollable picker with search |
| `Screen` | Safe area wrapper for screens |
| `Select` | Dropdown select with modal and search |
| `Switch` | Toggle switch component |
| `Text` | Typography with platform-specific styling |
| `ListItem` | List item with optional chevron |
| `ListItemDelete` | Swipe-to-delete list item |
| `ListItemSeparator` | Visual separator for lists |

## Routing

The app uses **Expo Router** for file-based routing:

| Route | Description |
|-------|-------------|
| `/` | Home screen |
| `/common` | Component showcase |
| `/products` | Products listing |
| `/messages` | Messages list |
| `/account` | Account settings |
| `/listings` | Listings list |
| `/listings/:id` | Listing details |

## Styling

- **Platform-specific styles** — Automatic font and size adjustments for iOS/Android
- **Centralized color palette** — Consistent theming across the app
- **Reusable style objects** — Shared text, input, and button styles

## Configuration

### Expo (`app.json`)

- **New Architecture** — Enabled for better performance
- **Edge-to-edge** — Enabled for Android
- **Runtime version** — Tied to app version for OTA updates

### EAS Build (`eas.json`)

- **Development** — Development client with internal distribution
- **Preview** — Internal distribution for testing
- **Production** — Auto-incrementing version for app stores

## License

Private
