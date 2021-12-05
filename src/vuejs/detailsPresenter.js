function DetailsPresenter(props){
    return promiseNoData(props.model.currentTitle, props.model.currentTitleDetails, props.model.currentTitleError) ||
        <DetailsView title = {props.model.currentTitleDetails}/>
}