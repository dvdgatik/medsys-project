# Appointment Scheduler Lite, Simple Project For MedSys

A simple cross-platform appointment scheduling app for patients to manage medical appointments. Built with React Native, TypeScript, Redux Toolkit, and supports web via `react-native-web`.

---

## 📝 Description

This project is a lightweight Appointment Scheduler designed to demonstrate:

- **React Native** app with full **TypeScript** support.
- State management using **Redux Toolkit**.
- Form management and validation with **React Hook Form** and **Yup**.
- Cross-platform support: **iOS, Android, and Web** (using Expo and `react-native-web`).
- Modular folder structure with separation between screens, components, and store.
- Basic authentication simulation (login screen).
- Create, list, search, and manage appointments with date selection via native date pickers.
- Clean, readable, and type-safe code emphasizing maintainability and extensibility.

---

## 🚀 Features

- Simulated Login with form validation.
- View list of upcoming appointments.
- Create new appointments with date picker, doctor name, and optional notes.
- Toggle between list and grid views for appointments.
- Cross-platform UI compatible with mobile and web.
- Error handling and input validation.

---

## 📂 Project Structure

```
└── 📁medsys-appointment-scheduler-lite
    └── 📁.expo
        ├── devices.json
        ├── README.md
        ├── settings.json
    └── 📁assets
        ├── adaptive-icon.png
        ├── favicon.png
        ├── icon.png
        ├── splash-icon.png
    └── 📁src
        └── 📁components
            ├── AppointmentCard.tsx
            ├── AppointmentSearchBar.tsx
            ├── CrossPlatformPicker.tsx
            ├── DateTimePickerInput.tsx
            ├── EmptyListMessage.tsx
            ├── SessionLoader.tsx
            ├── StatusTag.tsx
            ├── ViewToggleButton.tsx
        └── 📁navigation
            ├── AppNavigator.tsx
        └── 📁screens
            ├── AppointmentDetailScreen.tsx
            ├── AppointmentListScreen.tsx
            ├── CreateAppointmentScreen.tsx
            ├── LoginScreen.tsx
        └── 📁store
            ├── appointmentsSlice.ts
            ├── authSlice.ts
            ├── index.ts
        └── 📁types
            ├── appointment.ts
            ├── navigation.ts
            ├── user.ts
            ├── index.ts
    ├── .gitignore
    ├── app.json
    ├── App.tsx
    ├── index.ts
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json
```

---

## Redux Flow Diagram

<img width="3840" height="1705" alt="Untitled diagram _ Mermaid Chart-2025-07-23-172805" src="https://github.com/user-attachments/assets/fef7b418-7b3b-4fcc-8a56-9540e29f22aa" />

## TypeScript Contracts Diagram

<img width="3062" height="3840" alt="Untitled diagram _ Mermaid Chart-2025-07-23-182048" src="https://github.com/user-attachments/assets/1c89daf6-e45d-4737-ab94-bec58c5d219b" />

## 📦 Dependencies

### Core

- **react-native**
- **react**
- **expo** (SDK for cross-platform builds and utilities)
- **typescript**

### State Management

- **@reduxjs/toolkit** (simplified Redux)
- **react-redux** (React bindings for Redux)

### Forms & Validation

- **react-hook-form** (form management)
- **yup** (schema validation)
- **@hookform/resolvers** (connect yup with react-hook-form)

### Navigation

- **@react-navigation/native**
- **@react-navigation/native-stack**

### Session and Store Management

- AsyncStorage

### Web Support

- **react-native-web**
- **react-dom**

### Date Handling & Picker

- **@react-native-community/datetimepicker** (native date & time picker UI)
- **date-fns** (date formatting & manipulation)

### Utilities

- **uuid** (unique id generation)

---

## ⚙️ Native Libraries Used

- **@react-native-community/datetimepicker**  
  Provides native date and time pickers for iOS and Android, integrated in React Native.

- **react-native-web**  
  Allows React Native components to render on web browsers.

---

## 📋 Versioning

- React Native: 0.79.x (via Expo SDK 48 or later)
- Expo SDK: 53+ (supports web, iOS, Android)
- TypeScript: 5.x
- Redux Toolkit: latest stable
- React Hook Form & Yup: latest stable

---

## 📖 How to Run

1. Clone the repo
2. Run `npm install` to install dependencies
3. Start the project with Expo: **npx expo start**
4. Run on device/emulator/simulator or web browser via Expo Dev Tools

## 🛠️ Next Steps / Improvements

- [ ] Add real backend API for auth and appointments.
- [ ] Add persistent storage (SQLite).
- [x] Enhance UI/UX with animations and better design.
- [ ] Add unit and integration tests with React Testing Library (RTL) and Jest **(In Progress)**.
- [ ] Integrate monorepo and separate the web and mobile app
- [ ] Add error boundaries and more robust error handling.
- [x] Support for appointment editing.
- [x] Add Appointment Detail View
- [x] Update Appointment Status
