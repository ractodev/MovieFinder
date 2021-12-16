function WatchlistPresenter(props){
    return <WatchlistView options={["Alphabetical", "Popularity", "Rating", "Release Date"]}
                          watchlist={props.model.watchlist}
                          removeTitle={title=>props.model.removeFromWatchlist(title)}
                          addToHistorylist={title=>props.model.addToHistorylist(title)}
                          action={x => props.model.action = x}
                          actionCSS={x => props.model.actionCSS = x}
           />
}