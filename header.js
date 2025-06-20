// Function to shrink the header on scroll
window.onscroll = function() {
    shrinkHeader();
};

function shrinkHeader() {
    var header = document.getElementById("main-header");
    if (window.scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
}
