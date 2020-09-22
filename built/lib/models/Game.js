"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Board_1 = require("./Board");
var Tile_1 = require("./Tile");
var enums_1 = require("../enums");
var Game = /** @class */ (function () {
    /**
     * Creates a new Game
     * @param x
     * @param y
     * @param defaultValue
     */
    function Game(x, y) {
        var _this = this;
        if (x === void 0) { x = 4; }
        if (y === void 0) { y = 4; }
        this.score = 0;
        this.status = enums_1.GameStatus.New;
        /**
         * Generates a random new tile until the coordinates
         * match the baord
         */
        this.placeNew = function () {
            /* validate game status */
            if (_this.status === enums_1.GameStatus.Complete) {
                throw new Error("Cannot place piece on completed board");
            }
            else if (_this.status === enums_1.GameStatus.New) {
                throw new Error("Cannot place piece on unstarted game");
            }
            /* create a random new piece */
            var x = Math.floor(Math.random() * _this.board.size.x);
            var y = Math.floor(Math.random() * _this.board.size.y);
            var value = Math.random() < 0.75 ? 2 : 4;
            /* if the place on the board is occupied, try again */
            if (_this.board.isOccupied(x, y)) {
                return _this.placeNew();
            }
            /* otherwise, place the new tile on the board */
            return _this.board.place(new Tile_1.Tile(x, y, value));
        };
        /**
         * Places a new piece on the board and requests user input
         */
        this.start = function () {
            _this.status = enums_1.GameStatus.InProgress;
            _this.placeNew();
            // while(this.status === GameStatus.InProgress){
            //   /* Draw the board */
            //   this.draw() 
            //   /* Request player make a move and apply to the board */
            //   const move = this.getMove() 
            //   this.board.slide(move) 
            // }
        };
        /**
         * requests a move from the player
         */
        this.move = function () { return new Error('Not implemented'); };
        /**
         * Displays the board
         */
        this.draw = function () { return console.table(_this.board.getBoard()); };
        /**
         * returns the score
         */
        this.getScore = function () { return _this.score; };
        this.board = new Board_1.Board(x, y);
    }
    return Game;
}());
exports.Game = Game;
