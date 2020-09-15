"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var Grid = /** @class */ (function () {
    /**
     * Creates a grid with the x-axis of length x
     * and a y-axis with length y and sets the
     * default value provided
     * @param x
     * @param y
     * @param defaultValue
     */
    function Grid(x, y) {
        // create the grid
        this.size = { x: x, y: y };
        this._values = Array.from(Array(x), function () { return new Array(y).fill(null); });
        // initializes trackers 
        this._moves = [];
        this._tiles = [];
    }
    /**
     * Tries to place a tile on the board
     * @param tile
     */
    Grid.prototype.placeTile = function (tile) {
        if (this.hasTile(tile.x, tile.y))
            throw new Error("Cannot place tile on an occupied space");
        else {
            this._tiles.push(tile);
            this._moves.push({ move: 'placedTile', details: tile });
        }
    };
    /**
     * Determines if the queried position has a value
     * @param x x-axis coordinate
     * @param y y-axis coordinate
     */
    Grid.prototype.hasTile = function (x, y) {
        return this._values[x][y] ? true : false;
    };
    /**
     * iterates through the placed tile, placing them on the board
     * then returns a shallow copy of the board
     */
    Grid.prototype.getBoard = function () {
        // add each title to the board 
        for (var i = 0; i < this._tiles.length; i++) {
            this._values[this._tiles[i].x][this._tiles[i].y] = Object.assign({}, this._tiles[i].value);
        }
        return Object.assign({}, this._values);
    };
    return Grid;
}());
exports.Grid = Grid;
