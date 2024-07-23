import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLm0ticDuIP9i2l_eORWJBOt65byNEiHc",
  authDomain: "testauth-9979f.firebaseapp.com",
  projectId: "testauth-9979f",
  storageBucket: "testauth-9979f.appspot.com",
  messagingSenderId: "760012311472",
  appId: "1:760012311472:web:f4620057aa703e9622e475",
  measurementId: "G-7K3ZXG51FY",
};

// const firebaseConfig = {
//   apiKey: process.env.FIRE_BASE_API_KEY,
//   authDomain: process.env.FIRE_BASE_AUTH_DOMAIN,
//   projectId: process.env.FIRE_BASE_PROJECT_ID,
//   storageBucket: process.env.FIRE_BASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIRE_BASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIRE_BASE_APP_ID,
//   measurementId: process.env.FIRE_BASE_MEASUREMENT_ID,
// };

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
