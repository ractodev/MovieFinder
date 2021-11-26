const ImdbSource={
    //function to handle API calls to IMDB API
    imdbApiCall(params) {
        return fetch("https://imdb8.p.rapidapi.com/"+params, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": IMDB_API_KEY
            }
        })
        //check that HTTP response is OK, otherwise throw error
        .then(response => {if(response.status === 200) return response.json();
            throw new Error(response.status);
        }).then(console.log())
        .catch(console.error);
    }
    ,
    imdbSearchTitle(params) {
        //function to fetch movie/series by title
        return ImdbSource.imdbApiCall("title/find?q=" + new URLSearchParams(params))
            .then(data => data.results);
    }
    ,
    imdbAutoCompleteSearch(params) {
        return ImdbSource.imdbApiCall("title/find?q=" + new URLSearchParams(params))
            .then(data => data.results);
    }
}