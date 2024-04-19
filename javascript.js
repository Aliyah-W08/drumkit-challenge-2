//button elements
const boomButton = document.getElementsByClassName("a button")
const clapButton = document.getElementsByClassName("s button");
const hihatButton = document.getElementsByClassName("d button");
const kickButton = document.getElementsByClassName("f button");
const openhatButton = document.getElementsByClassName("h button");
const rideButton = document.getElementsByClassName("j button");
const snareButton = document.getElementsByClassName("k button");
const tinkButton = document.getElementsByClassName("l button");
const tomButton = document.getElementsByClassName("p button");

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
