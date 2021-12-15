const TmdbSource = {
    //function to handle API calls to IMDB API
    tmdbApiCall(params) {
        return fetch(TMDB_BASE_URL + params, {
            "method": "GET",
            "headers": {}
        })
            //check that HTTP response is OK, otherwise throw error
            .then(response => {
                if (response.status === 200) return response.json();
                throw new Error(response.status);
            }).then(console.log())
            .catch(console.error);
    }
    ,
    tmdbGetPopular() {
        //function to retrieve trending titles (updates daily)
        return TmdbSource.tmdbApiCall("movie/popular?&api_key=" + TMDB_API_KEY + "&page=1")
            .then(data => data.results);
    }
    ,
    tmdbSearchMovie(params) {
        //function to retrieve basic movie data
        return TmdbSource.tmdbApiCall("search/movie?&api_key=" + TMDB_API_KEY + "&query=" + new URLSearchParams(params))
            .then(data => data.results);
    }
    ,
    tmdbSearchSeries(params) {
        //function to retrieve basic series data
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
    tmdbGetActorAppearence(id) {
        return TmdbSource.tmdbApiCall("person/" + id + "/combined_credits?api_key=" + TMDB_API_KEY)
            .then(data => data.cast);
    }
    ,
    tmdbGetTitleDetails(titleType, id) {
        //function to retrieve basic title data
        return TmdbSource.tmdbApiCall(titleType + "/" + id + "?api_key=" + TMDB_API_KEY);
    }
    ,
    tmdbGetDetailedTitleInfo(titleType, id) {
        //function to retrieve more info on title using multiple api-calls simultaneously
        return Promise.all([
             TmdbSource.tmdbApiCall(titleType + "/" + id + "?api_key=" + TMDB_API_KEY),
             TmdbSource.tmdbApiCall(titleType + "/" + id + "/videos?api_key=" + TMDB_API_KEY).then(data => data.results),
             TmdbSource.tmdbApiCall(titleType + "/" + id + "/watch/providers?api_key=" + TMDB_API_KEY).then(data => data.results)
        ]);
    }
}