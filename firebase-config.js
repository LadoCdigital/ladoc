// firebase-config.js
// Reemplaza estos valores con los de TU proyecto Firebase

const firebaseConfig = {
    apiKey: "TU_API_KEY_AQUI",
    authDomain: "TU_PROYECTO.firebaseapp.com",
    projectId: "TU_PROYECTO",
    storageBucket: "TU_PROYECTO.appspot.com",
    messagingSenderId: "TU_SENDER_ID",
    appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Exportar para usar en otros archivos
window.firebaseApp = app;
window.firebaseAuth = auth;
window.firestoreDb = db;
window.firebaseStorage = storage;

console.log("Firebase configurado correctamente");
