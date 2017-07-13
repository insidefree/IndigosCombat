// import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor({ game, x, y, asset }) {
        super(game, x, y, asset)
        this.scale.setTo(.5)
        this.animations.add('run_girl')
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

    flipp() {
        this.scale.setTo(-0.5)
    }

    rotate() {
        this.angle += 45
    }

}