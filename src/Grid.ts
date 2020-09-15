import { Tile } from "./Tile";

export class Grid {
  private _values: Array<Array<any>>
  private _moves: Array<any>
  private _tiles: Array<Tile>
  size: { x: number; y: number };

  /**
   * Creates a grid with the x-axis of length x
   * and a y-axis with length y and sets the
   * default value provided
   * @param x
   * @param y
   * @param defaultValue
   */
  constructor(x: number, y: number) {
    // create the grid
    this.size = { x, y };
    this._values = Array.from(Array(x), () => new Array(y).fill(null))

    // initializes trackers 
    this._moves = [];
    this._tiles = [];
  }

  /**
   * Tries to place a tile on the board
   * @param tile
   */
  placeTile(tile: Tile) {
    if (this.hasTile(tile.x, tile.y)) throw new Error("Cannot place tile on an occupied space");
    else {
      this._tiles.push(tile);
      this._moves.push({ move: 'placedTile', details: tile})
    }
  }

  /**
   * Determines if the queried position has a value
   * @param x x-axis coordinate
   * @param y y-axis coordinate
   */
  hasTile(x: number, y: number) {
    return this._values[x][y] ? true : false;
  }

  /**
   * iterates through the placed tile, placing them on the board
   * then returns a shallow copy of the board 
   */
  getBoard(){
    // add each title to the board 
    for(let i = 0; i < this._tiles.length; i++){
      this._values[this._tiles[i].x][this._tiles[i].y] = Object.assign({}, this._tiles[i].value)
    }
    return Object.assign({}, this._values)
  }

}
