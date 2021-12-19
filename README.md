# Moviefinder
A website where users can search for movies, tv series and actors based
on different search parameters. The users can then create their
own personal watchlist that they can turn to when they have trouble 
finding a good movie to watch. The application can also give recommendations
of which website/movie theater/provider to visit in order to watch a desired movie.

**Link to app:**
[https://moviefinder-kth.web.app/]

**Set up locally:**
The only setup needed to run the app locally is to clone the master repository and 
run the **_login.html_** on a local http server. 

**What we have implemented so far:**

- A login procedure to our website using "sign in with google".
- A database that handles multiple users and stores/loads their unique data. 
The database is implemented using Firebase.
- A search function that allows the user to search for:
  - Movies
  - TV-series
  - Actors -> clicking on the actor shows movies they appear on.
- API : The Movie database [https://developers.themoviedb.org/3/getting-started/introduction]
- A main page that display current popular movies with their respective images and titles.
- A details view on a current selected movie:
  - Shows a short movie description, release date and rating
  - Movie rating 
  - "add to watchlist"-button that adds movie to the user watchlist
- A sidebar (click the red box to access view)
  - Displays the user watchlist
  - User can remove titles from the watchlist
  - A "history"-button that switches to the history view
  - A "logout"-button that signs out the user from the website
  
**What we are planning to implement:**
- Add trailers.
- Work with other APIS to access more information (ex "where to watch")
- Expand details view.
- More search parameters.
- Expand functions in sidebar.
- Have a working history view, allow user to add back movies to watchlist.
- Notify user when a title is added to watchlist.
- CSS styling- overall styling/design of website.
- Dark mode.
- search as you type.
- Return to "main-page" function.

**Updated version implements:**
- Updated the details view
  - Renamed to information view.
  - Added trailers.
  - Added "Where to watch" with corresponding icons.
  - Added notification when a title is added to/removed from watchlist.
- Notify user when wrong inputs are made during search.
- A working history view
  - User can add titles back to the watchlist
  - User can clear the whole history
- Updated watchlist view
  - User can mark movie as "seen"
  - User is notified when a title is marked as "seen"
  - Remove-button is moved to the left to avoid confusion
- New overall styling of the whole website
- Return to main-page by pressing the "MovieFinder"-title

**Project file structure:**
- **Directory public**
  - Note: to start app launch login.html
    - login.html: handles google auth and redirects to main html file "index.html."
    - index.html: handles the main render (using Vue). The dataModel is
      initialized, the firebase load/save and the app.js is called.
- **Directory src**
  - Directory js
    - Directory assets
      - Holds images and icons used on the website.
    - Directory firebase
      - **firebaseconfig.js**: configs the firebase.
      - **firebaseModel.js**: handles the save/load of user data.
      - **login.js**: handles the google auth. login and redirection to index.html
      - **main.js**: handles the logout func. 
    - Directory views
      - Adds all the necessary views and their corresponding functions
      - Files: informationView.js, historyView.js, searchView.js, watchlistView.js, notifyView.js
      - **promiseNoData.js**: handles logic for promises, data  and error
    - **app.js**: our main js file that handles all presenters.
    - **dataModel.js**: handles data: titles, watchlist, currentTitle, observers and histoyList.
    - **tmdbSOurce.js**: handles the movie database api calls with different param.
    - Directory vuejs
      -  Adds all the necessary presenter and their corresponding views
    - style.cc -> handles all css related code
    


