import { clientEnv } from "@/shared/config/clientEnv";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: clientEnv.VITE_FIREBASE_API_KEY,
  authDomain: clientEnv.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: clientEnv.VITE_FIREBASE_PROJECT_ID,
  storageBucket: clientEnv.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: clientEnv.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: clientEnv.VITE_FIREBASE_APP_ID,
  measurementId: clientEnv.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
