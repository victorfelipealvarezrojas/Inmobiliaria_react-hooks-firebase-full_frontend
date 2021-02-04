import app from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA_U4HU2fp7uR5QBo2YUN5ECuVOh1q85Ps",
    authDomain: "home-40c50.firebaseapp.com",
    databaseURL: "https://home-40c50-default-rtdb.firebaseio.com",
    projectId: "home-40c50",
    storageBucket: "home-40c50.appspot.com",
    messagingSenderId: "92625697442",
    appId: "1:92625697442:web:da581c7b637e4ff5be75fb"
};

class FireBase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();//m,e permite dentrod e la clase FireBase usar su propiedad db para insertar valores.
    }
}

export default FireBase;