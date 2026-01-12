if (typeof window != 'undefined') {

window.onload = function() {
    const lightbulb = document.getElementById("lightbulb");

    updateTime();
    setInterval(updateTime, 60);

    function updateTime() {
        const currentTime = new Date();
        const time = currentTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});

        document.getElementById("clock").textContent=time;
    }

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
