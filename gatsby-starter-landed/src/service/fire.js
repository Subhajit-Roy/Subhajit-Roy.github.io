import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDbbvMpHagiUbg2pLkKTeth-nty3V8NlNY",
    authDomain: "plas-5k.firebaseapp.com",
    projectId: "plas-5k",
    storageBucket: "plas-5k.appspot.com",
    messagingSenderId: "782699338239",
    appId: "1:782699338239:web:f4b6d7df3d420edbab6fca",
    measurementId: "G-S2H6N0NXZV"
  };

if (typeof window !== 'undefined') {
    firebase.initializeApp(config);
}
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default firebase;