
import {getApp, getApps, initializeApp} from 'firebase/app'
import { getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'




const firebaseConfig = {
    apiKey: "AIzaSyBLVzcbBrix1mTzykdjYElCMqT2mxqrPno",
    authDomain: "fast-food-delivery-app-be95c.firebaseapp.com",
    databaseURL: "https://fast-food-delivery-app-be95c-default-rtdb.firebaseio.com",
    projectId: "fast-food-delivery-app-be95c",
    storageBucket: "fast-food-delivery-app-be95c.appspot.com",
    messagingSenderId: "194998405891",
    appId: "1:194998405891:web:476acf07e4c6514ec9f736"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

  const firestore = getFirestore(app)

  const storage = getStorage(app)

  export {app, firestore, storage}