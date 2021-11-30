const ImdbSource={
    //function to handle API calls to IMDB API
    imdbApiCall(params) {
        return fetch(IMDB_BASE_URL+params, {
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
    imdbSearchTitle(params) {
        //function to retrieve basic title data such as title, description, title id and image
        let query = params.toString().replace(/ /g, '%20');    //URLSearchParams converts blanks to '+' instead of '%20' required in the IMDB API?
        return ImdbSource.imdbApiCall("SearchTitle/" + IMDB_API_KEY + "/" + query)
            .then(data => data.results);
    }
    ,
    imdbMoreTitleInfo(id) {
        console.log("id: ", id);
        //function to retrieve more in-depth information on a title
        return ImdbSource.imdbApiCall("Title/" + IMDB_API_KEY + "/" + id + "/FullActor,FullCast,Posters,Images,Trailer,Ratings,")
            .then(data => data.results);
    }
    ,
    imdbGetActorId(params) {
        //function to retrieve IMDB actor id to later enable actor-specific searches in the IMDB API such as actor appearences etc...
        let query = params.toString().replace(/ /g, '%20');    //URLSearchParams converts blanks to '+' instead of '%20' required in the IMDB API?
        return ImdbSource.imdbApiCall("SearchName/" + IMDB_API_KEY + "/" + query)
            .then(data => data.results);
    }
}