import { movies } from "./data.js";

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let allDirectors =  array.map((film) => film.director);
  // console.log("EXERCICE 1 ->", result);
  return allDirectors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let moviesFromDirector = array.filter((film) => film.director === director);
  return moviesFromDirector;
}
//console.log(getMoviesFromDirector(movies, 'Francis Ford Coppola'));

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesFromDirector = array.filter((film) => film.director === director);
  const averageScore = moviesFromDirector.reduce((acc, cur) => acc + cur.score, 0)
  return averageScore / moviesFromDirector.length.toFixed(2)
}
//moviesAverageOfDirector(movies, 'Francis Ford Coppola');

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const alphOrder = movies.sort((a,b) => {
    if (a.title < b.title) return -1;
    return 1;
    
  })
  console.log(alphOrder);
}
  orderAlphabetically(movies);


  // for (var i = 0; i < alphOrder.length; i++) {
  //   if (alphOrder.length > 20) {
  //     let ordered = [];
  //     ordered = alphOrder[i].title;
  //     ordere
  //   } else if (alphOrder.length < 20) {
  //     return alphOrder;
  //     }
    // let titles = alphOrder.forEach(movie => movie.title);
    // return titles.slice(0,20);
  //   return alphOrder.title.slice(0, 20);
  // } else if (alphOrder.length < 20) {
  //   return alphOrder;
  // }



// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
