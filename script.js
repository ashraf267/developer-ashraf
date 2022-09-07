// Typewriter effect
var x = 0;
var txt = "Software Developer";
var speed = 110;

// Anonymous function
(function typewriter() {
    if (x < txt.length) {
        document.getElementById("job-title").innerHTML += txt.charAt(x);
        x++;
        setTimeout(typewriter, speed);
    }
}) ()

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let y;
    let slides = document.getElementsByClassName("my-slides");
    for (y = 0; y < slides.length; y++) {
        slides[y].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2002); // 2002
}