/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../prefabs/Mushroom'
import Background from '../prefabs/Background'
import Girl from '../prefabs/Girl'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    const bannerText = 'Indigos fight'
    let banner = this.add.text(this.world.centerX, 50, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.background = new Background({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'background'
    })

    this.girl = new Girl({
      game: this.game,
      x: this.world.centerX - 400,
      y: this.world.centerY + 100,
      asset: 'girl'
    })

    this.game.add.existing(this.background)
    this.game.add.existing(this.mushroom)
    this.game.add.existing(this.girl)
    setTimeout(() => this.girl.run(), 2000)
    // this.girl.run()
  }

  render() {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
