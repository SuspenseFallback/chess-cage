import "../css/views/puzzles/PuzzleTrainer.css";

import * as Chess from "chess.js";

import React, { useEffect, useRef, useState } from "react";

import Board from "../components/Board";
import PuzzleTrainerPanel from "../components/PuzzleTrainerPanel";
import buzz from "../assets/sounds/buzz.mp3";
import correct from "../assets/sounds/correct.mp3";
import { fromStringToArray } from "../helpers/moveFormat";
import { getNewPuzzle } from "../helpers/getNewPuzzle";
import piecemove from "../assets/sounds/piecemove.mp3";
import useSound from "use-sound";

const PuzzleTrainer = () => {
  const [color, set_color] = useState("w");
  const [game, set_game] = useState(new Chess());
  const [start, set_start] = useState(false);
  const [puzzle, set_puzzle] = useState(false);
  const [position, set_position] = useState("start");
  const [solution, set_solution] = useState([]);
  const [puzzle_end, set_puzzle_end] = useState(false);
  const [wrong, set_wrong] = useState(false);
  const [wrong_once, set_wrong_once] = useState(false);

  const [rating_min_max, set_rating_min_max] = useState("w");
  const [stop_after_puzzle, set_stop_after_puzzle] = useState(true);
  const [theme, set_theme] = React.useState([]);

  const [playPieceMove] = useSound(piecemove);
  const [playBuzz] = useSound(buzz);
  const [playCorrect] = useSound(correct);
  const firstUpdate = useRef(true);

  useEffect(() => {
    document.title = "The Chessverse | Train with puzzles";
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (game.turn() === color) {
      return;
    }
    setTimeout(() => {
      onDrop(solution[0][0], solution[0][1]);
    }, 2000);
  }, [solution]);

  function safeGameMutate(modify) {
    set_game((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  const squareBlinkGreen = (targetSquare) => {
    document.querySelector(
      '[data-square="' + targetSquare + '"]'
    ).style.backgroundColor =
      game.square_color(targetSquare) === "light"
        ? "lightgreen"
        : "springgreen";
    setTimeout(() => {
      document.querySelector(
        '[data-square="' + targetSquare + '"]'
      ).style.backgroundColor =
        game.square_color(targetSquare) === "light"
          ? "rgb(240, 217, 181)"
          : "rgb(181, 136, 99)";
      setTimeout(() => {
        document.querySelector(
          '[data-square="' + targetSquare + '"]'
        ).style.backgroundColor =
          game.square_color(targetSquare) === "light"
            ? "lightgreen"
            : "springgreen";
        setTimeout(() => {
          document.querySelector(
            '[data-square="' + targetSquare + '"]'
          ).style.backgroundColor =
            game.square_color(targetSquare) === "light"
              ? "rgb(240, 217, 181)"
              : "rgb(181, 136, 99)";
          setTimeout(() => {
            document.querySelector(
              '[data-square="' + targetSquare + '"]'
            ).style.backgroundColor =
              game.square_color(targetSquare) === "light"
                ? "lightgreen"
                : "springgreen";
            setTimeout(() => {
              document.querySelector(
                '[data-square="' + targetSquare + '"]'
              ).style.backgroundColor =
                game.square_color(targetSquare) === "light"
                  ? "rgb(240, 217, 181)"
                  : "rgb(181, 136, 99)";
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  };

  const squareBlinkRed = (targetSquare) => {
    document.querySelector(
      '[data-square="' + targetSquare + '"]'
    ).style.backgroundColor =
      game.square_color(targetSquare) === "light" ? "salmon" : "red";
    setTimeout(() => {
      document.querySelector(
        '[data-square="' + targetSquare + '"]'
      ).style.backgroundColor =
        game.square_color(targetSquare) === "light"
          ? "rgb(240, 217, 181)"
          : "rgb(181, 136, 99)";
      setTimeout(() => {
        document.querySelector(
          '[data-square="' + targetSquare + '"]'
        ).style.backgroundColor =
          game.square_color(targetSquare) === "light" ? "salmon" : "red";
        setTimeout(() => {
          document.querySelector(
            '[data-square="' + targetSquare + '"]'
          ).style.backgroundColor =
            game.square_color(targetSquare) === "light"
              ? "rgb(240, 217, 181)"
              : "rgb(181, 136, 99)";
          setTimeout(() => {
            document.querySelector(
              '[data-square="' + targetSquare + '"]'
            ).style.backgroundColor =
              game.square_color(targetSquare) === "light" ? "salmon" : "red";
            setTimeout(() => {
              document.querySelector(
                '[data-square="' + targetSquare + '"]'
              ).style.backgroundColor =
                game.square_color(targetSquare) === "light"
                  ? "rgb(240, 217, 181)"
                  : "rgb(181, 136, 99)";
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  };

  let onDrop = (sourceSquare, targetSquare) => {
    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // always promote to a queen for example simplicity
      });
    });
    if (move === null) {
      console.log("Illegal move");
      return "snapback";
    }
    if (sourceSquare !== solution[0][0] || targetSquare !== solution[0][1]) {
      playBuzz();
      if (!wrong_once) {
        set_wrong_once(true);
      }
      set_puzzle_end(true);
      set_wrong(true);
      squareBlinkRed(targetSquare);
      return "snapback";
    }
    if (puzzle.moves.length > 2 && solution.length === 1) {
      playCorrect();
      set_puzzle_end(true);
      squareBlinkGreen(targetSquare);
    }

    set_position(game.fen());
    set_solution((moves) => {
      return moves.slice(1);
    });
    playPieceMove();
  };

  const getPuzzle = () => {
    const puzzle = getNewPuzzle();
    set_puzzle(puzzle);
    const formattedMoves = [];
    puzzle.moves.split(" ").forEach((move) => {
      formattedMoves.push(fromStringToArray(move));
    });
    set_solution(formattedMoves);
    console.log(puzzle.moves);
    set_start(true);
    set_puzzle_end(false);
    set_position(puzzle.fen);
    game.load(puzzle.fen);
    set_color(puzzle.fen.split(" ")[1] === "w" ? "b" : "w");
  };

  const retry = () => {
    set_wrong(false);
    set_puzzle_end(false);
    const formattedMoves = [];
    puzzle.moves.split(" ").forEach((move) => {
      formattedMoves.push(fromStringToArray(move));
    });
    set_solution(formattedMoves);
    set_start(true);
    set_puzzle_end(false);
    set_position(puzzle.fen);
    game.load(puzzle.fen);
    set_color(puzzle.fen.split(" ")[1] === "w" ? "b" : "w");
  };

  return (
    <div>
      <div className="puzzle-wrapper">
        <Board
          color={color}
          position={position}
          onDrop={onDrop}
          isInteractive={start && !wrong}
          game={game}
        />
      </div>
      <PuzzleTrainerPanel
        getNewPuzzle={getPuzzle}
        rating_min_max={rating_min_max}
        set_rating_min_max={set_rating_min_max}
        stop_after_puzzle={stop_after_puzzle}
        set_stop_after_puzzle={set_stop_after_puzzle}
        puzzle_end={puzzle_end}
        theme={theme}
        set_theme={set_theme}
        wrong={wrong}
        start={start}
        retry={retry}
      />
    </div>
  );
};

export default PuzzleTrainer;
