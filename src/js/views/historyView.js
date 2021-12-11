function HistoryView(props) {
    //function to display a sidebar with movies the user has saved
    return (
        <div class="historyView">
            <button class="swapButton" onClick={() => {
                document.getElementById("watchlistResult").style.transition = "0s"
                document.getElementById("historyResult").style.transition = "0s"
                document.getElementById("watchlistResult").style.left = "0px"
                document.getElementById("historyResult").style.left = "-303px"
                setTimeout(()=>{
                    document.getElementById("watchlistResult").style.transition = "0.5s"
                    document.getElementById("historyResult").style.transition = "0.5s"
                }, 10)
                currentList = "watchlistResult"
                window.location.hash = "#watchlist"}}>Watchlist
            </button>
            <h3>My History</h3>
            <span>
                Sort by:
                <select /*onChange={event=>props.onSearchType(event.target.value)}*/>
                    <option key="Choose" selected hidden>Last seen</option>
                    {props.options.map(function (opt) {
                        return <option key={opt}>{opt}</option>})}
                </select>
                 <button className="clearButton" onClick={() => props.clearHistory()}>
                     Clear history
                 </button>
            </span>
            <hr></hr>
            <table class = "watchlistTable">
                <tbody>
                {[...props.historyList].map(obj => <tr class="watchlistTr" key={obj.title}>
                    <td><img src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path} height={50} /></td>
                    <td class = "watchlistTitle">
                        {obj.title || obj.name}
                    </td>
                    <td class = "deleteButtonRow">
                        <button onClick={() => {props.addToWatchlist(obj);
                        props.removeFromHistory(obj)}} className="deleteButtonRow">Add back</button>
                    </td>
                </tr>)}
                </tbody>
            </table>
        </div>
    );
}