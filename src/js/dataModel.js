class DataModel{
    constructor(watchlist= [], currentMovie) {
        this.watchlist = null; 
    }

    addToList(movie) {if(!this.dishes.includes(movie)) {
        this.dishes = [...this.dishes,movie];
        this.notifyObservers(); } }

    addObserver(callback) { this.observers = [...this.observers, callback]}
    removeObserver(callback){this.observers = this.observers.filter(x => x !== callback) }
    notifyObservers() { try {this.observers.forEach( cb => cb()) } catch (e) {console.log(e)} }
}