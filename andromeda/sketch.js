var mStars = [];
var mMoon;

/**
 * NOTE:
 * Delta calculation.
 * 1 ms = 10 ** -3 seconds.
 */
var latestClick = 0;
let deltaClick = 3000;

function setup() {
    createCanvas(1366, 720);

    for (var i = 0; i < 500; i++) {
        mStars[i] = new Stars();
    }

    mMoon = new Moon("assets/moon.svg");
}

function draw() {
    background(0, 0, 0);

    mMoon.tick();

    for (var i = 0; i < mStars.length; i++) {
        mStars[i].tick();
    }
}

function mousePressed() {
    // NOTE: this check can be simplified with dist()
    if (mouseIsPressed && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {

        if (latestClick == 0) {
            latestClick = Date.now();
            mMoon.showFrom(mouseX, mouseY);

        } else {
            let delta = Math.floor(Date.now() - latestClick);

            if (delta > deltaClick) {
                mMoon.showFrom(mouseX, mouseY);

                latestClick = Date.now();
            }
        }

    }
}
