import "../../css/views/puzzles/PuzzleTrainer.css";

import * as Chess from "chess.js";

import React, { useEffect, useRef, useState } from "react";

import Board from "../../components/Board";
import PuzzleRunnerPanel from "../../components/PuzzleRunnerPanel";
import buzz from "../../assets/sounds/buzz.mp3";
import correct from "../../assets/sounds/correct.mp3";
import { fromStringToArray } from "../../helpers/moveFormat";
import { getNewPuzzle } from "../../helpers/getNewPuzzle";
import piecemove from "../../assets/sounds/piecemove.mp3";
import useSound from "use-sound";

const PuzzleRunner = () => {
  const [color, set_color] = useState("w");
  const [game, set_game] = useState(new Chess());
  const [start, set_start] = useState(false);
  const [puzzle, set_puzzle] = useState(false);
  const [position, set_position] = useState("start");
  const [solution, set_solution] = useState([]);
  const [puzzle_end, set_puzzle_end] = useState(false);
  const [wrong, set_wrong] = useState(false);
  const [active_puzzle, set_active_puzzle] = React.useState(0);
  const [no_of_puzzle, set_no_of_puzzle] = React.useState(0);
  const [correct_puzzles, set_correct_puzzles] = React.useState([]);
  const [wrong_puzzles, set_wrong_puzzles] = React.useState([]);
  const [is_puzzle_wrong, set_is_puzzle_wrong] = React.useState(false);

  const [rating_min_max, set_rating_min_max] = useState("w");
  const [stop_after_puzzle, set_stop_after_puzzle] = useState(true);
  const [theme, set_theme] = React.useState([]);

  const [playPieceMove] = useSound(piecemove);
  const [playBuzz] = useSound(buzz);
  const [playCorrect] = useSound(correct);
  const firstUpdate = useRef(true);

  useEffect(() => {
    document.title = "The Chessverse | Puzzle Runner";
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
    }, 1000);
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
              set_active_puzzle((num) => (num === 30 ? 0 : num + 1));
              set_no_of_puzzle((num) => num + 1);
              set_is_puzzle_wrong(false);
              set_correct_puzzles((arr) => [...arr, active_puzzle]);
              getPuzzle();
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
              set_active_puzzle((num) => (num === 30 ? 0 : num + 1));
              set_no_of_puzzle((num) => num + 1);
              set_wrong_puzzles((arr) => [...arr, active_puzzle]);
              set_is_puzzle_wrong(true);
              getPuzzle();
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    }, 100);
  };

  let onDrop = (sourceSquare, targetSquare) => {
    if (sourceSquare !== solution[0][0] || targetSquare !== solution[0][1]) {
      playBuzz();
      set_wrong(true);
      squareBlinkRed(targetSquare);
      return "snapback";
    }

    let move = null;
    safeGameMutate((game) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: "q", // always promote to a queen for example simplicity
      });
    });

    if (puzzle.moves.length > 2 && solution.length === 1) {
      playCorrect();
      set_puzzle_end(true);
      squareBlinkGreen(targetSquare);
    }

    if (move === null) {
      return "snapback";
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
          isInteractive={start}
          game={game}
        />
      </div>
      <PuzzleRunnerPanel
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
        active_puzzle={active_puzzle}
        set_active_puzzle={set_active_puzzle}
        is_puzzle_wrong={is_puzzle_wrong}
        correct_puzzles={correct_puzzles}
        wrong_puzzles={wrong_puzzles}
      />
    </div>
  );
};

export default PuzzleRunner;
