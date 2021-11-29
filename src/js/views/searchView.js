//function to display input-form
function SearchFormView(props) {
    return (
        <div>
            <label>Search movies or series </label>
            <input onChange={event=>props.onText(event.target.value)}/>
            <button class = "imageDiv" onClick={() => props.onSearch()}>Search!</button>
        </div>        
    );
}

function SearchResultsView(props){
    return(
        <div>
            {props.searchResults.map( title =>
            <span class="searchResult" key={title.id}
                  onClick={()=> props.titleChosen(title.id)}>
                <img src={title.image} height={100}/>
                <div>{title.title}</div>
            </span> )}
        </div>
    );
}