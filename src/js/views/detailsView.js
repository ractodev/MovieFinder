function DetailsView(props) {
    return (
        <div>
            <h2>{props.title.title || props.title.name} ({shortDateFormat()})
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
                <button disabled={props.isTitleInWatchlist} onClick={()=>{
                    props.titleAdded(props.title)
                    document.getElementById("notifyUser").style.right = "0px"
                    setTimeout(function(){
                        document.getElementById("notifyUser").style.right = "-300px"
                    }, 2000);
                }}>Add to watchlist!
                </button>
                <button onClick={()=>window.location.hash="#search"}>Cancel</button>
            </div>
        </div>
    );

    function shortDateFormat() {
        //function to trim release date to year only
        if(props.title.release_date) {
            return props.title.release_date.split('-')[0];
        } else if(props.title.first_air_date) {
            return props.title.first_air_date.split('-')[0];
        } else {
            return "unknown";
        }
    }
}