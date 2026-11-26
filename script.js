
document.addEventListener("DOMContentLoaded", function () {

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-link").forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

});
