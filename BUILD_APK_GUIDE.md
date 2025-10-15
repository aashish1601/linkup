# LinkUp - Build APK Guide

## 📱 How to Build APK for Android

There are **2 methods** to build your APK:

---

## Method 1: Using EAS Build (Recommended) ⭐

### Prerequisites
- Expo account (free): https://expo.dev/signup
- EAS CLI installed (already installed)

### Steps:

#### 1. Login to Expo
```bash
eas login
```
Enter your Expo account credentials.

#### 2. Configure the project
```bash
eas build:configure
```

#### 3. Build APK (Preview/Development)
```bash
eas build -p android --profile preview
```

This will:
- Upload your code to Expo servers
- Build the APK in the cloud
- Give you a download link when complete (usually 10-15 minutes)

#### 4. Build Production APK
```bash
eas build -p android --profile production
```

#### 5. Download APK
After build completes, you'll get a link to download the APK file.

---

## Method 2: Local Build (Expo Export)

### Prerequisites
- Android Studio installed
- Java JDK installed

### Steps:

#### 1. Install dependencies
```bash
npm install
```

#### 2. Prebuild (creates android folder)
```bash
npx expo prebuild --platform android
```

#### 3. Build APK locally
```bash
cd android
./gradlew assembleRelease
```

#### 4. Find your APK
The APK will be at:
```
android/app/build/outputs/apk/release/app-release.apk
```

---

## 🎯 Quick Build Commands

### For Testing (Faster)
```bash
eas build -p android --profile preview
```

### For Production/Release
```bash
eas build -p android --profile production
```

### Check Build Status
```bash
eas build:list
```

---

## 📦 App Configuration

Your app is configured with:
- **Package Name**: `com.linkup.chatapp`
- **App Name**: LinkUp
- **Version**: 1.0.0
- **Version Code**: 1

---

## 🔧 Troubleshooting

### Build Failed?
1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. Clear cache and rebuild:
   ```bash
   npx expo start -c
   ```

3. Check your `app.json` is valid

### EAS Login Issues?
- Create account at: https://expo.dev/signup
- Verify email before logging in

### Android Permissions
Your app requests:
- Microphone (for voice recording)

---

## 📱 Installing APK on Device

### Method 1: Direct Download
1. Build completes → Get download link
2. Open link on Android phone
3. Download APK
4. Enable "Install from Unknown Sources" in settings
5. Install APK

### Method 2: Transfer File
1. Download APK to computer
2. Connect phone via USB
3. Copy APK to phone
4. Open file manager and install

---

## 🚀 Publishing to Play Store

### Using EAS Submit
```bash
eas build -p android --profile production
eas submit -p android
```

You'll need:
- Google Play Developer Account ($25 one-time fee)
- App signing key
- Privacy policy URL
- Screenshots and descriptions

---

## 📝 Notes

- First build takes longer (10-20 minutes)
- Subsequent builds are faster (5-10 minutes)
- Preview builds are for testing
- Production builds are for release
- APK file size: ~50-80 MB (estimated)

---

## ✅ Your App Features

✨ **Working Features:**
- Dark theme chat interface
- Voice recording and playback
- Coin balance system
- Profile pages
- Call screen UI
- Chat menus
- Bottom sheets

---

## 🆘 Need Help?

- Expo Docs: https://docs.expo.dev/build/introduction/
- EAS Build: https://docs.expo.dev/build/setup/

---

**Ready to build?** Run:
```bash
eas build -p android --profile preview
```

