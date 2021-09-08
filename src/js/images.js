//Create Images
import pngImage from "../img/amongus.png";

let pngBtn = document.getElementById("png");
let svgBtn = document.getElementById("svg");
let jpgBtn = document.getElementById("jpg");

pngBtn.addEventListener("click", () => {
    let newImg = document.createElement("img");

    newImg.src = pngImage;

    document.body.appendChild(newImg);
});

export { pngBtn, svgBtn, jpgBtn, pngImage };