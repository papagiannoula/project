'use strict'

// let start = document.getElementsByClassName("overlay-text");
let start = document.getElementById("visible");
let text = document.getElementById("text");

text.style.display = "none";

function test() {
    text.style.display = "block";
    start.style.display = "none";
}