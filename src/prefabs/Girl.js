// import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor({ game, x, y, asset }) {
        super(game, x, y, asset)
        // this.animations.add('run_girl', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 43, true)
        // this.play('run_girl', 5, false)
        // this.game.load.atlasJSONHash('girl', '../../assets/sprites/girl.png', '../../assets/sprites/`girl.json')
        this.animations.add('run_girl', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 43, true)
    }

    run() {
        // this.animations.add('run_girl', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 43, true)
        this.play('run_girl', 10, true)
    }

    update() {
        this.x += 3;
        if (this.x > 900) {
            this.x = -100;
        }
    }
}