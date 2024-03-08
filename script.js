document.addEventListener("DOMContentLoaded", function () {
    var parallax = document.getElementById("parallax");

    window.addEventListener("scroll", function () {
        var scrollPosition = window.pageYOffset;
        parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    });
});