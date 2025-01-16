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
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let watchedMovie = prompt('One of the last watched movie?', '');
        let rating = prompt('How would you rate it?', '');
        if (watchedMovie !== "" && rating !== "" && watchedMovie !== null && rating !== null && watchedMovie.length < 50) {
            personalMovieDB.movies[watchedMovie] = rating;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel (){
    alert((personalMovieDB.count < 10) ? "Watched quite a few movies" :
    (personalMovieDB.count < 30) ? "You're a classic viewer" :
    (personalMovieDB.count >= 30) ? "You're a movie fan" : "Error");
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) console.log(personalMovieDB);
}


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your favorite genre number ${i + 1}?`, ``);;
    }
}
writeYourGenres();

showMyDB(personalMovieDB.privat);
