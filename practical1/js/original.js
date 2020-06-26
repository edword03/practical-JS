/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms;

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function rememberMyFilms () {
  
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
  
    if (a != null && b != null && a !='' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('well');
    } else {
      console.log('error');
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
      alert('Просмотренно довольно мало фильмов');
      console.log('Просмотренно довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30 ) {
      alert('Вы классический зритель');
      console.log('Вы классический зритель');

  } else if (personalMovieDB.count > 30) {
      alert('Вы киноман!');
      console.log('Вы киноман!');
    
  } else {
      alert('Произошла ошибка');
      console.log('error');
    
  }
}

detectPersonalLevel();

function ShowMyDB (hidden) {
  if(!hidden) {
    console.log(personalMovieDB);
  }
}

ShowMyDB(personalMovieDB.privat);

function writeYourGenres () {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любмый жанр под номером ${i}`);
  }
  
}

writeYourGenres();




// let num = +prompt('Введите число ', '');

// if (num < 10) {
//   console.log('мимо');
//   alert('мио ');
// } else if (num + 5 < 10) {
//   console.log('лузер ');
// } else if (num == 25) {
//   console.log('Во, попал, красавчик! ');
//   alert('угадал!');
// }

// switch (num) {
//   case 10:
//     console.log('Неверно');
//     break;
//   case 15:
//     console.log('Близко');
//     break;
//   case 20:
//     console.log('попал');
//     break;

//   default: 
//     console.log('Не в этот раз');
//     break;
// }


