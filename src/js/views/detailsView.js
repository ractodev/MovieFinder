function DetailsView(props){
    return(
        <div>
            <h2>{props.title.title} ({props.title.release_date})</h2>
            <div>
                <img src={"https://image.tmdb.org/t/p/w500/" + (props.title.profile_path || props.title.poster_path)} height={250}/>
            </div>
            <div class = "overview">
                {props.title.overview}
                
            </div>
            <div class = "rating">
                Rating: {props.title.vote_average}/10
            </div>
            <div class = "smallBorder">

            </div>
            <div>
                <button>Add to watchlist!</button>
                <button>Cancel</button>
            </div>
        </div>
    );
}

