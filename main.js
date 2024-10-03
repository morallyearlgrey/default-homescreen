document.addEventListener("DOMContentLoaded", function () {
    const lightbulb = document.querySelector("#lightbulb");

    function changeBackground() {
        const currentBackgroundImage = getComputedStyle(document.body).backgroundImage;
        if (currentBackgroundImage==("./images/background.png")) {
            document.body.style.backgroundImage = ""; 
        } else {
            document.body.style.backgroundImage = "url('./images/blackspace.png')";
        }
    }

    lightbulb.addEventListener("click", (e) => {
        changeBackground();
        lightbulb.classList.toggle('active'); 
    });
});
