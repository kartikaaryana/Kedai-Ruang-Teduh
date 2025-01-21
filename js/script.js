// Toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// Hamburger menu click event
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = () => {
    searchForm.classList.toggle('active');
    searchBox.focus();
};


// Klik di luar sidebar untuk menghilangkannav
const hamburger = document.querySelector('#hamburger-menu');
const sb =document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});