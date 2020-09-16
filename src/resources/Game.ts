import { Grid } from './Grid'
import { Tile } from './Tile'
import { GameStatus } from './enums'

export class Game {
  Board: Grid 
  status: GameStatus 

  /**
   * Creates a new Game
   *  1. Constructs a new Gameboard with the parameters provided 
   * @param x 
   * @param y 
   * @param defaultValue 
   */
  constructor(x=4,y=4) {
    this.Board = new Grid(x, y)
    this.status = GameStatus.New
  }

  /**
   * Generates a random new tile until the coordinates 
   * match the baord 
   */
  private placeNew() {
    /* validate game status */
    if (this.status === GameStatus.Complete) {
      throw new Error("Cannot place piece on completed board");
    } else if (this.status === GameStatus.New) {
      throw new Error("Cannot place piece on unstarted game");
    }

    /* create a random new piece */
    const x = Math.floor(Math.random() * this.Board.size.x);
    const y = Math.floor(Math.random() * this.Board.size.y);
    const value = Math.random() < 0.75 ? 2 : 4;

    /* if the place on the board is occupied, try again */
    if (this.Board.isOccupied(x, y)) {
      return this.placeNew();
    }

    /* otherwise, place the new tile on the board */
    return this.Board.placeTile(new Tile(x, y, value));
  }

  /**
   * Places a new piece on the board and requests user input 
   */
  private start(){
    this.status = GameStatus.InProgress
    this.placeNew()
  }

  draw(){
    console.table(this.Board.getBoard())
  }
  
}


