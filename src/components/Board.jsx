import "../css/components/Board.css";

import React, { useEffect, useState } from "react";
import { lightOrDark, squares } from "../helpers/lightOrDark";
import { throw_err, throw_warning } from "../helpers/throw_err";

// import rough from "roughjs/bundled/rough.cjs";
import { Chessboard } from "react-chessboard";
import { squareToNum } from "../helpers/squareToNum";

const Board = ({
  color = throw_err(400, "Color is required"),
  position = throw_warning(
    "Adding a position is advised so as not to cause problems.",
    "start"
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

  useEffect(() => {
    let newKeys = { ...keys };
    document.querySelector(".board > div").addEventListener(
      "keydown",
      function (e) {
        for (var key in keys) {
          if (keys.hasOwnProperty(key)) {
            newKeys[key] = e[key];
            set_keys(newKeys);
          }
        }
      },
      []
    );

    document
      .querySelector(".board > div")
      .addEventListener("keyup", function (e) {
        for (var key in keys) {
          if (keys.hasOwnProperty(key)) {
            newKeys[key] = e[key];
            set_keys(newKeys);
          }
        }
      });
  }, [keys]);

  useEffect(() => {
    clearSquares();

    if (highlightedSquares) {
      highlightedSquares.forEach((square) => {
        highlight_square(square);
      });
    }
  }, [highlightedSquares]);

  const element_highlight = (square, idx) => {
    const index = lightOrDark(squareToNum(square)) === "light" ? 0 : 1;
    if (
      document.querySelector('[data-square="' + square + '"]').style
        .backgroundColor === highlightColors[3][index]
    ) {
      document.querySelector(
        '[data-square="' + square + '"]'
      ).style.backgroundColor =
        index === 0 ? lightSquareColor : darkSquareColor;
    }
    document.querySelector(
      '[data-square="' + square + '"]'
    ).style.backgroundColor = highlightColors[idx][index];
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

  const onSquareClick = (square) => {
    clearSquares();
    if (isInteractive) {
      if (game.get(square) == piece_square) {
        set_piece_square("");
      } else if (game.get(square) && !piece_square) {
        set_piece_square(square);
        document.querySelector(
          '[data-square="' + square + '"]'
        ).style.backgroundColor =
          highlightColors[4][game.get(square).color === "w" ? 0 : 1];
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
    squares.forEach((square) => {
      const color =
        lightOrDark(squareToNum(square)) === "light"
          ? lightSquareColor
          : darkSquareColor;
      document.querySelector(
        `[data-square='${square}']`
      ).style.backgroundColor = color;
    });
  };

  let dropPiece = (sourceSquare, targetSquare) => {
    if (!game) {
      console.log("no game");
      return;
    }
    if (game.turn() === color) {
      return onDrop(sourceSquare, targetSquare);
    } else {
      return console.log("not your turn");
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
        position={position}
        arePiecesDraggable={isInteractive}
        onPieceDrop={dropPiece}
        onSquareRightClick={highlight_square}
        onSquareClick={(square) => onSquareClick(square)}
        areArrowsAllowed={false}
        customLightSquareStyle={lightSquareStyle}
        customDarkSquareStyle={darkSquareStyle}
        boardOrientation={color === "w" ? "white" : "black"}
        showBoardNotation={false}
      />
    </div>
  );
};

export default Board;
