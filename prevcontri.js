import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getFirestore,collection, onSnapshot, query, where } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyB5r0YXZTBV2ygS7cfiRl9U4olfHAmSHyU",
    authDomain: "codetitans-trial.firebaseapp.com",
    projectId: "codetitans-trial",
    storageBucket: "codetitans-trial.appspot.com",
    messagingSenderId: "481731453895",
    appId: "1:481731453895:web:47882205200e8e3ca96fe2"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const colref = collection(db,"donations");

const pno = localStorage.getItem('phone');

const q = query(colref,where('phone','==',pno));

onSnapshot(q, (querySnapshot) =>{
    querySnapshot.forEach((doc) => {
        const name = doc.data().name;
        const quantity = doc.data().quantity;
        const type = doc.data().food;
        const phone = doc.data().phone;
        const location = doc.data().location;
        document.getElementById("div1").innerHTML = name;
        document.getElementById("div2").innerHTML = type;
        document.getElementById("div3").innerHTML = quantity;
        document.getElementById("div4").innerHTML = location;
    });
})