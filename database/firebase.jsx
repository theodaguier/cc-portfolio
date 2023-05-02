// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCysckETUmO2Z8P0LZ9vRrTE6Eup0yZ-JU",
  authDomain: "cristinacasanas-3b173.firebaseapp.com",
  projectId: "cristinacasanas-3b173",
  storageBucket: "cristinacasanas-3b173.appspot.com",
  messagingSenderId: "691279928264",
  appId: "1:691279928264:web:f4947de0263e56f07d3efd",
  measurementId: "G-D74ZLBL5EJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

async function getCollectionData() {
  const db = getFirestore();
  const collectionRef = collection(db, "maCollection");
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

getCollectionData();

console.log("firebase");

async function testFirestore() {
  await getCollectionData();
  console.log("firebase");
}

testFirestore();
