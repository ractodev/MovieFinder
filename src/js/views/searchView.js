 //function to display input-form
function SearchFormView(props) {
    return (
        <div>
            <label>Search movies or series </label>
            <input id="searchBox" onChange={event => props.onText(event.target.value)} />
            <select onChange={event => props.onSearchType(event.target.value)}>
                <option key="Choose" selected hidden>Choose:</option>
                {props.options.map(function (opt) { return <option key={opt}>{opt}</option> })}
            </select>
            <button id="searchButton" class="imageDiv" onClick={() => props.onSearch()}>Search!</button>
        </div>
    );
}

function SearchResultsView(props) {
    return (
        <div>
            {props.searchResults.filter(result => (result.poster_path !== null) && (result.profile_path !== null)).sort(comparePopularity).map(card =>
                <span class="searchResult" key={card.id}
                    onClick={() => {
                        if(card.first_air_date){
                            //series was selected
                            props.seriesChosen(card.id);
                        } else if(card.known_for){
                            //actor was selected
                            props.actorChosen(card.id);
                        } else {
                            //movie was selected
                            props.movieChosen(card.id);
                        }
                    }}>
                    <img src={"https://image.tmdb.org/t/p/w500/" + (card.profile_path || card.poster_path)} height={100} width={70} />
                    <div class="resultTitle">{card.title || card.name}</div>
                </span>)}
        </div>
    );
}

function comparePopularity(a, b) {
    if (a.popularity < b.popularity) {
        return 1;
    } else if (a.popularity > b.popularity) {
        return -1;
    } else {
        return 0;
    }
}
