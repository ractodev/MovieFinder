class DataModel{
    constructor(watchlist= [], currentTitle = null) {
        this.watchlist = null; 
        this.currentTitle = currentTitle;
    }

    setCurrentTitle(id) {
        this.currentTitle = id;
    }

    addToWatchlist(title) {if(!this.watchlist.includes(title)) {
        this.watchlist = [...this.watchlist,title];
        this.notifyObservers(); } }

    removeFromWatchlist(titleData) {
        this.watchlist = this.watchlist.filter(title => title.id !== titleData.id);
    }

    addObserver(callback) { this.observers = [...this.observers, callback]}
    removeObserver(callback){this.observers = this.observers.filter(x => x !== callback) }
    notifyObservers() { try {this.observers.forEach( cb => cb()) } catch (e) {console.log(e)} }
}