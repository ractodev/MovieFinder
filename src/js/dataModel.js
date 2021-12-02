class DataModel {
    constructor(titles = [], watchlist = [], currentTitle = 1930, observers = []) {
        this.titles = titles;
        this.watchlist = watchlist;
        this.setCurrentTitle(currentTitle);
        this.observers = observers;
    }

    setTitles(watchlist) {
        this.watchlist = [...watchlist];
        this.notifyObservers();
    }

    setCurrentTitle(id) {
        if (this.currentTitle === id) {
            return;
        }
        this.currentTitle = id;
        this.currentTitleDetails = null;
        this.currentTitleError = null;
        this.notifyObservers();

        if (this.currentTitle) 
            TmdbSource.tmdbGetTitleDetails(this.currentTitle)
                .then(data => {
                    if (this.currentTitle === id) {
                        this.currentTitleDetails = data;
                        this.notifyObservers();
                    }
                })
                .catch(err => {
                    if (this.currentTitle === id) {
                        this.currentTitleError = err;
                        this.notifyObservers();
                    }
                })
    }

    addToWatchlist(title) {
        if (!this.watchlist.includes(title)) {
            this.watchlist = [...this.watchlist, title];
            this.notifyObservers();
        }
    }

    removeFromWatchlist(titleData) {
        this.watchlist = this.watchlist.filter(title => title.id !== titleData.id);
    }

    addObserver(callback) { this.observers = [...this.observers, callback] }
    removeObserver(callback) { this.observers = this.observers.filter(x => x !== callback) }
    notifyObservers() { try { this.observers.forEach(cb => cb()) } catch (e) { console.log(e) } }
}