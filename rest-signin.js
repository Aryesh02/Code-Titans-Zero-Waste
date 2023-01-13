import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyB5r0YXZTBV2ygS7cfiRl9U4olfHAmSHyU",
    authDomain: "codetitans-trial.firebaseapp.com",
    projectId: "codetitans-trial",
    storageBucket: "codetitans-trial.appspot.com",
    messagingSenderId: "481731453895",
    appId: "1:481731453895:web:47882205200e8e3ca96fe2"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


const signin = document.querySelector(".signin");
signin.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = signin.name.value;
    const pass = signin.pass.value;

    signInWithEmailAndPassword(auth,email,pass)
    .then(() => {
        window.location.replace('restaurant.html');
    })
    .catch(() => {
        console.log("Wrong User Credentials");
    })
})

