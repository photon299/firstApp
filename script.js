//* 1
const numberOfFilms = +prompt('How many movies have you watched?', '');

//* 2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

//* 3
const firstWatchedMovie = prompt('One of the last watched movie?', '');
const firstMovieRate = +prompt('How would you rate it?', '');
const secondWatchedMovie = prompt('One of the last watched movie?', '');
const secondMovieRate = +prompt('How would you rate it?', '');

personalMovieDB.movies[firstWatchedMovie] = firstMovieRate;
personalMovieDB.movies[secondWatchedMovie] = secondMovieRate;
console.log(personalMovieDB);