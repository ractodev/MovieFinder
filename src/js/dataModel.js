class DataModel {
    constructor(titles = [], watchlist = [], currentTitle = null/*, searchType = null*/, observers = [], historylist = []) {
        this.titles = titles;
        this.watchlist = watchlist;
        this.setCurrentTitle(currentTitle);
        //this.setSearchType(searchType);
        this.observers = observers;
        this.historylist = historylist;
    }

    setTitles(watchlist) {
        this.watchlist = [...watchlist];
        this.notifyObservers();
    }

    setCurrentTitle(id, type) {
        if (this.currentTitle === id) {
            return;
        }
        this.currentTitle = id;
        this.currentTitleDetails = null;
        this.currentTitleError = null;
        this.notifyObservers();

        if (this.currentTitle && (type === "Movie")) {
            TmdbSource.tmdbGetMovieDetails(this.currentTitle)
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
        } else if (this.currentTitle && (type === "TV Series")) {
            TmdbSource.tmdbGetSeriesDetails(this.currentTitle)
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

    addToHistorylist(title) {
        if (!this.historylist.includes(title)) {
            this.historylist = [...this.historylist, title];
            this.notifyObservers();
        }
    }

    removeFromHistorylist(titleData) {
        this.historylist = this.historylist.filter(title => title.id !== titleData.id);
    }

    addObserver(callback) { this.observers = [...this.observers, callback] }
    removeObserver(callback) { this.observers = this.observers.filter(x => x !== callback) }
    notifyObservers() { try { this.observers.forEach(cb => cb()) } catch (e) { console.log(e) } }

}

/*
    setSearchType(type) {
        if (!type) {
            //standard should be what is first recommended to the user on the landing page
            type = "Movie";
        }
        this.searchType = type;
        this.notifyObservers();
    }
*/