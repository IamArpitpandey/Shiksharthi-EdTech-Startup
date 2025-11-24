import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // For Authentication
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// Analytics can fail in environments without a measurement ID or where
// window is not available (SSR / tests). Guard it to avoid runtime crashes.
let analyticsInstance = null;
try {
  if (typeof window !== "undefined" && process.env.REACT_APP_FIREBASE_MEASUREMENT_ID) {
    analyticsInstance = getAnalytics(app);
  }
} catch (e) {
  // Do not throw — analytics failures shouldn't break the app during dev.
  // Log for debugging if needed.
  // eslint-disable-next-line no-console
  console.warn("Firebase analytics not initialized:", e);
}

export const analytics = analyticsInstance;
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // For Authentication


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app); 

export const analytics = getAnalytics(app); 
