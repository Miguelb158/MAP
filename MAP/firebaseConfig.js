import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC_KDbgCJ-2G_WbREeL38TvyX2ThIMhiTE",
  authDomain: "mape-ed060.firebaseapp.com",
  projectId: "mape-ed060",
  storageBucket: "mape-ed060.appspot.com",
  messagingSenderId: "262728188550",
  appId: "1:262728188550:web:50aab0e91a5a1227170707"
};

const app = initializeApp(firebaseConfig);
export default app;