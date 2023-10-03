console.log("initiated");

let originalX = 0;
let originalY = 0;

const batasKiri = 0;
const batasKanan = 400;
const acceleration = 20;

const KEY = {
    W: 119,
    A: 97,
    S: 115,
    D: 100
};

const CONTROL = {
    UP: KEY.W,
    LEFT: KEY.A,
    DOWN: KEY.S,
    RIGHT: KEY.D,
}

const box = document.getElementById('box');

document.addEventListener("keypress", function (e) {
    console.log(e.keyCode);

    if (e.keyCode === CONTROL.UP) {
        originalY = originalY - acceleration;
        box.style.top = originalY + 'px';
    } else if (e.keyCode === CONTROL.LEFT) {
        originalX = originalX - acceleration;

        if (originalX < batasKiri) {
            alert("Nabrak");
        } else {
            box.style.left = originalX + 'px';
        }
    } else if (e.keyCode === CONTROL.DOWN) {
        originalY = originalY + acceleration;
        box.style.top = originalY + 'px';
    } else if (e.keyCode === CONTROL.RIGHT) {
        originalX = originalX + acceleration;

        if (originalX > batasKanan) {
            alert("Nabrak Kanan");
        } else {
            box.style.left = originalX + 'px';
        }
    }
})
