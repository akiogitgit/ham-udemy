import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyA26XdODBQbRzJCtjYRsZtyCuHpqyft-Qg",
    authDomain: "idobatakaigi-with-ham-57461.firebaseapp.com",
    projectId: "idobatakaigi-with-ham-57461",
    storageBucket: "idobatakaigi-with-ham-57461.appspot.com",
    messagingSenderId: "54228631634",
    appId: "1:54228631634:web:e7ae46683caff543949f8b"
};

// 初期化？
firebase.initializeApp(firebaseConfig);
// Realtime Database全体
const database = firebase.database();
//その中のmessages
const messageRef = database.ref("messages");

// これを呼び出せばFirebase　にpushされる
export default function pushMessage({ name, text }) {
    messageRef.push({ name, text });
};