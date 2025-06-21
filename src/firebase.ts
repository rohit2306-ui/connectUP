import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcbCeBVSDqHDP6tGIQiKzWtsJ7p0rXr3A",
  authDomain: "portfolio-922fd.firebaseapp.com",
  projectId: "portfolio-922fd",
  storageBucket: "portfolio-922fd.firebasestorage.app",
  messagingSenderId: "674299264951",
  appId: "1:674299264951:web:37edac73f3cd0d3ae87232",
  measurementId: "G-HFB315SPK5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;