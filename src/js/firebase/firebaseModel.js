
function LoadSaveModel(model){
    let loadingFromFirebase=false;
    model.addObserver(function(){
            if(loadingFromFirebase) return;

            firebase.database().ref("DataModel").set({
                guests: model.numberOfGuests,
                dishes: model.dishes,
                currentDish: model.currentDish
            });
        }
    );
    firebase.database().ref("DataModel").on("value", function(data){
        loadingFromFirebase= true;
        try{
            if(data.val()){
                model.setNumberOfGuests(data.val().guests);
                model.setDishes(data.val().dishes || [])
                model.setCurrentDish(data.val().currentDish || null)
            }
        }catch(e){
            console.log(e)
        }finally {
            loadingFromFirebase = false
        }

    });
}
