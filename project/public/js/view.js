import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'

import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'


const firebaseConfig = {
    apiKey: "AIzaSyCGZje3uuD-fjgKXGK1gIkiAWJAU1a9x5g",
    authDomain: "project-javascript-6b53d.firebaseapp.com",
    projectId: "project-javascript-6b53d",
    storageBucket: "project-javascript-6b53d.appspot.com",
    messagingSenderId: "1042869709719",
    appId: "1:1042869709719:web:7f407b032a60861dcfb2d2"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "products"));

let contents = ""
querySnapshot.forEach(doc => {
    console.log(doc.id)    
    let documentData = doc.data()
    console.log(documentData['productName'])
    contents += `<tr><th scope="row">${doc.id}</th><td>${documentData['productName']}</td><td>${documentData['code']}</td></tr>`
});

let tbodyElement = document.querySelector('#tbody')
tbodyElement.innerHTML = contents







