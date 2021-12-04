// FirebaseUI config.
var uiConfig = {

    signInSuccessUrl: 'index.html',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,

    ],
    // Terms of service url where to go
    tosUrl: 'index.html',
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);


// observer for when auth changes and update and save uid locally in browser
firebase.auth().onAuthStateChanged((user) => {
    let cached_uid;
    if (user) {
        cached_uid = JSON.stringify(user.uid);
        cached_uid = btoa(cached_uid);
        localStorage.setItem('_uid',cached_uid);
    } else {
        localStorage.removeItem('_uid');
    }
});



