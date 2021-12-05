function WatchlistPresenter(props){
    return <WatchlistView options={["Alphabetical", "Popularity", "Rating", "Release Date"]}
                        watchlist = {props.model.watchlist}
                        />
}