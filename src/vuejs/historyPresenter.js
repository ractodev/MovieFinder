function HistoryPresenter(props){
    return <HistoryView historyList = {props.model.historylist}
                        options={["Last seen", "First seen"]}
                        clearHistory={() => props.model.clearHistorylist()}
                        addToWatchlist={title=>props.model.addToWatchlist(title)}
                        removeFromHistory = { title=>props.model.removeFromHistorylist(title)}
                        isHistoryEmpty={props.model.historylist.length === 0}
    />
}