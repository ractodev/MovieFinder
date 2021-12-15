function DetailsPresenter(props){
    return promiseNoData(props.model.currentTitle, props.model.currentTitleDetails, props.model.currentTitleError) ||
        <DetailsView title={props.model.currentTitleDetails}
                     isTitleInWatchlist={props.model.titles.find(title=>title.id === props.model.currentTitle)}
                     titleAdded={title=>props.model.addToWatchlist(title)}
        />
}