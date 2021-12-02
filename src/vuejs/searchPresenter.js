const SearchPresenter = {
    data(){
        return {promise: null, data: null,
            error: null, searchQuery: ""/*, searchType: "" */};
        },
    props: ["model"],
    created() {
        this.promise = TmdbSource.tmdbSearchMovie("Spiderman");
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
                            this.promise = TmdbSource.tmdbSearchTvSeries(this.searchQuery)
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
                               titleChosen={title=>this.model.setCurrentTitle(title)}
            />}
        </div>
    }
}