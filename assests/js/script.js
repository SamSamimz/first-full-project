'use strict'
// ===============
// nav menu js 
// ===============
const menubar = document.querySelector('.nav-open-btn');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector(".navbar");
const navClose = document.querySelector(".nav-close-btn");
const navLinks = document.querySelectorAll(".nav-link");
const navOpen = [menubar, overlay, navClose];

for (let i = 0; i < navOpen.length; i++) {
    navOpen[i].addEventListener('click', function () {
        nav.classList.toggle('active');
        overlay.classList.toggle('active');
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function () {
                nav.classList.remove('active');
                overlay.classList.remove('active');
            })
        }
    });
}

// ==========
// search box js
// ===========
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
const searchBoxOverlay = document.querySelector('.search-box-overlay');
const submitBtn = document.querySelector('.search-box button');
searchBtn.addEventListener('click', function () {
    searchBox.classList.toggle('active');
    searchBoxOverlay.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
        searchBoxOverlay.addEventListener('click', function () {
            searchBox.classList.remove('active');
            searchBoxOverlay.classList.remove('active');
        });
        submitBtn.addEventListener('click', () => {
            searchBox.classList.remove('active');
            searchBoxOverlay.classList.remove('active');
        })
    }
});


// stack the header bottom at top 
window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
        document.querySelector('.header-bottom').classList.add('active');
    } else {
        document.querySelector('.header-bottom').classList.remove('active');
    }
})