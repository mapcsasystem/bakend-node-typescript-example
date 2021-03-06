import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';
dotenv.config();
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
};
const firebaseConf = () => initializeApp(firebaseConfig);
export default firebaseConf;