// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrb4P57SWFyXX84DWI64oB3jLqwkHhYTc",
  authDomain: "logintemplate-41dcf.firebaseapp.com",
  projectId: "logintemplate-41dcf",
  storageBucket: "logintemplate-41dcf.firebasestorage.app",
  messagingSenderId: "276963944413",
  appId: "1:276963944413:web:18e10c2f7eb6fd66ed7834",
  measurementId: "G-M5WBJEY3EF"
};

// Initialize Firebase only once
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // përdor instancën ekzistuese nëse ka
}

// Initialize Analytics only if running in a browser environment
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };

