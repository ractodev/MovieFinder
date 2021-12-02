function WatchlistView(props) {
    //function to display a sidebar with movies the user has saved
    return (
        <div class="watchlistView">
            <button class = "openButton" onClick = {()=>{
                    if(document.getElementById("watchlistResult").style.left === "0px"){
                        document.getElementById("watchlistResult").style.left = "-300px"
                    }else{
                        document.getElementById("watchlistResult").style.left = "0px"
                    }
                    
                }   
            }>
            </button>
            <h3>My Watchlist</h3>
            <span>
                <button class = "editButton" onClick={console.log("User want to edit watchlist!")}>Edit</button>
                Sort by:
                <select /*onChange={event=>props.onSearchType(event.target.value)}*/>
                    <option key = "Choose" selected hidden>List Order</option>
                    {props.options.map(function(opt){return <option key={opt}>{opt}</option>})}
                </select>
            </span>
            <hr></hr>
            <table>
                <tbody>
                        {[...props.watchlist].map(obj => <tr key={obj.title}>
                        <td> <button onClick={() => props.removeTitle(obj)} className="deleteButton">x</button></td>
                        <td class = "Title">
                            {obj.title}
                        </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
}