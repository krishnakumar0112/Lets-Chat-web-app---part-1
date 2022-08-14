var firebaseConfig = {
  apiKey: "AIzaSyAzYwLJjPflLDzeKEcuINFb9Epcpqr94aw",
  authDomain: "class-test-100.firebaseapp.com",
  databaseURL: "https://class-test-100-default-rtdb.firebaseio.com",
  projectId: "class-test-100",
  storageBucket: "class-test-100.appspot.com",
  messagingSenderId: "795872051485",
  appId: "1:795872051485:web:35767e6ad163418aa6a1f4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// ADD YOUR FIREBASE LINKS

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


