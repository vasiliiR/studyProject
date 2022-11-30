"use strict"; // strict mode for spelling code

let dataFromUser = prompt(['How much movies did you watch ?'] );
let dataFromUserKindOfMuvie = prompt(['What was last movie you seen ?']);
let dataFromUserRateMovie = prompt(['Rate the last movie from 1 star to 5.']);

const personalMovieDB = {
    count : dataFromUser,
    movies : {
        frequencyOfWhatchingMovie : dataFromUser,
        kindeOfMovie : dataFromUserKindOfMuvie,
        rate : dataFromUserRateMovie,
    },
    actors : {},
    genres : [],
    privat : false,
 };

 console.log(personalMovieDB.dataFromUser);
 console.log(personalMovieDB.movies.frequencyOfWhatchingMovie);
 console.log(personalMovieDB.movies.kindeOfMovie);
 console.log(personalMovieDB.movies.rate);


 /* logical operation task 2 practise*/

console.log(NaN || 2 || undefined); // true 2
console.log(NaN && 2  && undefined); // false undefined
console.log( 1 && 2 && 3); // true 3
console.log( !1 && 2 || !3); // false !3
console.log( 25 || null && !3); // true 25
console.log( NaN || null || !3 || undefined || 5); // true 5

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola || fries === 3 && nuggets) {
    console.log("Done!!!");
}  // it will be done



let hamburger2;
const fries2 = NaN;
const cola2 = 0;
const nuggets2 = 2;

if(hamburger2 || cola || fries === 3 || nuggets2) {
    console.loge("Done!");
}// done





