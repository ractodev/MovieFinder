class DataModel {
    constructor(titles = [], watchlist = [], currentTitle = null, observers = [], historylist = [], movieTitle = "", action = null, actionCSS = "") {
        this.titles = titles;
        this.watchlist = watchlist;
        this.setCurrentTitle(currentTitle);
        this.observers = observers;
        this.historylist = historylist;
        this.movieTitle = movieTitle;
        this.action = action;
        this.actionCSS = actionCSS;
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
        this.currentTitleType = type;
        this.currentTitleDetails = null;
        this.titleTrailer = [];
        this.titleProviders = [""];
        this.currentTitleError = null;
        this.notifyObservers();
        if (this.currentTitle) {
            TmdbSource.tmdbGetDetailedTitleInfo(type, this.currentTitle)
                .then(data => {
                    if (this.currentTitle === id) {
                        this.currentTitleDetails = data[0];
                        this.titleTrailer = this.findTrailerKey(data[1]);
                        this.titleProviders = this.checkProviderAvailability(data[2]["SE"]);
                        this.notifyObservers();
                    }
                })
                .catch(err => {
                    if (this.currentTitle === id) {
                        this.notifyObservers();
                    }
                })
        }
    }

    findTrailerKey(videoData) {
        if (videoData.length > 0) {
            let trailer = videoData.find(video => (video.type === "Trailer"));
            if (trailer) {
                //official trailer was found
                return trailer.key;
            } else {
                //otherwise, return arbitrary video
                return videoData[0].key;
            }
        } else {
            //no videos? oh yeah, don't ask what this is
            return "dQw4w9WgXcQ";
        }
    }

    checkProviderAvailability(providerData) {
        //check if swedish providers are available
        if (providerData.flatrate !== undefined) {
            //title available on streaming services
            return providerData.flatrate;
        } else if (providerData.buy !== undefined) {
            //title available for purchase
            return providerData.buy;
        }
    }

    removeFromWatchlist(titleData) {
        this.watchlist = this.watchlist.filter(title => title.id !== titleData.id);
        this.notifyObservers();
    }

    addToWatchlist(title) {
        if (!this.watchlist.find(elem => elem.id === title.id)) {
            this.watchlist = [...this.watchlist, title];
            this.notifyObservers();
        }
    }


    removeFromHistorylist(titleData) {
        this.historylist = this.historylist.filter(title => title.id !== titleData.id);
        this.notifyObservers();
    }

    addToHistorylist(title) {
        if (!this.historylist.find(elem => elem.id === title.id)) {
            this.historylist = [...this.historylist, title];
            this.notifyObservers();
        }
    }

    clearHistorylist() {
        this.historylist = []
        this.notifyObservers()
    }

    addObserver(callback) { this.observers = [...this.observers, callback] }
    removeObserver(callback) { this.observers = this.observers.filter(x => x !== callback) }
    notifyObservers() { try { this.observers.forEach(cb => cb()) } catch (e) { console.log(e) } }

}