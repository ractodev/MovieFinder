function RenderTest(){ console.log("Vue sub-component render test"); return false; }

function App(props){
    defaultRoute();
    window.addEventListener("hashchange", defaultRoute);
    return  (
        <div class="flexParent">
            <div class="watchlistResult" id = "watchlistResult">
                <Show hash="#watchlist"><WatchlistPresenter model={props.model}/></Show>
            </div>
            <div class="watchlistResult" id = "historyResult">
                <Show hash="#historylist"><HistoryPresenter model={props.model}/></Show>
            </div>
            <div class="leftMargin">
                <div className="moreInfo">
                    <Show hash="#info"><InformationPresenter model={props.model}/></Show>
                </div>
                <div className="searchResults">
                    <Show hash="#search"><SearchPresenter model={props.model}/></Show>
                </div>
            </div>
            <div class={(()=>{
                if(props.model.actionCSS === "Added"){
                    return "notifyUser"
                }else if(props.model.actionCSS === "Removed"){
                    return "notifyRemUser"
                }else{
                    return "notifyInfoUser"
                }
            })()} id="notifyUser">
                <Show hash="#notify"><NotifyPresenter model={props.model}/></Show>
            </div>
            <RenderTest/>
        </div>
    );
}

function defaultRoute(){
    const check = ["#search", "#info","#watchlist", "historylist"]
        .find((knownRoute)=> knownRoute === window.location.hash)
    if(check === undefined ){
        window.location.hash="#search";
    }
}