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
    tmdbGetMovieDetails(id) {
        //function to retrieve basic movie data
        return TmdbSource.tmdbApiCall("movie/" + id + "?api_key=" + TMDB_API_KEY);
    }
    ,
    tmdbSearchSeries(params) {
        //function to retrieve basic series data
        return TmdbSource.tmdbApiCall("search/tv?api_key=" + TMDB_API_KEY + "&query=" + new URLSearchParams(params))
            .then(data => data.results);
    }
    ,
    tmdbGetSeriesDetails(id) {
        //function to retrieve basic series data
        return TmdbSource.tmdbApiCall("tv/" + id + "?api_key=" + TMDB_API_KEY);
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
    tmdbGetDetailedMovieInfo(id) {
        //function to retrieve movie data from multiple endpoints
        var promise = Promise.allSettled([
            TmdbSource.tmdbApiCall("movie/" + id + "?api_key=" + TMDB_API_KEY),
            TmdbSource.tmdbApiCall("movie/" + id + "/similar?api_key=" + TMDB_API_KEY),
            TmdbSource.tmdbApiCall("movie/" + id + "/videos?api_key=" + TMDB_API_KEY),
            TmdbSource.tmdbApiCall("movie/"+ id + "/watch/provider?api_key=" + TMDB_API_KEY)
        ])
        return promise;
    }
    ,
    tmdbGetDetailedSeriesInfo(id) {
        //function to retrieve series data from multiple endpoints
        var promise = Promise.allSettled([
            TmdbSource.tmdbApiCall("tv/" + id + "?api_key=" + TMDB_API_KEY),
            TmdbSource.tmdbApiCall("tv/" + id + "/similar?api_key=" + TMDB_API_KEY),
            TmdbSource.tmdbApiCall("tv/" + id + "/videos?api_key=" + TMDB_API_KEY),
            TmdbSource.tmdbApiCall("tv/" + id + "/watch/providers?api_key=" + TMDB_API_KEY)
        ])
        return promise;
    }
}