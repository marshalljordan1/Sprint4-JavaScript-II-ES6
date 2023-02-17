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
  var firstTwenty = [...array].sort((a,b) => {
    if (a.title < b.title) return -1;
    return 1;
  });
  firstTwenty = firstTwenty.map(movie => movie.title);
  if (firstTwenty.length > 20) {
  //console.log(firstTwenty.slice(0,20));
    return firstTwenty.slice(0,20);
  } else {
    return firstTwenty;
  }
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let byYear = [...array].sort((a,b) => {
    if (a.year === b.year) {
      if (a.title < b.title) return -1;
      return 1;
    } else {
      return a.year - b.year;
    }
  });
  return byYear;
}
// orderByYear([
//   { title: 'abc', year: 2002 },
//   { title: 'bac', year: 1982 },
//   { title: 'aab', year: 1982 }
// ])


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let categories = array.filter((film) => film.genre == category);
  const catAvg = categories.reduce((acc, cur) => acc + cur.score, 0);
  let count = 0; 
    for (let category of categories) {
      if (category.score !== null && category.score !== '') {
        count++;
      }
    }
    return catAvg / count.toFixed(2);
  }
// moviesAverageByCategory([
//   { score: 5,
//     genre: ['Action'], 
//   },
//   { score: '',
//     genre: ['Action'], 
//   }, 
//   { score: '',
//   genre: ['Drama'], 
// }
// ],
// 'Action');

//const movieTry = [{ duration: '5h 41min' }, { duration: '2h ' }, { duration: '0h 31min' }];
// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let moviesInMinutes = array.map(movie => {
    const durationParts = movie.duration.split(' ');
    const hoursToMinutes = parseInt(durationParts[0]) * 60;
    const minutes = parseInt(durationParts[1]);
    let totalMinutes;
    if (hoursToMinutes === 0) 
      totalMinutes = minutes;
    else if (isNaN(minutes)) 
      totalMinutes = hoursToMinutes;
    else 
      totalMinutes = hoursToMinutes + minutes;
    return {...movie, duration: totalMinutes};
  });
  return moviesInMinutes;
}
hoursToMinutes(movieTry);

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
