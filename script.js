var x = 0;
var txt = "Software Developer";
var speed = 105;

// Anonymous function
(function typewriter() {
    if (x < txt.length) {
        document.getElementById("job-title").innerHTML += txt.charAt(x);
        x++;
        setTimeout(typewriter, speed);
    }
}) ()