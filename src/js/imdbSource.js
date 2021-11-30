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
    imdbSearchQuery(params) {
        //function to search into all items (Movies, Series TVs, TV Episodes, Actors, Companies, Keywords and more)
        let query = params.toString().replace(/ /g, '%20');    //URLSearchParams converts blanks to '+' instead of '%20' required in the IMDB API?
        return ImdbSource.imdbApiCall("SearchAll/" + IMDB_API_KEY + "/" + query)
            .then(data => data.results);
    }
    ,
    imdbGetActorAppearence(actorId) {
        console.log("actor: ", actorId);
        //function to retreive actors appearences (imdb needs actor id for this, e.g nm0000158)
        return ImdbSource.imdbApiCall("Name/" + IMDB_API_KEY + "/" + actorId)
            .then(data => data.results);
    }
    ,
    imdbGetMoreTitleInfo(titleId) {
        //function to retreive more detailed information on a title (imdb needs title id for this, e.g tt10872600)
        return ImdbSource.imdbApiCall("Title/" + IMDB_API_KEY + "/" + titleId)
            .then(data => data.results);
    }
}