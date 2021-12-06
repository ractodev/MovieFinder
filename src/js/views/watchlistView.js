function WatchlistView(props) {
    //function to display a sidebar with movies the user has saved
    return (
        <div class="watchlistView">
            <button class="swapButton" onClick={() => {
                document.getElementById("watchlistResult").style.left = "-300px"
                document.getElementById("historyResult").style.left = "0px"
                currentList = "historyResult"
                window.location.hash = "#historylist"}}>History
            </button>
            <h3>My Watchlist</h3>
            <span>
                <button class="editButton" onClick={console.log("User want to edit watchlist!")}>Edit</button>
                Sort by:
                <select /*onChange={event=>props.onSearchType(event.target.value)}*/>
                    <option key="Choose" selected hidden>List Order</option>
                    {props.options.map(function (opt) { return <option key={opt}>{opt}</option> })}
                </select>
            </span>
            <hr></hr>
            <table>
                <tbody>
                    {[...props.watchlist].map(title => <tr key={title.title}>
                        <td> <button class="deleteButton" onClick={()=>props.removeTitle(title)}>x</button></td>
                        <td class="Title">
                            {title.title || title.name}
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <button className="logButton" onClick={() => mainApp.logout() }>logout</button>
        </div>
    );
}