const SearchPresenter = {
    data(){
        return {promise: null, data: null,
            error: null, searchQuery: "", searchType: "", actorId: ""};
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
            <SearchFormView options={["Movie", "TV Series", "Actor Appearence"]}
                onText={x=>this.searchQuery = x}
                onSearchType={x => this.searchType = x}
                onSearch={()=>{
                        if(this.searchType === "" || this.searchQuery === ""){
                            this.model.action = "Wrong input! Make sure to enter a title and choose a category";
                            this.model.actionCSS = "Error"
                            document.getElementById("notifyUser").style.right = "0px"
                            setTimeout(function () {
                                document.getElementById("notifyUser").style.right = "-300px"
                            }, 4000);
                        }

                        else if(this.searchType === "Movie"){
                            this.promise = TmdbSource.tmdbSearchMovie(this.searchQuery);
                        } else if(this.searchType === "TV Series"){
                            this.promise = TmdbSource.tmdbSearchSeries(this.searchQuery);
                        } else if(this.searchType === "Actor Appearence"){
                            this.promise = TmdbSource.tmdbSearchActor(this.searchQuery);
                        } else {
                            this.promise = TmdbSource.tmdbGetPopular();
                        }
                    }
                }
            /> 
            {promiseNoData(this.promise, this.data, this.error) ||
            <SearchResultsView searchResults={this.data}
                               searchType={x => this.searchType = x}
                               movieChosen={movie=>this.model.setCurrentTitle(movie, "movie")}
                               seriesChosen={series=>this.model.setCurrentTitle(series, "tv")}
                               actorChosen={actor=>{this.promise = TmdbSource.tmdbGetActorAppearence(actor)}}
                               movieTitle={title => this.model.movieTitle = title}
            />}
        </div>
    }
}