import "../css/components/Board.css";

import React, { useEffect, useState } from "react";
import { lightOrDark, squares } from "../helpers/lightOrDark";
import { throw_err, throw_warning } from "../helpers/throw_err";

// import rough from "roughjs/bundled/rough.cjs";
import { Chessboard } from "react-chessboard";

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
    ["##7b58b8", "#7040c2"],
    ["#66508c", "#462d73"],
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
  const [clicked_square, set_clicked_square] = useState("");
  const [is_square_piece, set_is_square_piece] = useState(false);
  const [possible_moves, set_possible_moves] = useState([]);

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
    const index = lightOrDark(square) === "light" ? 0 : 1;
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
    console.log(square);
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

  const possible_move_highlight = (moves) => {
    moves.forEach((move) => {
      document.querySelector(
        '[data-square="' + move.to + '"]'
      ).style.backgroundColor =
        highlightColors[5][lightOrDark(move.to) === "light" ? 0 : 1];
    });
  };

  const onSquareClick = (square) => {
    clearSquares();
    if (isInteractive) {
      if (!game.get(square) && !clicked_square) {
        set_clicked_square(square);
        set_is_square_piece(false);
        document.querySelector(
          '[data-square="' + square + '"]'
        ).style.backgroundColor =
          highlightColors[4][lightOrDark(square) === "light" ? 0 : 1];
      } else if (game.get(square) && !clicked_square) {
        if (color === game.get(square).color) {
          set_clicked_square(square);
          set_is_square_piece(true);
          set_possible_moves(game.moves({ square: square, verbose: true }));
          possible_move_highlight(
            game.moves({ square: square, verbose: true })
          );
          document.querySelector(
            '[data-square="' + square + '"]'
          ).style.backgroundColor =
            highlightColors[4][lightOrDark(square) === "light" ? 0 : 1];
        } else {
          set_clicked_square(false);
          set_is_square_piece(false);
        }
      } else if (clicked_square && !is_square_piece && !game.get(square)) {
        set_clicked_square(square);
        set_is_square_piece(false);
      } else if (clicked_square && !is_square_piece && game.get(square)) {
        if (color === game.get(square).color) {
          set_clicked_square(square);
          set_is_square_piece(true);
          set_possible_moves(game.moves({ square: square, verbose: true }));
          possible_move_highlight(
            game.moves({ square: square, verbose: true })
          );
          document.querySelector(
            '[data-square="' + square + '"]'
          ).style.backgroundColor =
            highlightColors[4][lightOrDark(square) === "light" ? 0 : 1];
        } else {
          set_clicked_square(false);
          set_is_square_piece(false);
        }
      } else if (clicked_square && is_square_piece) {
        console.log("5");
        possible_moves.forEach((move) => {
          console.log(move.to === square);
          if (move.to === square) {
            dropPiece(clicked_square, square);
          }
        });

        set_clicked_square(false);
        set_is_square_piece(false);
      } else {
        console.log("6");
        set_clicked_square(false);
        set_is_square_piece(false);
        return;
      }
    }
  };

  const clearSquares = () => {
    squares.forEach((square) => {
      const color =
        lightOrDark(square) === "light" ? lightSquareColor : darkSquareColor;
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
