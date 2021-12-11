function WatchlistView(props) {
    //function to display a sidebar with movies the user has saved
    return (
        <div class="watchlistView">
            <button class="swapButton" onClick={() => {
                document.getElementById("watchlistResult").style.transition = "0s"
                document.getElementById("historyResult").style.transition = "0s"
                document.getElementById("watchlistResult").style.left = "-303px"
                document.getElementById("historyResult").style.left = "0px"
                setTimeout(()=>{
                    document.getElementById("watchlistResult").style.transition = "0.5s"
                    document.getElementById("historyResult").style.transition = "0.5s"
                }, 10)
                currentList = "historyResult"
                window.location.hash = "#historylist"}}>History
            </button>
            <h3>My Watchlist</h3>
            <span>
                Sort by:
                <select /*onChange={event=>props.onSearchType(event.target.value)}*/>
                    <option key="Choose" selected hidden>List Order</option>
                    {props.options.map(function (opt) { return <option key={opt}>{opt}</option> })}
                </select>
            </span>
            <hr></hr>
            <table class = "watchlistTable">
                <tbody>
                    {[...props.watchlist].map(title => <tr class = "watchlistTr" key={title.title}>
                        <td><img src={"https://image.tmdb.org/t/p/w500/" + title.poster_path} height={50} /></td>
                        <td class="watchlistTitle">
                            {title.title || title.name}
                        </td>
                        <td class = "deleteButtonRow">
                            <button class="deleteButton" onClick={()=>props.removeTitle(title)}>x</button></td>
                        <td class = "addToHistoryRow">
                            <button class="addToHistory" onClick={()=>{props.addToHistorylist(title);
                                props.removeTitle(title) }}>Seen</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}