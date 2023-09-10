class GuessingGame {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.assumption = 0;
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        if (this.right >= this.left) {
            this.assumption = Math.ceil((this.right - this.left) / 2) + this.left;
        }
        return this.assumption;
    }

    lower() {
        this.right = this.assumption;

    }

    greater() {
        this.left = this.assumption;
    }
}

module.exports = GuessingGame;
