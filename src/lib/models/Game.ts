import { Board } from './Board'
import { Tile } from './Tile'
import { GameStatus } from '../enums'


export class Game {
  private score: number = 0 
  private board: Board 
  status: GameStatus = GameStatus.New 

  /** 
   * Creates a new Game
   * @param x 
   * @param y 
   * @param defaultValue 
   */
  constructor(x=4,y=4) {
    this.board = new Board(x, y) 
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
    const x = Math.floor(Math.random() * this.board.size.x);
    const y = Math.floor(Math.random() * this.board.size.y);
    const value = Math.random() < 0.75 ? 2 : 4;

    /* if the place on the board is occupied, try again */
    if (this.board.isOccupied(x, y)) {
      return this.placeNew();
    }

    /* otherwise, place the new tile on the board */
    return this.board.placeTile(new Tile(x, y, value));
  }

  /**
   * Places a new piece on the board and requests user input 
   */
  start(){
    this.status = GameStatus.InProgress
    this.placeNew()
    // while(this.status === GameStatus.InProgress){
    //   /* Draw the board */
    //   this.draw() 
    //   /* Request player make a move and apply to the board */
    //   const move = this.getMove() 
    //   this.board.slide(move) 
    // }
  }

  /**
   * requests a move from the player 
   */
  move() {
    
  }

  /**
   * Displays the board 
   */
  draw(){
    console.table(this.board.getBoard())
  }
  
  /**
   * returns the score 
   */
  getScore(){
    return this.score
  }
}


