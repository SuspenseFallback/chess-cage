import { getCurrentMove, isCastle, isCheckmate } from "./helperFunctions";

import { THREE_OPENING_BOOK } from "./openingBook.js";

class AI_LEVEL_THREE {
  constructor(game) {
    this.game = game;
  }

  openingBookMove = () => {
    const currentMove = getCurrentMove(this.game.history());
    if (this.game.turn() === "w") {
      if (THREE_OPENING_BOOK.white[currentMove]) {
        const randomIdx = Math.floor(
          Math.random() * THREE_OPENING_BOOK.white[currentMove].length
        );
        return THREE_OPENING_BOOK.white[currentMove][randomIdx];
      } else {
        return null;
      }
    } else {
      if (THREE_OPENING_BOOK.black[currentMove]) {
        const randomIdx = Math.floor(
          Math.random() * THREE_OPENING_BOOK.black[currentMove].length
        );
        return THREE_OPENING_BOOK.black[currentMove][randomIdx];
      } else {
        return null;
      }
    }
  };

  makeMove = () => {
    let bestMove = null;
    let moveRating = 0;

    const moves = this.game.moves();

    if (this.openingBookMove()) {
      return this.openingBookMove();
    }

    moves.forEach((move) => {
      if (isCheckmate(move)) {
        bestMove = move;
        moveRating = 9999;
      } else if (isCastle(move) && moveRating <= 5000) {
        bestMove = move;
        moveRating = 5000;
      }
    });

    if (!bestMove) {
      const randomIdx = Math.floor(Math.random() * moves.length);
      bestMove = moves[randomIdx];
    }

    return bestMove;
  };
}

export default AI_LEVEL_THREE;
