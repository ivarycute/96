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
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

     function addRoom()
{
      room_name = document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose : "to check firebase"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName (this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}