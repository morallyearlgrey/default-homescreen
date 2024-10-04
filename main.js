if (typeof window != 'undefined') {

window.onload = function() {
    const lightbulb = document.getElementById("lightbulb");

    function changeBackground() {
        let currentBackgroundImage = document.body.style.backgroundImage;
        
        if (currentBackgroundImage.includes("./images/background.png")) {
            document.body.style.backgroundImage = "url('./images/blackspace.png')";
            const ntitle = document.getElementById("ntitle");
            ntitle.style.color="white";
            ntitle.textContent = "WELCOME TO BLACK SPACE.";

            const nsubheading = document.getElementById("nsubheading");
            nsubheading.style.color="white";

            document.getElementById("lightbulbimage").src = "./images/blightbulb.png";

        } else {
            document.body.style.backgroundImage = "url('./images/background.png')"; 
            const ntitle = document.getElementById("ntitle");
            ntitle.style.color="black";
            ntitle.textContent = "WELCOME TO WHITE SPACE.";

            const nsubheading = document.getElementById("nsubheading");
            nsubheading.style.color="black";

            document.getElementById("lightbulbimage").src = "./images/lightbulb.png";

        }
    }

    lightbulb.addEventListener("click", (e) => {
        changeBackground();
        lightbulb.classList.toggle('active'); 
    });

};

}

// document.addEventListener("DOMContentLoaded", function () {
//     const lightbulb = document.querySelector("#lightbulb");

//     function changeBackground() {
//         const currentBackgroundImage = getComputedStyle(document.body).backgroundImage;
//         if (currentBackgroundImage==("./images/background.png")) {
//             document.body.style.backgroundImage = ""; 
//         } else {
//             document.body.style.backgroundImage = "url('./images/blackspace.png')";
//         }
//     }

//     lightbulb.addEventListener("click", (e) => {
//         changeBackground();
//         lightbulb.classList.toggle('active'); 
//     });
// });