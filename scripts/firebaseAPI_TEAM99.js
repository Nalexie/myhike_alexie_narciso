//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyBhtu5iNecVdZXsHJF0Nt6nMEFCrgCbud4",
    authDomain: "fir-comp1800-e53f4.firebaseapp.com",
    projectId: "fir-comp1800-e53f4",
    storageBucket: "fir-comp1800-e53f4.appspot.com",
    messagingSenderId: "1040825997913",
    appId: "1:1040825997913:web:2dee5231c100571b48ef48",
    measurementId: "G-V43XD6F0QG"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();