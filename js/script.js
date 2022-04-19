"use strict";

/* const result = confirm('are you here?');
console.log(result); */


/* const answers = [];

answers[0] = prompt('kak vashe name', '');
answers[1] = prompt('kak vashe familia', '');
answers[2] = prompt('skolko tebe let bichara', '');

console.log(typeof(null)); */

/* console.log(2*2 === '4');

const isCheked = true,
      isClose = true;

console.log(isCheked && isClose); */

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?'),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);