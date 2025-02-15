document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("faction-video");

    if (video) {
        video.play().catch(error => {
            console.log("Autoplay failed, requiring user interaction:", error);
        });

        // Redirect when video ends
        video.addEventListener("ended", function () {
            let currentPage = window.location.pathname;

            if (currentPage.includes("mint-divine.html")) {
                window.location.href = "mint-divine-faction.html";
            } else if (currentPage.includes("mint-primordial.html")) {
                window.location.href = "mint-primordial-faction.html";
            } else if (currentPage.includes("mint-fallen.html")) {
                window.location.href = "mint-fallen-faction.html";
            }
        });
    }
});
window.addEventListener("pageshow", function(event) {
    let video = document.getElementById("faction-video");
    if (video) {
        video.load();  // Ensures the video reloads
        video.play().catch(error => {
            console.log("Autoplay failed, requiring user interaction:", error);
        });
    }
});