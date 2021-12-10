// Load from firebase database
function LoadSaveModel(model){


    let loadingFromFirebase=false;
    model.addObserver(function(){
            if(loadingFromFirebase) return;

            firebase.database().ref("users/" + uid).set({
                watchlist: model.watchlist,
                historylist: model.historylist,
                currentTitle: {title: model.currentTitle, type: model.currentTitleType}
            });
        }
    );
    
    firebase.database().ref("users/" + uid).on("value", function(data){
        loadingFromFirebase= true;
        try{
            if(data.val()){
                model.setTitles(data.val().watchlist || [])
                model.historylist = [...(data.val().historylist || [])]
                model.setCurrentTitle(data.val().currentTitle.title || null, data.val().currentTitle.type || null)
            }
        }catch(e){
            console.log(e)
        }finally {
            loadingFromFirebase = false
        }

    });
}
