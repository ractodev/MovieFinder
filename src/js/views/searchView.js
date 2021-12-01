//function to display input-form
function SearchFormView(props) {
    return (
        <div>
            <label>Search movies or series </label>
            <input id="searchBox" onChange={event=>props.onText(event.target.value)}/>
            <select /*onChange={event=>props.onSearchType(event.target.value)}*/>
                <option key="Choose" selected hidden>Choose:</option>
                {props.options.map(function(opt){return <option key={opt}>{opt}</option>})}
            </select>
            <button id="searchButton" class = "imageDiv" onClick={() => props.onSearch()}>Search!</button>
        </div>
    );
}

function SearchResultsView(props){
    return(
        <div>
            {props.searchResults.map( title =>
            <span class="searchResult" key={title.id}
                  onClick={()=> props.titleChosen(title.id)}>
                <img src={"https://image.tmdb.org/t/p/w500/" + title.poster_path} height={100} width={70}/>
                <div class="resultTitle">{title.title}</div>
            </span> )}
        </div>
    );
}