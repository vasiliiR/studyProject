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
    actors : '',
    genres : '',
    privat : false,
 };



