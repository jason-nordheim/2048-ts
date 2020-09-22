"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
            return __spreadArrays(_this._values);
        };
        // create the grid
        this.size = { x: x, y: y };
        this._values = this.buildValues();
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
    Board.prototype.buildValues = function () {
        var ary = new Array();
        for (var x = 0; x < this.size.x; x++) {
            var subAry = new Array();
            for (var y = 0; y < this.size.y; y++) {
                subAry.push(-1);
            }
            ary.push(subAry);
        }
        return ary;
    };
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
        return __spreadArrays(this._values);
    };
    return Board;
}());
exports.Board = Board;
