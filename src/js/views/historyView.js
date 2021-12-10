function HistoryView(props) {
    //function to display a sidebar with movies the user has saved
    return (
        <div class="historyView">
            <button class="swapButton" onClick={() => {
                document.getElementById("watchlistResult").style.left = "0px"
                document.getElementById("historyResult").style.left = "-300px"
                currentList = "watchlistResult"
                window.location.hash = "#watchlist"
            }}>Watchlist
            </button>
            <h3>My History</h3>
            <span>
                Sort by:
                <select /*onChange={event=>props.onSearchType(event.target.value)}*/>
                    <option key="Choose" selected hidden>Last seen</option>
                    {props.options.map(function (opt) {
                        return <option key={opt}>{opt}</option>
                    })}
                </select>
                 <button className="editButton" onClick={() => props.clearHistory()}>
                     Clear history
                 </button>
            </span>
            <hr></hr>
            <table>
                <tbody>
                {[...props.historyList].map(obj => <tr key={obj.title}>
                    <td> <button onClick={() => {props.addToWatchlist(obj);
                        props.removeFromHistory(obj)}} className="deleteButton">Add back</button>
                    </td>
                    <td class = "Title">
                        {obj.title}
                    </td>
                </tr>)}
                </tbody>
            </table>
            <button className="logButton" onClick={() => mainApp.logout() }>logout</button>
        </div>
    );
}