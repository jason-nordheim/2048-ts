"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Board = /** @class */ (function () {
    /**
     * Creates a grid with the x-axis of length x
     * and a y-axis with length y and sets the
     * default value provided
     * @param x
     * @param y
     * @param defaultValue
     */
    function Board(x, y) {
        var _this = this;
        /*
         * determines if the board is full based upon the number of placed tiles
         */
        this.isFull = function () { return Boolean(_this._tiles.length >= ((_this.size.x * _this.size.y) - 1)); };
        /**
         * calculated roperty that returns the a copy of the board
         * with all the existing tiles in place.
         */
        this.board = function () {
            // add each title to the board
            for (var i = 0; i < _this._tiles.length; i++) {
                _this._values[_this._tiles[i].x][_this._tiles[i].y] = _this._tiles[i].value;
            }
            return Object.assign({}, _this._values);
        };
        // create the grid
        this.size = { x: x, y: y };
        this._values = Array.from(Array(x), function () { return new Array(y).fill(-1); });
        // initializes trackers
        this._moves = [];
        this._tiles = [];
    }
    /**
     * Tries to place a tile on the board
     * @param tile
     */
    Board.prototype.place = function (tile) {
        if (this.isOccupied(tile.x, tile.y)) {
            throw new Error("Cannot place tile on an occupied space");
        }
        else {
            this._tiles.push(tile);
            this._moves.push({ move: "placedTile", details: tile });
        }
    };
    /**
     * Determines if the queried position has a value
     * @param x x-axis coordinate
     * @param y y-axis coordinate
     */
    Board.prototype.isOccupied = function (x, y) {
        return this._values[x][y] ? true : false;
    };
    /**
     * iterates through the placed tile, placing them on the board
     * then returns a shallow copy of the board
     */
    Board.prototype.getBoard = function () {
        // add each title to the board
        for (var i = 0; i < this._tiles.length; i++) {
            this._values[this._tiles[i].x][this._tiles[i].y] = this._tiles[i].value;
        }
        return Object.assign({}, this._values);
    };
    return Board;
}());
exports.Board = Board;
