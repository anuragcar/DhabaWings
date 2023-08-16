function smoothScrollTo(targetId) {
    const targetElement = document.querySelector(targetId);
    const headerHeight = document.querySelector("header").offsetHeight;
    const scrollDistance = targetElement.offsetTop - headerHeight;

    window.scrollTo({
        top: scrollDistance,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScrollTo(link.getAttribute("href"));
        });
    });
});
