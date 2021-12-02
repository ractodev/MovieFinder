const TmdbSource={
    //function to handle API calls to IMDB API
    tmdbApiCall(params) {
        return fetch(TMDB_BASE_URL+params, {
            "method": "GET",
            "headers": {}
        })
        //check that HTTP response is OK, otherwise throw error
        .then(response => {if(response.status === 200) return response.json();
            throw new Error(response.status);
        }).then(console.log())
        .catch(console.error);
    }
    ,
    tmdbSearchMovie(params) {
        //function to retrieve movie data
        return TmdbSource.tmdbApiCall("search/movie?&api_key=" + TMDB_API_KEY + "&query=" + new URLSearchParams(params))
            .then(data => data.results);
    }
    ,
    tmdbSearchTvSeries(params) {
        //function to retrieve tv series data
        return TmdbSource.tmdbApiCall("search/tv?api_key=" + TMDB_API_KEY + "&query=" + new URLSearchParams(params))
            .then(data => data.results);
    }
    ,
    tmdbSearchActor(params) {
        //function to retrieve actors
        return TmdbSource.tmdbApiCall("search/person?api_key=" + TMDB_API_KEY + "&query=" + new URLSearchParams(params))
            .then(data => data.results);
    }
    ,
    /*  MIGHT GET ADDED LATER (ITS NEEDS A BIT OF LOGIC TO FUNCTION)
        tmdbSearchYear(year) {
        //function to retrieve movies from specific year
        return TmdbSource.tmdbApiCall()
            .then(data => data.results);
    }
    ,*/
    tmdbSearchMulti(params) {
        //function to retrive movies, tv-shows and people all in one search
        return TmdbSource.tmdbApiCall("search/multi?api_key=" + TMDB_API_KEY + "&query=" + new URLSearchParams(params))
            .then(data => data.results);
    }
}