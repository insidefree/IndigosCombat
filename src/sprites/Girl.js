import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor({ game, x, y, asset, count }) {
        super(game, x, y, asset, count)
        // this.anchor.setTo(.5)
    }
}