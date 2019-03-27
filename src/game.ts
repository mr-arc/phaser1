/** Width of the game canvas in pixels. */
const PIXEL_WIDTH = 800;
/** Height of the game canvas in pixels. */
const PIXEL_HEIGHT = 600;
/** ID of the HTML element containing the game. */
const GAME_CONTENT_ELEMENT_ID = 'content';

/** Key in the asset database of our ludus image. */
const LUDUS_IMAGE = 'ludus';

/**
 * Entry point of the game.
 */
export class Game {
  readonly game: Phaser.Game;

  private sprite: Phaser.Sprite;

  /**
   * Call this to make the game go.
   * @returns {Game}
   */
  static run(): Game {
    return new Game();
  }

  private constructor() {
    // Bootstraps the game. Do further initialization in event handlers.
    this.game =
        new Phaser.Game(PIXEL_WIDTH, PIXEL_HEIGHT, Phaser.AUTO, GAME_CONTENT_ELEMENT_ID,
            {
              // Bind some event handlers to get the game going.
              preload: this.preload,
              create: this.create,
              update: this.update,
              render: this.render,
            });
  }

  private preload() {
    // Dare to preload an image of a Ludus.
    this.game.load.image(LUDUS_IMAGE, 'assets/ludus.jpg');
  }

  private create() {
    // Add our ludus sprite to the game.
    this.sprite = this.game.add.sprite(10, 10, LUDUS_IMAGE);
  }

  private update() {
    // Move the ludus S L O W W W L Y across the screen.
    this.sprite.position.add(0.1, 0);
  }

  private render() {
    // TODO: Dare to add rendering code.
  }
}