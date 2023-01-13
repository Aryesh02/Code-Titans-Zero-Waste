import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js'

  const firebaseConfig = {
    apiKey: "AIzaSyAlqEFSfIHDI_fjRQQzfztK5LacZQmpQAM",
    authDomain: "code-titans-ngos.firebaseapp.com",
    projectId: "code-titans-ngos",
    storageBucket: "code-titans-ngos.appspot.com",
    messagingSenderId: "1046316371794",
    appId: "1:1046316371794:web:f1f345a9b959f4f5dfb48b"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


const signup = document.querySelector(".rest-signup");
signup.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = signup.name.value;
    const pass = signup.pass.value;

    createUserWithEmailAndPassword(auth,email,pass)
    .then(() => {
        window.location.replace('ngo.html');
    })
    .catch(() => {
        console.log("Wrong User Credentials");
    })
})