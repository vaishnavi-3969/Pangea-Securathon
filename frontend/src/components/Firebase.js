import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvuUP6yghX0JxkYEC3flOKWiQHOEZWm3c",
  authDomain: "pangea-securathon-c6e51.firebaseapp.com",
  projectId: "pangea-securathon-c6e51",
  storageBucket: "pangea-securathon-c6e51.appspot.com",
  messagingSenderId: "881037191717",
  appId: "1:881037191717:web:c6d48ae0c05b0b01f76dcc",
  measurementId: "G-59BTCPWQTQ"
};

const app = initializeApp(firebaseConfig);

export {
    app
}