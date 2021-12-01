const SearchPresenter = {
    data(){
        return {promise: null, data: null,
            error: null, searchQuery: ""/*, searchType: "" */};
        },
    props: ["model"],
    created() {
        this.promise = ImdbSource.tmdbSearchTitle("Spiderman");
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
            <SearchFormView options={["Movie/Series", "Actor Appearence"]}
                onText={x=>this.searchQuery = x}
                //onSearchType={x => this.searchType = x}
                onSearch={()=>this.promise =TmdbSource.tmdbSearchTitle(this.searchQuery)}
            />
            {promiseNoData(this.promise, this.data, this.error) ||
            <SearchResultsView searchResults={this.data}
                               titleChosen={title=>this.model.setCurrentTitle(title)}
            />}
        </div>
    }
}