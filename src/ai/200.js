import { isCapture, isCheckmate } from "./helperFunctions.js";

class AI_LEVEL_ONE {
  constructor(game) {
    this.game = game;
  }

  makeMove = () => {
    const moves = game.moves();
    let bestMove = null;

    moves.forEach((move) => {
      if (isCheckmate(move)) {
        bestMove = move;
      } else if (isCapture(move) && bestMove && !isCheckmate(bestMove)) {
        bestMove = move;
      } else {
        bestMove = move;
      }
    });

    return bestMove;
  };
}
