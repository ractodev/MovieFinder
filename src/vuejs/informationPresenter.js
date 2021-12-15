function InformationPresenter(props){
    return promiseNoData(props.model.currentTitle, props.model.moreTitleDetails, props.model.currentTitleError) ||
        <InformationView title = {props.model.moreTitleDetails}
                         trailer = {props.model.titleTrailer}
                         providers = {props.model.titleProviders}
                         isTitleInWatchlist={props.model.watchlist.find(title=>title.id === props.model.currentTitle)}
                         titleAdded={title=>props.model.addToWatchlist(title)}
                         removeTitle={title=>props.model.removeFromWatchlist(title)}/>
}