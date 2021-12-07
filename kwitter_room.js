

var firebaseConfig = {
      apiKey: "AIzaSyCW5hUfrkiPnOwRl6VZpuZKBoKmR2STqdA",
      authDomain: "kwitter-93-78237.firebaseapp.com",
      databaseURL: "https://kwitter-93-78237-default-rtdb.firebaseio.com",
      projectId: "kwitter-93-78237",
      storageBucket: "kwitter-93-78237.appspot.com",
      messagingSenderId: "224340661605",
      appId: "1:224340661605:web:9abf60cbff8b5fddc4bd8c"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
