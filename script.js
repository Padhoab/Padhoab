import { auth,db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const headerContainer = document.getElementById("header");

import {
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

if (headerContainer) {

  fetch("../header.html")
    .then(response => {
      if (!response.ok) {
        return fetch("header.html");
      }
      return response;
    })
    .then(response => response.text())
    .then(data => {
      headerContainer.innerHTML = data;
    });
}

const footerContainer = document.getElementById("footer");

if (footerContainer) {

  fetch("../footer.html")
    .then(response => {
      if (!response.ok) {
        return fetch("footer.html");
      }
      return response;
    })
    .then(response => response.text())
    .then(data => {
      footerContainer.innerHTML = data;
    });
}
