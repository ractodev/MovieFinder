function InformationPresenter(props){
    return promiseNoData(props.model.currentTitle, props.model.currentTitleDetails, props.model.currentTitleError) ||
        <InformationView title = {props.model.currentTitleDetails[0].value}
                         similarTitles = {props.model.currentTitleDetails[1].value}
                         trailer = {props.model.currentTitleDetails[2].value}
                         isTitleInWatchlist={props.model.titles.find(title=>title.id === props.model.currentTitle)}
                         titleAdded={title=>props.model.addToWatchlist(title)}/>
}