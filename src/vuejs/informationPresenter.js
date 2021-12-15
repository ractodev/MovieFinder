function InformationPresenter(props){
    return promiseNoData(props.model.currentTitle, props.model.moreTitleDetails, props.model.currentTitleError) ||
        <InformationView title = {props.model.moreTitleDetails}
                         trailer = {props.model.titleTrailer}
                         providers = {props.model.titleProviders}
                         isTitleInWatchlist={props.model.titles.find(title=>title.id === props.model.currentTitle)}
                         titleAdded={title=>props.model.addToWatchlist(title)}/>
}