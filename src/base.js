import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBh03XJz06XM7uKlWRaRS53Qvj5jXtTJmI",
    authDomain: "chatbox-app-e0c3f.firebaseapp.com",
    databaseURL: "https://chatbox-app-e0c3f.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export {firebaseApp}

export default base