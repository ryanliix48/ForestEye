window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(0,0,0,0.8)";
        header.style.backdropFilter = "blur(20px)";
        header.style.transition = ".4s";

    } else {

        header.style.background = "rgba(0,0,0,.45)";

    }

});
