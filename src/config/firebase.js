import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD7ZbX3dyTeB-JEaM8wBcZo5lMFiR_zqGY",
    authDomain: "postex-2f5e1.firebaseapp.com",
    projectId: "postex-2f5e1",
    storageBucket: "postex-2f5e1.appspot.com",
    messagingSenderId: "615516532148",
    appId: "1:615516532148:web:6ef510a3476448c648d6e1"
};
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const fireStoreDB = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp);

