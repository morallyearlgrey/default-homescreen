if (typeof window != 'undefined') {

window.onload = function() {
    const lightbulb = document.querySelector("#lightbulb");

    function changeBackground() {
        let currentBackgroundImage = document.body.style.backgroundImage;
        
        if (currentBackgroundImage.includes("./images/background.png")) {
            document.body.style.backgroundImage = "url('./images/blackspace.png')";
            const ntitle = document.getElementById("ntitle");
            ntitle.style.color="white";

            const nsubheading = document.getElementById("nsubheading");
            nsubheading.style.color="white";

        } else {
            document.body.style.backgroundImage = "url('./images/background.png')"; 
            const ntitle = document.getElementById("ntitle");
            ntitle.style.color="black";

            const nsubheading = document.getElementById("nsubheading");
            nsubheading.style.color="black";

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