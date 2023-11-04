// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let arrDirectors = moviesArray.map((allDirectors) => {
        return allDirectors.director;
    });
    return arrDirectors;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaSpielberg = moviesArray.filter((dramaMovies) => {
        return dramaMovies.director === "Steven Spielberg" && dramaMovies.genre.includes("Drama")
    });
    return dramaSpielberg.length;
};
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    let result = moviesArray.reduce((acc, currentValue) => {
        if (currentValue.score === undefined) {
            return acc;
        } else {
            return acc + currentValue.score;
        }
    }, 0);
    let average = result / moviesArray.length;
    return parseFloat(average.toFixed(2));};
    
    // Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesScore(moviesArray) {
        let dramaAverage = moviesArray.filter((dramaMovies) => {
            return dramaMovies.genre.includes('Drama');
        });
        if (dramaAverage.length === 0) {
            return 0;
        };
        let average = dramaAverage.reduce((acc, currentValue) => {
            return acc + currentValue.score;
        }, 0);
        let rating = parseFloat((average / dramaAverage.length).toFixed(2));
        return rating
    }; 
    
    // Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    function orderByYear(moviesArray) {
        return moviesArray.map(function (item) {
            return item;
        })      
        .sort((a, b) => { 
            if (a.year === b.year) {
                return a.title.localeCompare(b.title);
            }
            return a.year - b.year;
        });

    };    
    
    // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(moviesArray) {
        const alphaOrder = moviesArray.map (function (item) {
            return item.title;
        });
        alphaOrder.sort((a, b) => {
            return a.localeCompare(b);
        });
        const top20 = alphaOrder.splice(0, 20);
        return top20;
    }
    
    // BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
    function turnHoursToMinutes(moviesArray) {
        return moviesArray.map(function (item) {
            return item;
        })
}
    
    // BONUS - Iteration 8: Best yearly score average - Best yearly score average
    function bestYearAvg(moviesArray) {
        if (moviesArray.length === 0) {
            return null;
        };
    }
    