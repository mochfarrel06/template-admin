document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector(".navbar-toggler");
    const sidebar = document.querySelector("#sidebar");

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("d-none");
    });
});
