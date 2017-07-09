/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Background from '../sprites/Background'
import Girl from '../sprites/Girl'

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
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.background = new Background({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'background'
    })

    this.girl = new Girl({
      game: this,
      x: this.world.centerX + 100,
      y: this.world.centerY + 100,
      asset: 'girl',
      count: 43
    })
    //  var girl
    this.game.add.existing(this.background)
    this.game.add.existing(this.mushroom)
    this.game.add.existing(this.girl)

    // girl = this.game.add.sprite(100, 100, 'girl', 43)
    var anim = this.girl.animations.add('walk');

    

    anim.play(10, true);
    // this.game.add.existing(this.girl.animations.add('animate', [0,1,2,3,4,5,6]))
  }

  render() {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }
}
