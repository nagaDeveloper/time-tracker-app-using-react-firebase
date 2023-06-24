import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjVL0NpzAtbVzJ4XzYS9CIXC_YIc809dI",
  authDomain: "time-tracker-app-fa03a.firebaseapp.com",
  projectId: "time-tracker-app-fa03a",
  storageBucket: "time-tracker-app-fa03a.appspot.com",
  messagingSenderId: "886289214070",
  appId: "1:886289214070:web:51c187ba3dd2298cfecd57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
