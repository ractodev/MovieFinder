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
    tmdbSearchTitle(params) {
        //function to retrieve basic title data such as title, description, title id and image
        let query = params.toString().replace(/ /g, '%20');    //URLSearchParams converts blanks to '+' instead of '%20' required in the IMDB API?
        return TmdbSource.tmdbApiCall("search/movie?api_key=" + TMDB_API_KEY + "&query=" + query)
            .then(data => data.results);
    }
    ,
    tmdbSearchTvSeries(params) {
        //function to retrieve basic title data such as title, description, title id and image
        let query = params.toString().replace(/ /g, '%20');    //URLSearchParams converts blanks to '+' instead of '%20' required in the IMDB API?
        return TmdbSource.tmdbApiCall("search/tv?api_key=" + TMDB_API_KEY + "&query=" + query)
            .then(data => data.results);
    }
    ,
    tmdbSearchActor(params) {
        //function to retrieve actors and information about the actors
        let query = params.toString().replace(/ /g, '%20');
        return TmdbSource.tmdbApiCall("search/person?api_key=" + TMDB_API_KEY + "&query=" + query)
            .then(data => data.results);
    }
    ,
    /*tmdbSearchYear(year) {
        //function to retrieve movies from specific year
        return TmdbSource.tmdbApiCall("search/movie?api_key=" + TMDB_API_KEY + "&query=" + query + "&year=" + year)
            .then(data => data.results);
    }
    ,*/
    tmdbSearchMulti(params) {
        //function to retrive movies, tv-shows and people
        let query = params.toString().replace(/ /g, '%20');
        return TmdbSource.tmdbApiCall("search/multi?api_key=" + TMDB_API_KEY + "&query=" + query)
            .then(data => data.results);
    }
}