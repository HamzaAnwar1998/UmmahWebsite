const jsToggler = document.getElementById("jsToggler");
jsToggler.addEventListener("click", function () {
    const links = document.getElementById("links");
    links.classList.toggle("active");
})