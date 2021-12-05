function HistoryPresenter(props){
    return <HistoryView getHistory = {props.model.historylist}
                        options={["Last seen", "First seen"]}
    />
}