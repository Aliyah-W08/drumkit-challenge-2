//button elements
const boomButton = document.getElementById("a button")
const clapButton = document.getElementById("s button");
const hihatButton = document.getElementById("d button");
const kickButton = document.getElementById("f button");
const openhatButton = document.getElementById("h button");
const rideButton = document.getElementById("j button");
const snareButton = document.getElementById("k button");
const tinkButton = document.getElementById("l button");
const tomButton = document.getElementById("p button");

//sound elements
const boomSound = document.getElementById("boomSound");
const clapSound = document.getElementById("clapSound");
const hihatSound = document.getElementById("hihatSound");
const kickSound = document.getElementById("kickSound");
const openhatSound = document.getElementById("openhatSound");
const rideSound = document.getElementById("rideSound");
const snareSound = document.getElementById("snareSound");
const tinkSound = document.getElementById("tinkSound");
const tomSound = document.getElementById("tomSound");


//each button when pressed will play the sound assigned.
boomButton.addEventListener("click", () => {
    boomSound.play()
});

clapButton.addEventListener("click", () => {
    clapSound.play()
});

hihatButton.addEventListener("click", () => {
    hihatSound.play()
});

kickButton.addEventListener("click", () => {
    kickSound.play()
});

openhatButton.addEventListener("click", () => {
    openhatSound.play()
});

rideButton.addEventListener("click", () => {
    rideSound.play()
});

snareButton.addEventListener("click", () => {
    snareSound.play()
});

tinkButton.addEventListener("click", () => {
    tinkSound.play()
});

tomButton.addEventListener("click", () => {
    tomSound.play()
});

//pressKey
document.addEventListener('keydown', function (event) {
    // Check which key is pressed
    switch (event.key) {
        case "a":
            // Play boomSound when "a" is pressed
            document.getElementById("boomSound").play();
            break;

        case "s": // this is changing the key you want pressed
            // Play clapSound when "b" is pressed
            document.getElementById("clapSound").play();
            break;//the break will stop the previous code running and move to the next
        case "d":
            document.getElementById("hihatSound").play();
            break;
        case "f":
            document.getElementById("kickSound").play();
            break;
        case "h":
            document.getElementById("openhatSound").play();
            break;
        case "j":
            document.getElementById("rideSound").play();
            break;
        case "k":
            document.getElementById("snareSound").play();
            break;
        case "l":
            document.getElementById("tinkSound").play();
            break;
        case "p":
            document.getElementById("tomSound").play();
    }
});


