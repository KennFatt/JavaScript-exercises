class Stars {
    constructor() {
        this.x = random(width);
        this.y = random(-200, -100);

        this.dragVelocity = random(6, 10);
        this.length = random(5, 12);
    }

    reset() {
        this.x = random(width);
        this.y = random(-200, -100);

        this.dragVelocity = random(6, 10);
        this.length = random(5, 12);
    }

    move() {
        this.y = this.y + this.dragVelocity;
        this.dragVelocity = this.dragVelocity + 0.05;

        if (this.y > height) {
            this.reset();
        }
    }

    render() {
        stroke(255, 255, 255);
        line(this.x, this.y, this.x, this.y + this.length);
    }

    tick() {
        this.move();
        this.render();
    }
}
