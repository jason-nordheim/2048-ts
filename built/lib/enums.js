"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = exports.GameStatus = void 0;
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["New"] = 0] = "New";
    GameStatus[GameStatus["InProgress"] = 1] = "InProgress";
    GameStatus[GameStatus["Complete"] = 2] = "Complete";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
var Move;
(function (Move) {
    Move["Up"] = "Up";
    Move["Down"] = "Down";
    Move["Left"] = "Left";
    Move["Right"] = "Right";
})(Move = exports.Move || (exports.Move = {}));
