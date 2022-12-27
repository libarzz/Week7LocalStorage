const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieYear = document.querySelector('.userInputYear');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favouriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let yearInStorage = localStorage.getItem('Year');
let imageUrlInStorage = localStorage.getItem('imageUrl');

if(titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `url('${imageUrlInStorage}')`;
}


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('year', movieYearInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `url('${posterUrlInput}')`;
    movieTitle.value = "";
    moviePosterUrl.value = "";
    movieYear.value = "";
});