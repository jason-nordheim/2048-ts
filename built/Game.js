"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var Grid_1 = require("./Grid");
var Tile_1 = require("./Tile");
var Game = /** @class */ (function () {
    /**
     * Creates a new Game
     *  1. Constructs a new Gameboard with the parameters provided
     * @param x
     * @param y
     * @param defaultValue
     */
    function Game(x, y) {
        if (x === void 0) { x = 4; }
        if (y === void 0) { y = 4; }
        this.Grid = new Grid_1.Grid(x, y);
    }
    /**
     * Generates a random new tile
     */
    Game.prototype.newTile = function () {
        var x = Math.floor(Math.random() * this.Grid.size.x);
        var y = Math.floor(Math.random() * this.Grid.size.y);
        var value = Math.random() < 0.75 ? 2 : 4;
        return new Tile_1.Tile(x, y, value);
    };
    return Game;
}());
exports.Game = Game;
