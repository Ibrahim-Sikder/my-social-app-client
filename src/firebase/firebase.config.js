// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTL1oM4iNHUfRunl3kWsyDAGo3JbnUwaQ",
  authDomain: "social-media-app-1082a.firebaseapp.com",
  projectId: "social-media-app-1082a",
  storageBucket: "social-media-app-1082a.appspot.com",
  messagingSenderId: "986587601339",
  appId: "1:986587601339:web:71e8e3318636afa81f0c9e",
  measurementId: "G-K1VKGQNW1L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;