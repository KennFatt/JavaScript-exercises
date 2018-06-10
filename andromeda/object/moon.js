class Moon {
    constructor(image) {
        this.moonImage = loadImage(image, function(image) {
            console.log('Image loaded!');
            image.resize(150, 150);
        }, function() {
            console.log('Could not load image!');
        });

        this.x = 0;
        this.y = 0;

        this.resetDrag();
        this.setMoving(false);
    }

    setMoving(bool) {
        this.moving = bool;
    }

    isMoving() {
        return this.moving;
    }

    resetDrag() {
        this.dragVelocity = random(2, 6);
    }

    move() {
        this.y = this.y + this.dragVelocity;
        this.dragVelocity = this.dragVelocity + 0.005;

        let r = this.moonImage.height / 2;
        if (this.y > height + r) {
            this.setMoving(false);
            this.resetDrag();
        }
    }

    render() {
        image(this.moonImage, this.x, this.y);
    }

    tick() {
        if (!this.isMoving()) {
            return;
        }

        this.move();
        this.render();
    }

    showFrom(x, y) {
        this.x = x;
        this.y = y;
        this.setMoving(true);
    }
}
