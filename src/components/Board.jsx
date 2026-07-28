import "../css/components/Board.css";

import { useEffect, useState } from "react";
import { lightOrDark } from "../helpers/lightOrDark";
import { throw_err, throw_warning } from "../helpers/throw_err";

// import rough from "roughjs/bundled/rough.cjs";
import { Chessboard } from "react-chessboard";
import { squareToNum } from "../helpers/squareToNum";

const Board = ({
  color = throw_err(400, "Color is required"),
  position = throw_warning(
    "Adding a position is advised so as not to cause problems.",
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  ),
  isInteractive = true,
  darkSquareColor = "#9354ff",
  lightSquareColor = "#ab7aff",
  highlightColors = [
    ["rgba(255, 0, 60, 0.6)", "rgba(200, 0, 60, 0.6)"],
    ["rgba(0, 116, 255, 0.6)", "rgba(0, 116, 200, 0.6)"],
    ["rgba(0, 245, 66, 0.6)", "rgba(0, 200, 66, 0.6)"],
    ["rgba(255, 255, 0, 0.6)", "rgba(200, 200, 0, 0.6)"],
    ["rgba(255, 180, 138, 0.6)", "rgba(255, 150, 138, 0.6)"],
  ],
  highlightedSquares,
  onDrop = () => {},
  game,
  highlight = true,
}) => {
  const [keys, set_keys] = useState({
    altKey: false,
    ctrlKey: false,
    shiftKey: false,
  });
  const [piece_square, set_piece_square] = useState("");
  const [squareStyles, set_squareStyles] = useState({});

  useEffect(() => {
    const trackKeys = (e) => {
      set_keys({
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        shiftKey: e.shiftKey,
      });
    };

    window.addEventListener("keydown", trackKeys);
    window.addEventListener("keyup", trackKeys);
    return () => {
      window.removeEventListener("keydown", trackKeys);
      window.removeEventListener("keyup", trackKeys);
    };
  }, []);

  useEffect(() => {
    clearSquares();

    if (highlightedSquares) {
      highlightedSquares.forEach((square) => {
        highlight_square(square);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlightedSquares]);

  const element_highlight = (square, idx) => {
    const index = lightOrDark(squareToNum(square)) === "light" ? 0 : 1;
    set_squareStyles((prev) => ({
      ...prev,
      [square]: { backgroundColor: highlightColors[idx][index] },
    }));
  };

  const highlight_square = (square) => {
    if (highlight) {
      if (keys.altKey && keys.shiftKey) {
        element_highlight(square, 3);
      } else if (keys.shiftKey) {
        element_highlight(square, 2);
      } else if (keys.altKey) {
        element_highlight(square, 1);
      } else {
        element_highlight(square, 0);
      }
    }
  };

  const onSquareClick = ({ square }) => {
    clearSquares();
    if (isInteractive) {
      if (game.get(square) === piece_square) {
        set_piece_square("");
      } else if (game.get(square) && !piece_square) {
        set_piece_square(square);
        set_squareStyles((prev) => ({
          ...prev,
          [square]: {
            backgroundColor:
              highlightColors[4][game.get(square).color === "w" ? 0 : 1],
          },
        }));
      } else if (game.get(square) && piece_square) {
        set_piece_square(square);
      } else if (!game.get(square) && piece_square) {
        set_piece_square("");
        onDrop(piece_square, square);
      } else {
        set_piece_square("");
      }
    }
  };

  const clearSquares = () => {
    set_squareStyles({});
  };

  let dropPiece = ({ sourceSquare, targetSquare }) => {
    if (!game) {
      console.log("no game");
      return false;
    }
    if (game.turn() === color) {
      const result = onDrop(sourceSquare, targetSquare);
      return result !== "snapback" && result !== false;
    } else {
      console.log("not your turn");
      return false;
    }
  };

  const lightSquareStyle = {
    backgroundColor: lightSquareColor,
  };

  const darkSquareStyle = {
    backgroundColor: darkSquareColor,
  };

  return (
    <div className="board">
      <Chessboard
        options={{
          position,
          allowDragging: isInteractive,
          onPieceDrop: dropPiece,
          onSquareRightClick: ({ square }) => highlight_square(square),
          onSquareClick: onSquareClick,
          allowDrawingArrows: false,
          lightSquareStyle,
          darkSquareStyle,
          squareStyles,
          boardOrientation: color === "w" ? "white" : "black",
          showNotation: false,
          showAnimations: false,
        }}
      />
    </div>
  );
};

export default Board;
