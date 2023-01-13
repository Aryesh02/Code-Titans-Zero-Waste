import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getFirestore,collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

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

const data = document.querySelector('.rest-data');
data.addEventListener("submit", (e) => {
    e.preventDefault();
    const x = data.phone.value;
    localStorage.setItem('phone',x);
    addDoc(colref, {
        name : data.name.value,
        quantity : data.quantity.value,
        type : data.food.value,
        phone : data.phone.value,
        location : data.location.value
    })
    .then(() => {
        alert("Data added succesfully.");
        data.reset();
    })
    .catch(() => {
        alert("Data was not added succesfully. Please try agaiin after some time.");
        data.reset();
    })
})

