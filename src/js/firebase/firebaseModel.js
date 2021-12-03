
function LoadSaveModel(model){


   // const uid = firebase.auth().currentUser.uid;

    let loadingFromFirebase=false;
    model.addObserver(function(){
            if(loadingFromFirebase) return;

            firebase.database().ref("DataModel").set({ //"users/" + uid
                watchlist: model.watchlist,
                currentTitle: model.currentTitle
            });
        }
    );
    firebase.database().ref("DataModel").on("value", function(data){
        loadingFromFirebase= true;
        try{
            if(data.val()){
                model.setTitles(data.val().watchlist || [])
                model.setCurrentTitle(data.val().currentTitle || null)
            }
        }catch(e){
            console.log(e)
        }finally {
            loadingFromFirebase = false
        }

    });
}
