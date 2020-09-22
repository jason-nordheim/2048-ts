import { Tile } from "./Tile";

export class Board {
  private _values: Array<Array<any>>;
  private _moves: Array<any>;
  private _tiles: Array<Tile>;
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
    this._values = this.buildValues()

    // initializes trackers
    this._moves = [];
    this._tiles = [];
  }

  /**
   * Creates the array of values that will represent the board 
   * 
   * e.g. if the board is 4,4, it should start like => 
   * `[
   *    [-1,-1,-1,-1]
   *    [-1,-1,-1,-1]
   *    [-1,-1,-1,-1]
   *    [-1,-1,-1,-1]
   *  ]`
   */
  private buildValues() {
    const ary = new Array() 
    for(let x = 0; x < this.size.x; x++){
      const subAry = new Array<number>()
      for(let y = 0; y < this.size.y; y++){
        subAry.push(-1)
      }
      ary.push(subAry)
    }
    return ary
  }

  /*
   * determines if the board is full based upon the number of placed tiles  
   */
  isFull = () => Boolean(this._tiles.length >= ((this.size.x * this.size.y) - 1))

  /**
   * calculated roperty that returns the a copy of the board 
   * with all the existing tiles in place. 
   */
  board = () => {
    // add each title to the board
    for (let i = 0; i < this._tiles.length; i++) {
      this._values[this._tiles[i].x][this._tiles[i].y] = this._tiles[i].value;
    }
    return [...this._values];
  };



  /**
   * Tries to place a tile on the board
   * @param tile 
   */
  place(tile: Tile):void {
    if (this.isOccupied(tile.x, tile.y)) {
      throw new Error("Cannot place tile on an occupied space");
    } else {
      this._tiles.push(tile);
      this._moves.push({ move: "placedTile", details: tile });
    }
  }

  /**
   * Determines if the queried position has a value
   * @param x x-axis coordinate
   * @param y y-axis coordinate
   */
  isOccupied(x: number, y: number):boolean {
    return this._values[x][y] ? true : false;
  }

  /**
   * iterates through the placed tile, placing them on the board
   * then returns a shallow copy of the board
   */
  getBoard() {
    // add each title to the board
    for (let i = 0; i < this._tiles.length; i++) {
      this._values[this._tiles[i].x][this._tiles[i].y] = this._tiles[i].value;
    }
    return [...this._values]
  }
}
