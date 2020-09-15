
/**
 * Defines the parameters required to 
 * define a grid 
 */
interface GridSize {
  x: number, 
  y: number 
}


class Game {
  Grid: Grid 
  moves: number 
  constructor(gridSize: GridSize, defaultValue = {}) {
    this.Grid = new Grid(gridSize, defaultValue)
  }

  /**
   * Generates a new tile with a random position 
   */
  newTile() {
    return {
      x: Math.floor(Math.random() * this.Grid.size.x), 
      y: Math.floor(Math.random() * this.Grid.size.y), 
      value: Math.random() < 0.75 ? 2 : 4 
    }
  }

  /**
   * Determines if the queried position has a value 
   * @param x x-axis coordinate
   * @param y y-axis coordinate 
   */
  hasValue(x: number, y: number) {
    return this.Grid.values[x][y] ? true : false
  }

  placeTile

  

}

class Grid {
  size: GridSize
  values:Array<Array<any>>
  moves: number 
  
  /**
   * Constructs a grid of the provided grid size 
   * filling each cell a provided default value 
   * 
   * defaults to a 4x4 grid 
   * @param gridSize 
   * @param defaultValue 
   */
  constructor(gridSize: GridSize={x: 4, y: 4}, defaultValue={}) {
    // create the grid 
    this.size = gridSize
    this.values = Array.from(Array(gridSize.x), () =>
      new Array(gridSize.y).fill({ value: ({} = defaultValue) })
    )
    this.moves = 0 
  }
  
}