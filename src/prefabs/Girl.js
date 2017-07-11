// import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor({ game, x, y, asset }) {
        super(game, x, y, asset)
    }

    run() {
        this.play('run_girl', 10, true)
    }

    update() {
        this.x += 3;
        if (this.x > 900) {
            this.x = -100;
        }
    }
}