
var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyAGAssbqtLi3Y_l_YK4uQOekx8nKUrhRWY",
    authDomain: "moviefinder-kth.firebaseapp.com",
    databaseURL: "https://moviefinder-kth-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "moviefinder-kth",
    storageBucket: "moviefinder-kth.appspot.com",
    messagingSenderId: "514058792409",
    appId: "1:514058792409:web:147b8e83c73bc68fe83dc8"
};

if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;

}
