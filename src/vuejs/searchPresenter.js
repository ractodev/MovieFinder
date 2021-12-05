const SearchPresenter = {
    data(){
        return {promise: null, data: null,
            error: null, searchQuery: "", searchType: ""};
        },
    props: ["model"],
    created() {
        this.promise = TmdbSource.tmdbGetPopular();
    },
    watch:{
        'promise': { immediate:true,
            handler(){
                this.data= this.error= null;
                if(this.promise){
                    const p= this.promise;
                    this.promise.then(dt=>{if(this.promise===p)this.data=dt;})
                        .catch(er=>{if(this.promise===p)this.error = er});
                }
            }
        }
    },
    render(){
        return <div>
            <SearchFormView options={["Movie", "TV Series", "Actor Appearence", "Year", "Genre", "Rating"]}
                onText={x=>this.searchQuery = x}
                onSearchType={x => this.searchType = x}
                onSearch={()=>{
                        if(this.searchType === "Movie"){
                            this.promise = TmdbSource.tmdbSearchMovie(this.searchQuery)
                        }else if(this.searchType === "TV Series"){
                            this.promise = TmdbSource.tmdbSearchSeries(this.searchQuery)
                        }else if(this.searchType === "Actor Appearence"){
                            this.promise = TmdbSource.tmdbSearchActor(this.searchQuery)
                        }else if(this.searchType === "Year"){
                            //TODO
                        }else if(this.searchType === "Genre"){
                            //TODO
                        }else{

                        }
                    }
                }
            /> 
            {promiseNoData(this.promise, this.data, this.error) ||
            <SearchResultsView searchResults={this.data}
                               searchType={x=>this.searchType=x}
                               movieChosen={movie=>this.model.setCurrentTitle(movie, "Movie")}
                               seriesChosen={series=>this.model.setCurrentTitle(series, "TV Series")}
                               actorChosen={actor=>{this.promise = TmdbSource.tmdbGetActorAppearence(actor)}}
            />}
        </div>
    }
}