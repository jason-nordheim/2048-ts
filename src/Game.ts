import { Grid } from './Grid'
import { Tile } from './Tile'

export class Game {
  Grid: Grid 
  moves: number 

  /**
   * Creates a new Game
   *  1. Constructs a new Gameboard with the parameters provided 
   * @param x 
   * @param y 
   * @param defaultValue 
   */
  constructor(x=4,y=4) {
    this.Grid = new Grid(x, y)
  }

  /**
   * Generates a random new tile 
   */
  newTile() {
    const x = Math.floor(Math.random() * this.Grid.size.x) 
    const y = Math.floor(Math.random() * this.Grid.size.y) 
    const value = Math.random() < 0.75 ? 2 : 4
    return new Tile(x, y, value)
  }



  
}

