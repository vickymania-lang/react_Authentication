import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyB5LwbXuLbmLZsDvQyPLCSRtUs4VDYcl4A",
    authDomain: "authenication-project-bbd0c.firebaseapp.com",
    projectId: "authenication-project-bbd0c",
    storageBucket: "authenication-project-bbd0c.appspot.com",
    messagingSenderId: "953726185068",
    appId: "1:953726185068:web:6367432271091064843249",
    measurementId: "G-VS1N4LEB7G"
  };

  const app =   initializeApp(firebaseConfig);

  export const auth = getAuth(app);