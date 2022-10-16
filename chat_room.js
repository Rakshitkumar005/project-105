// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBoyMJRdZCJEiV_k0z9Ow2Nd94SEyJwZO8",
  authDomain: "kwitter-63dc0.firebaseapp.com",
  databaseURL: "https://kwitter-63dc0-default-rtdb.firebaseio.com",
  projectId: "kwitter-63dc0",
  storageBucket: "kwitter-63dc0.appspot.com",
  messagingSenderId: "995015619241",
  appId: "1:995015619241:web:840bfaf9796429d396afb8"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({purpose: "adding room name"})
localStorage.setItem("room_name",room_name);
window.location="chat_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_name -"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name)
      localStorage.setItem("room_name",name)
      window.location="chat_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}

