//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyCB1nfV-TprWQheKUNa7PCybTAjTHpCb9E",
    authDomain: "kwitter-3953d.firebaseapp.com",
    databaseURL: "https://kwitter-3953d-default-rtdb.firebaseio.com",
    projectId: "kwitter-3953d",
    storageBucket: "kwitter-3953d.appspot.com",
    messagingSenderId: "1039554963168",
    appId: "1:1039554963168:web:1c8f140b13c6e611f6d285",
    measurementId: "G-ZYB70BX4ZZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
