function DetailsView(props) {
    return (
        <div>
            <h2>{props.title.title || props.title.name} ({props.title.release_date || props.title.first_air_date})
            </h2>
            <div>
                <img src={"https://image.tmdb.org/t/p/w500/" + props.title.poster_path} height={250} />
            </div>
            <div class="overview">
                {props.title.overview}
            </div>
            <div class="rating">
                Rating: {(props.title.vote_average || "unrated")}
            </div>
            <div class="buttons">
                <button disabled={props.isTitleInWatchList} onClick={() => props.titleAdded(props.title)}>
                    Add to watchlist!
                </button>
                <button>Cancel</button>
            </div>
        </div>
    );
}
