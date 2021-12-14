function InformationView(props) {
    return(
        <div>
            <h2>{props.title.title || props.title.name} ({shortDateFormat()})
            </h2>
            <div>
                <img src={"https://image.tmdb.org/t/p/w500/" + props.title.poster_path} height={250} />
            </div>
            <div class="trailer">
                <iframe width="420" height ="345" src={"https://www.youtube.com/embed/" + props.trailer.results[0].key + "?autoplay=1&mute=1"}></iframe>
            </div>
            <div class="overview">
                {props.title.overview}
            </div>
            <div class="rating">
                Rating: {(props.title.vote_average || "unrated")}
            </div>
            <div class="providers">
                Where to watch: 
                {(props.providers.results["SE"].flatrate.map(provider => {
                    <span class="providerResults" key={provider.provider_id}>
                        <img src={"https://image.tmdb.org/t/p/w500/" + provider.logo_path} height={50}/>
                        <div class="providerTitle">{provider.provider_name}</div>
                    </span>
                })) || null}
            </div>
            <div>
                <button disabled={props.isTitleInWatchlist} 
                        onClick={()=>{props.titleAdded(props.title); window.location.hash="#search"}}>
                    Add to watchlist!
                </button>
                <button onClick={()=>window.location.hash="#search"}>Go Back</button>
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