function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){     
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
}