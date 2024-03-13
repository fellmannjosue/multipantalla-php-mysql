document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const links = navbar.getElementsByTagName("a");

    for (const link of links) {
        link.addEventListener("click", function() {
            for (const otherLink of links) {
                otherLink.classList.remove("active");
            }
            this.classList.add("active");
        });
    }
});
