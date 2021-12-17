function WatchlistView(props) {
    //function to display a sidebar with movies the user has saved
    return (
        <div>
            <button class="openButton" id="openButton" onClick={() => {
                if (document.getElementById(currentList).style.left === "0px") {
                    document.getElementById(currentList).style.left = "-280px"
                    document.getElementById("openButton").style.left = "0px"
                    window.location.hash = "#search"
                } else {
                    document.getElementById(currentList).style.left = "0px"
                    document.getElementById("openButton").style.left = "280px"
                    window.location.hash = "#watchlist"

                }
                currentList = "watchlistResult"
            }
            }><span id="watchlistBtnTitle">Watchlist</span>
            </button>
            <div class="watchlistView">
                <button class="swapButton" onClick={() => {
                    document.getElementById("watchlistResult").style.transition = "0s"
                    document.getElementById("historyResult").style.transition = "0s"
                    document.getElementById("watchlistResult").style.left = "-280px"
                    document.getElementById("historyResult").style.left = "0px"
                    setTimeout(() => {
                        document.getElementById("watchlistResult").style.transition = "0.5s"
                        document.getElementById("historyResult").style.transition = "0.5s"
                    }, 10)
                    currentList = "historyResult"
                    window.location.hash = "#historylist"
                }}>Seen List
                </button>
                <h3>My Watchlist</h3>
                <hr></hr>
                <table class="watchlistTable">
                    <tbody>
                        {[...props.watchlist].map(title => <tr class="watchlistTr" key={title.title}>
                            <td><button class="RemoveButt" onClick={() => props.removeTitle(title)}>x</button></td>
                            <td><img src={"https://image.tmdb.org/t/p/w500/" + title.poster_path} height={50} /></td>
                            <td class="watchlistTitle">
                                {title.title || title.name}
                            </td>
                            <button class="Rbutton" onClick={() => {
                                props.addToHistorylist(title);
                                props.removeTitle(title)
                                props.actionCSS("Info")
                                props.action("Marked " + (title.title || title.name) + " as seen!")
                                document.getElementById("notifyUser").style.right = "0px"
                                setTimeout(function () {
                                    document.getElementById("notifyUser").style.right = "-300px"
                                }, 3000);
                            }}>Seen</button>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}