"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('How many movies have you watched?', '');
        while (this.count == "" || this.count == null || isNaN(this.count)) {
            this.count  = +prompt('How many movies have you watched?', '');
        }
    },
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
        this.genres.forEach((genre, i) => console.log(`Любимый жанр #${i + 1} - это ${genre}`));
    },
    toggleVisibleMyDB: function() {
        this.privat = (!this.privat) ? true : false;
    },
    showMyBD: function(hidden) {
        if (hidden) console.log(this);
    },
};
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyBD(personalMovieDB.privat);