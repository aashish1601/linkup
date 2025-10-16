<<<<<<< HEAD
# 💬 LinkUp - Modern Chat Application

<div align="center">

![LinkUp](https://img.shields.io/badge/LinkUp-Chat%20App-7C3AED?style=for-the-badge)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

*A beautiful, dark-themed chat application built with React Native & Expo* 🌙

[Features](#-features) • [Screenshots](#-screenshots) • [Getting Started](#-getting-started) • [Build APK](#-build-apk)

</div>

---

## ✨ Features

### 💬 **Chat Interface**
- 🌑 **Beautiful Dark Theme** - Easy on the eyes, perfect for night chatting
- 💬 **Real-time Messaging** - Send and receive text messages instantly
- 🎤 **Voice Messages** - Record and send voice notes with live timer
- ⏱️ **Message Timestamps** - Know exactly when messages were sent
- 🔒 **End-to-End Encrypted** - Your messages are secure (UI indicator)

### 👤 **User Profiles**
- 📸 **Profile Pages** - View detailed user profiles with avatar
- 💰 **Coin System** - In-app coin balance with recharge options
- 📱 **Profile Menu** - Access coins, terms, privacy policy, and delete chat

### 💰 **Coin System**
- ⚡ **Coin Balance** - Track your coins with flash icon
- 💳 **Multiple Packages** - Choose from various coin packs (₹29 - ₹249)
- 🎁 **Bonus Coins** - Get extra coins with each purchase
- 📊 **Ad Rewards** - Watch ads to earn free coins
- 📈 **Bottom Sheet UI** - Quick recharge from chat screen

### 📞 **Call Features**
- 📱 **Voice Calls** - Beautiful call screen UI
- ⏱️ **Live Timer** - Track call duration in real-time
- 🔇 **Mute/Unmute** - Control your microphone
- 🔊 **Speaker Toggle** - Switch between earpiece and speaker
- ❌ **End Call** - Clean call termination

### 🎨 **UI/UX**
- 🌙 **Dark Mode** - Consistent dark theme throughout
- 💜 **Purple Accents** - Beautiful purple color scheme
- 🎯 **WhatsApp-Inspired** - Familiar and intuitive design
- 📱 **Responsive** - Adapts to different screen sizes
- ✨ **Smooth Animations** - Polished user experience

---

## 📸 Screenshots

```
🏠 Home Screen          💬 Chat Window         👤 Profile Page
   ┌─────────┐            ┌─────────┐            ┌─────────┐
   │ LinkUp  │            │ ← Miya  │            │  ← 💰 ⋮ │
   │ 🔍 ⋮   │            │   💰100 │            │         │
   ├─────────┤            ├─────────┤            │  [IMG]  │
   │CHATS    │            │Messages │            │  Miya   │
   ├─────────┤            │here...  │            │ I love  │
   │• John   │            │         │            │ deep    │
   │• Rohan  │            │ [Input] │            │ talk!   │
   │• Calix  │            │ 🎤 ➤   │            │ 💬 🎤  │
   └─────────┘            └─────────┘            └─────────┘

💰 Coins Page          📞 Call Screen         🎤 Recording
   ┌─────────┐            ┌─────────┐            ┌─────────┐
   │ ← Coins │            │← 💰100⋮│            │Messages │
   ├─────────┤            │         │            ├─────────┤
   │Balance:0│            │  [IMG]  │            │🔴 0:23  │
   │⚡ Packs:│            │  Miya   │            │Slide to │
   │80  ₹29  │            │On Call  │            │cancel ➤ │
   │240 ₹69  │            │ 12:32   │            └─────────┘
   │360 ₹119 │            │🔇 🔊 📵│
   └─────────┘            └─────────┘
```

---

## 🛠️ Tech Stack

- **Framework**: React Native with Expo Router
- **Language**: TypeScript
- **Navigation**: Expo Router (File-based routing)
- **Icons**: Expo Vector Icons (Ionicons, Feather, Entypo)
- **Audio**: Expo AV (Voice recording)
- **UI Components**: React Native core components
- **Styling**: StyleSheet with responsive scaling
- **State Management**: React Hooks (useState, useEffect)

---

## 📱 Project Structure

```
LinkUp/
├── src/
│   ├── app/                          # Expo Router pages
│   │   ├── _layout.tsx              # Root layout with splash screen
│   │   ├── (auth)/                  # Auth group (future login)
│   │   └── (main)/                  # Main app screens
│   │       ├── index.tsx            # Home screen (chat list)
│   │       ├── chat.tsx             # Chat conversation screen
│   │       ├── profile.tsx          # User profile screen
│   │       ├── coins.tsx            # Coin packages screen
│   │       └── call.tsx             # Voice call screen
│   │
│   ├── components/
│   │   ├── atoms/                   # Small reusable components
│   │   └── molecules/               # Complex components
│   │       ├── chats.tsx            # Chat list component
│   │       ├── MessageCard.tsx      # Individual chat card
│   │       ├── CoinBalanceSheet.tsx # Coin recharge bottom sheet
│   │       ├── VoiceRecorder.tsx    # Voice recording UI
│   │       └── ChatMenu.tsx         # Chat options menu
│   │
│   ├── assets/
│   │   └── images/                  # App icons and images
│   │
│   ├── constants/
│   │   └── imagePath.tsx            # Image path constants
│   │
│   ├── styles/
│   │   └── colors.ts                # Color constants
│   │
│   └── utils/
│       └── scaling.ts               # Responsive scaling utilities
│
├── app.json                         # Expo configuration
├── eas.json                         # EAS Build configuration
├── package.json                     # Dependencies
└── tsconfig.json                    # TypeScript config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (installed automatically)
- **Expo Go app** (for testing on phone)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd LinkUp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on device**
   - Scan QR code with Expo Go app (Android/iOS)
   - Or press `a` for Android emulator
   - Or press `i` for iOS simulator

---

## 📦 Build APK

### Method 1: EAS Build (Recommended)

1. **Install EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**
   ```bash
   eas login
   ```

3. **Build APK**
   ```bash
   # For testing
   eas build -p android --profile preview
   
   # For production
   eas build -p android --profile production
   ```

4. **Download APK**
   - Wait 10-15 minutes
   - Download from the link provided
   - Install on Android device

### Method 2: Local Build

```bash
npx expo prebuild --platform android
cd android
./gradlew assembleRelease
```

APK location: `android/app/build/outputs/apk/release/app-release.apk`

---

## 🎯 Key Features Breakdown

### 1. **Chat System**
```typescript
// Message types supported:
- Text messages
- Voice messages (with duration)
- Timestamps
- Sender identification
```

### 2. **Voice Recording**
```typescript
// Features:
- Real-time recording with live timer
- Pulse animation indicator
- Auto-start on mic press
- Send or cancel options
```

### 3. **Coin System**
```typescript
// Packages available:
- 80 coins + bonus = ₹29
- 240 coins + bonus = ₹69
- 360 coins + bonus = ₹119
- 480 coins + bonus = ₹190
- 720 coins + bonus = ₹249
```

### 4. **Navigation**
```typescript
// Screens:
Home → Chat → Profile → Coins
  ↓      ↓
Call   Recording
```

---

## 🎨 Design System

### Colors
```typescript
Primary:    #7C3AED  (Purple)
Background: #0b141a  (Dark)
Cards:      #202c33  (Dark Gray)
Text:       #e9edef  (Light)
Secondary:  #8696a0  (Gray)
Accent:     #00a884  (Green)
```

### Typography
```typescript
Headers:    20-28px, Bold
Body:       14-16px, Regular
Captions:   11-13px, Medium
```

---

## 🔐 Permissions

The app requires the following permissions:

- 🎤 **Microphone** - For voice message recording
- 📱 **Internet** - For future real-time messaging

---

## 📝 Configuration

### App Details
- **Package Name**: `com.linkup.chatapp`
- **App Name**: LinkUp
- **Version**: 1.0.0
- **Version Code**: 1

### Supported Platforms
- ✅ Android (Primary)
- ✅ iOS (Compatible)
- ✅ Web (Basic support)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

---

## 🐛 Known Issues

- Voice recording requires microphone permission prompt
- Dark mode only (light mode not implemented)
- Messages are stored locally (no backend yet)

---

## 🚧 Future Enhancements

- [ ] Backend integration with Firebase/Supabase
- [ ] Real user authentication
- [ ] Push notifications
- [ ] Group chats
- [ ] Media sharing (images, videos)
- [ ] Status/Stories feature
- [ ] Video calls
- [ ] Message reactions
- [ ] Read receipts
- [ ] Online/offline status

---

## 📚 Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://expo.github.io/router/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- Design inspired by WhatsApp
- Icons from Expo Vector Icons
- Built with love using Expo ❤️

---

## 📞 Support

If you have any questions or need help, feel free to:
- 📧 Open an issue
- 💬 Start a discussion
- 📱 Contact the maintainers

---

<div align="center">

**Made with ❤️ and ☕**

⭐ Star this repo if you like it!

</div>
=======

>>>>>>> 19a5568ac2f84efa343cfd5c49dc5dc6ccfdcb80

