import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAlqEFSfIHDI_fjRQQzfztK5LacZQmpQAM",
    authDomain: "code-titans-ngos.firebaseapp.com",
    projectId: "code-titans-ngos",
    storageBucket: "code-titans-ngos.appspot.com",
    messagingSenderId: "1046316371794",
    appId: "1:1046316371794:web:f1f345a9b959f4f5dfb48b"
  };

const app = initializeApp(firebaseConfig);

const ngo = document.querySelector('.ngo-data');
ngo.addEventListener('submit', (e) => {
    e.preventDefault();

    const loc = ngo.location.value;
    localStorage.setItem('location', loc);
    window.location.replace("ngo-rest.html");
})