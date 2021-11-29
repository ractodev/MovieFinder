//function to display input-form
function SearchFormView(props) {
    return (
        <div>
            <label>Search movies or series </label>
            <input onInput={event=>props.onText(event.target.value)} type="search"/>
            <button onClick={event=>props.onSearch(event.target.value)} class="searchButton">Search</button>
        </div>        
    );
}
