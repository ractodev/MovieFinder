function InformationPresenter(props){
    return promiseNoData(props.model.currentTitle, props.model.currentTitleDetails, props.model.currentTitleError) ||
        <InformationView title = {props.model.currentTitleDetails}
                         trailer = {props.model.titleTrailer}
                         providers = {props.model.titleProviders}
                         isTitleInWatchlist={props.model.watchlist.find(title=>title.id === props.model.currentTitle)}
                         titleAdded={title=>props.model.addToWatchlist(title)}
                         removeTitle={title=>props.model.removeFromWatchlist(title)}
                         action={x => props.model.action = x}
                         actionCSS={x => props.model.actionCSS = x}
                         movieTitle = {props.model.currentTitleDetails.title}
        />
}