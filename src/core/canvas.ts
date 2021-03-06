import CONFIG = require('../config.json');

export class Canvas {
  private _context: CanvasRenderingContext2D;
  private _canvas: HTMLCanvasElement;
  private static _instance: Canvas;

  public static get Instance(): Canvas {
    return this._instance;
  }

  public static get Context(): CanvasRenderingContext2D {
    return this._instance._context;
  }

  private constructor(canvas: HTMLCanvasElement) {
    this._context = canvas.getContext('2d');
    this._canvas = canvas;
    this._setupCanvas();
  }

  public static setInstance(canvas: HTMLCanvasElement): Canvas {
    this._instance = new Canvas(canvas);
    return this._instance;
  }

  public reload(): void {
    this._context.fillStyle = CONFIG.COLORS.BACKGROUND_COLOR;
    this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
    this._context.fill();
  }

  private _setupCanvas(): void {
    this._canvas.height = window.innerHeight;
    this._canvas.width = window.innerWidth;

    // UNCOMMENT TO SET ORIGIN TO LOWER-LEFT CORNER
    // this._context.translate(0, this._canvas.height);
    // this._context.scale(1, -1);
  }
}
