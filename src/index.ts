import { Game } from './resources/Game'

/**
 * Create the Game 
 */
const game = new Game(4,4) 

/**
 * Start the game 
 */
game.start()

/**
 * While the game isn't finished, 
 * place a piece on the board, 
 * await a player making a move, 
 * then slide the tiles on the board 
 * 
 */
while(!game.isFinished()) {

}
