"use strict"; // strict mode for spelling code
/*

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


 //logical operation task 2 practise

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
}// cona in not undefined 

let hamburger3;
const fries3 = NaN;
const cola3 = 0;
const nuggets3 = 2;

if (hamburger3 && cola || fries === 3 && nuggets) {
    console.log("done!");
}// cola is not udefined

// loops

let nuberStar = 10;
let stringStar = "";

for ( let i = 0; i <= nuberStar; i++) {
 
    for ( let star = 0; star <= i; star++) {
        stringStar += "*";
    }
    stringStar += "\n";
    
}

console.log(stringStar);

for (let i = 0; i <= 10; i++){
    let res = i % 2 === 0; 
    if (res) {
        console.log(i);
    }else {
        continue;
    }
}



    for( let i = 20; i > 9; i-- ) {
        console.log(i);
        if ( i == 13) {
            break;
        }
        
    }

    for (let i = 0; i <= 10; i++){
        let res = i % 2 === 0; 
        if (res) {
            console.log(i);
        }else {
            continue;
        }
    }


    for (let i = 2; i <= 16; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            console.log(i);
        }
    }

    let i = 2;
while ( i < 16 ) {
    i++;
    if (i % 2 === 0) {
        continue;
    }else {
        console.log(i++);
    }
}

function fifthTask() {
    const arrayOfNumbers = [];
    for (let i = 5; i <= 10; i++){
        for ( let k = 0; k <= 5; k++) {
            arrayOfNumbers[k] = i++; 
        }
       
    }
    // Пишем решение вот тут
    
    
    // Не трогаем
    return arrayOfNumbers;
}

//Заполните новый массив (result) числами из старого (arr). Количество ;


function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];
    for (let i = 0; i <= arr.length; i++) {
    for (let k = 0;  k <= arr.length; k++) {
        result[k] = arr[i];
    }
}
    // Пишем решение вот тут
    
    
    // Не трогаем
    return result;
}
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];
for (let i = 0; i <= arr.length - 1; i++) {
    result[i] = arr[i];
}

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i <= data.length -1; i++) {
    
    if (typeof (data[i]) === 'number') {
        data[i] *= 2;   
       console.log(data[i]);
    } else if (typeof (data[i]) === 'string'){
        data[i] += " - done";
       console.log(data[i]);
    }

}


const ddata = [5, 10, 'Shopping', 20, 'Homework'];
for( let test = 0; test <= ddata.length - 1; test++) {
    console.log( typeof (ddata[test]));
}

const daata = [5, 10, 'Shopping', 20, 'Homework'];
const reesult = [];
for (let i = daata.length - 1; i >= 0; i--) {
    reesult[i] = daata[i];
}


const daaata = [5, 10, 'Shopping', 20, 'Homework'];
const reasult = [];
for (let i = daaata.length - 1; i >= 0; i--) {
     
     
}


const lines = 5;
let result = '';

for (let i = 0; i <= lines.length; i++){

    for(let star = 0; star <= 10; star++) {
        console.log();
    }
}
*/
// questions about movie 



let dataFromUser = prompt(['How much movies did you watch ?']);
let dataFromUserKindOfMuvie = prompt(['What was last movie you seen ?']);
let dataFromUserRateMovie = prompt(['Rate the last movie from 1 star to 5.']);


if (dataFromUser.length <= 50 || dataFromUserKindOfMuvie.length <= 50 || dataFromUserRateMovie.length <= 50) {
    while (dataFromUser === '' || dataFromUserKindOfMuvie === '' || dataFromUserRateMovie == '') {

        if (dataFromUser === '' || dataFromUserKindOfMuvie === '' || dataFromUserRateMovie == '') {

            switch ('') {

                case dataFromUser: alert('Answer to this uestion "How much movies did you watch ?"');
                    dataFromUser = prompt(['How much movies did you watch ?']);
                    continue;

                case dataFromUserKindOfMuvie: alert('Answer to this uestion "What was last movie you seen ?" please');
                    dataFromUserKindOfMuvie = prompt(['What was last movie you seen ?']);
                    continue;


                case dataFromUserRateMovie: alert('Rate whached move please.');
                    dataFromUserRateMovie = prompt(['Rate the last movie from 1 star to 5.']);
                    continue;

                default:
                    alert("You did not answered to questions , please answer to it");

            }

        }

        continue;
    }

} else {
    alert('You can  write maximum 50 symbols');
     dataFromUser = prompt(['How much movies did you watch ?']);
 dataFromUserKindOfMuvie = prompt(['What was last movie you seen ?']);
 dataFromUserRateMovie = prompt(['Rate the last movie from 1 star to 5.']);
}

const personalMovieDB = {
    count: dataFromUser,
    movies: {
        frequencyOfWhatchingMovie: dataFromUser,
        kindeOfMovie: dataFromUserKindOfMuvie,
        rate: dataFromUserRateMovie,
    },
    actors: {},
    genres: [],
    privat: false,
};


if (personalMovieDB.count <= 10) {
    alert("You whached not more muvies");
} else if (personalMovieDB.count >=11 && personalMovieDB.count <=30) {
    alert("You are awsome user");
}else if ( personalMovieDB.count >=31 ) {
    alert("You are best");
}else {
    alert("error");
}
