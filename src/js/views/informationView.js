function InformationView(props) {
    return(
        <div>
            <h2>{props.title.title || props.title.name} {shortDateFormat()}
            </h2>
            <div>
                <img src={"https://image.tmdb.org/t/p/w500/" + props.title.poster_path} height={250} />
            </div>
            <div class="trailer">
                <iframe width="420" height ="345" src={"https://www.youtube.com/embed/" + checkTrailerAvailability() + "?autoplay=1&mute=1"}>
                </iframe>
            </div>
            <div class="overview">
                {props.title.overview}
            </div>
            <div class="rating">
                Rating: {(props.title.vote_average || "unrated")}
            </div>
            <div class="providers">
                Where to watch:  
                {" " + checkProviderAvailability()}
            </div>
            <div>
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

    function checkTrailerAvailability() {
        if(props.trailer[0] !== undefined) {
            return props.trailer[0].key;
        } else {
            return null;
        }
    }

    function checkProviderAvailability() {
        if(props.providers["SE"] !== undefined) {
            //check if title is available
            if(props.providers["SE"].flatrate !== undefined) {
                //check if title is available on streaming services
                return props.providers["SE"].flatrate.map(provider => provider.provider_name);
            } else if (props.providers["SE"].buy !== undefined) {
                //check if title is available for purchase
                return props.providers["SE"].buy.map(provider => provider.provider_name);
            } else {
                return " No information on providers available.";
            }
        } else {
            return " No information on providers available.";
        }
    }

    function shortDateFormat() {
        //function to trim release date to year only
        if(props.title.release_date) {
            return "(" + props.title.release_date.split('-')[0] + ")";
        } else if(props.title.first_air_date) {
            return "(" + props.title.first_air_date.split('-')[0] + ")";
        } else {
            return "unknown";
        }
    }
}