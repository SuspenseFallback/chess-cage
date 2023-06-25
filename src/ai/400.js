import { isCheckmate } from "./helperFunctions";

class AI_LEVEL_TWO {
  constructor(game, color) {
    this.game = game;
    this.color = color;
  }

  calcMaterial() {
    const fen = this.game.fen();
    let calc = 0;

    console.log(fen.split(" "));

    fen
      .split(" ")[0]
      .split("")
      .forEach((piece) => {
        if (piece === "P") {
          calc += 1;
        } else if (piece === "N") {
          calc += 2.5;
        } else if (piece === "B") {
          calc += 3;
        } else if (piece === "R") {
          calc += 5;
        } else if (piece === "Q") {
          calc += 9;
        } else if (piece === "p") {
          calc -= 1;
        } else if (piece === "n") {
          calc -= 2.5;
        } else if (piece === "b") {
          calc -= 3;
        } else if (piece === "r") {
          calc -= 5;
        } else if (piece === "q") {
          calc -= 9;
        }
      });

    return calc;
  }

  makeMove = () => {
    if (this.game.turn() === this.color) {
      let bestMove = null;
      let moveRating = -9999;

      const moves = this.game.moves();

      moves.forEach((move) => {
        if (isCheckmate(move)) {
          bestMove = move;
          moveRating = 9999;
        } else {
          this.game.move(move);
          const material = this.calcMaterial();
          console.log("material", move, material);
          if (material > moveRating) {
            bestMove = move;
            moveRating = material;
          }
          this.game.undo();
        }
      });

      if (!bestMove) {
        const randomIdx = Math.floor(Math.random() * moves.length);
        bestMove = moves[randomIdx];
      }

      console.log(bestMove);

      return bestMove;
    }
  };
}

export default AI_LEVEL_TWO;
