import firebase from 'firebase'
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyD8UYdaSSPjW5jWnoQQv88fLfK30Gm-FRk",
    authDomain: "vue-chat-app-31740.firebaseapp.com",
    databaseURL: "https://vue-chat-app-31740.firebaseio.com",
    projectId: "vue-chat-app-31740",
    storageBucket: "vue-chat-app-31740.appspot.com",
    messagingSenderId: "251175446254",
    appId: "1:251175446254:web:ff518b0757f85a4997b5ff"
};

const firebaseApp = firebase.initializeApp(config)

export default firebaseApp.firestore()