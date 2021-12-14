function RenderTest(){ console.log("Vue sub-component render test"); return false; }
/*function App(props){
     return  ( 
          <div class="flexParent">
               <div class="watchlistResult" id = "watchlistResult">
                    <WatchlistPresenter model={props.model}/>
               </div>
               <div class="detailedResults">
                    <DetailsPresenter model={props.model}/>
               </div>
               <div class="searchResults">
                    <SearchPresenter model={props.model}/>
               </div>
               <RenderTest />

          </div>  
     );
}*/

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
                <div class="detailedResults">
                    <Show hash="#details"><DetailsPresenter model={props.model}/></Show>
                </div>
                <div class="searchResults">
                    <Show hash="#search"><SearchPresenter model={props.model}/></Show>
                </div>
            </div>
            <div className="notifyUser" id="notifyUser">
                <Show hash="#notify"><NotifyPresenter/></Show>
            </div>
            <RenderTest/>
        </div>
    );
}

function defaultRoute(){
    const check = ["#search", "#details", "#watchlist", "historylist"]
        .find((knownRoute)=> knownRoute === window.location.hash)
    if(check === undefined ){
        window.location.hash="#search";
    }
}