import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    // You can set a Sprite to be a "preload" sprite by passing it to this method. 
    // A "preload" sprite will have its width or height crop adjusted based on the percentage of the loader in real-time. 
    // This allows you to easily make loading bars for games. Note that Sprite.visible = true will be set when calling this
    this.load.setPreloadSprite(this.loaderBar)

    this.load.image('mushroom', 'assets/images/mushroom2.png')
    this.load.image('background', 'assets/images/background.jpg')
    // this.load.spritesheet('girl', 'assets/sprites/girl.png', 80, 130, 43)
    this.load.atlasJSONHash('girl', '../../assets/sprites/girl.png', '../../assets/sprites/girl.json');
  }

  create () {
    this.state.start('Game')
  }
}
