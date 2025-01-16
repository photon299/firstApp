"use strict"

let numberOfFilms = +prompt('How many movies have you watched?', '');

//*
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
//*
for (let i = 0; i < 2; i++) {
    let watchedMovie = prompt('One of the last watched movie?', '');
    let rating = +prompt('How would you rate it?', '');
    if (watchedMovie !== "" && rating !== "" && watchedMovie !== null && rating !== null && watchedMovie.length < 50) {
        personalMovieDB.movies[watchedMovie] = rating;
    } else {
        i--;
    }
}
// console.log(personalMovieDB);
//*
alert((personalMovieDB.count < 10) ? "Watched quite a few movies" :
    (personalMovieDB.count < 30) ? "You're a classic viewer" :
    (personalMovieDB.count >= 30) ? "You're a movie fan" : "Error");