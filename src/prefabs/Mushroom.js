import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.scale.setTo(.5)
    this.inputEnabled = true
    this.input.pixelPerfectClick = true
    this.events.onInputDown.add(this.showClick)
  }

  update() {
    this.angle += 1
  }

  showClick(sprite, event) {
    console.log('sprite', sprite)
    console.log('event', event)
  }
}
