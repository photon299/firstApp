"use strict"

let numberOfFilms;
function start() {
    numberOfFilms  = +prompt('How many movies have you watched?', '');
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms  = +prompt('How many movies have you watched?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let watchedMovie = prompt('One of the last watched movie?', ''); //.trim()
            let rating = prompt('How would you rate it?', '');
            if (watchedMovie !== "" && rating !== "" && watchedMovie !== null && rating !== null && watchedMovie.length < 50) {
                this.movies[watchedMovie] = rating;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        alert((this.count < 10) ? "Watched quite a few movies" :
        (this.count < 30) ? "You're a classic viewer" :
        (this.count >= 30) ? "You're a movie fan" : "Error");
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            this.genres[i] = prompt(`Your favorite genre number ${i + 1}`, ``);
            if (typeof this.genres[i] !== "string" || this.genres[i].length === 0) i--;
        }
    },
    toggleVisibleMyDB: function() {
        this.privat = (!this.privat) ? true : false;
    },
    showMyBD: function(hidden) {
        if (hidden) console.log(this);
    },
};
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyBD(personalMovieDB.privat);