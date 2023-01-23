import * as Chess from "chess.js";

import React, { useEffect } from "react";

import Board from "./Board";

const Animation = () => {
  const [game, set_game] = React.useState(new Chess());
  const [position, set_position] = React.useState("start");
  const [king_moving, set_king_moving] = React.useState(false);

  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["1", "2", "3", "4", "5", "6", "7", "8"];

  function getKingToKing() {
    set_king_moving(true);

    const king_position = game.history()[game.history().length - 1].slice(-2);
    const king_file = files[files.indexOf(king_position.substring(0, 1))];
    const king_rank =
      ranks[
        ranks.indexOf(king_position.substring(1, 2)) -
          (parseInt(king_position.substring(1, 2)) === 8 ? 2 : -2)
      ];

    if (game.moves().includes("K" + king_file + king_rank)) {
      game.move("K" + king_file + king_rank);
      set_position(king_position);
      return setTimeout(makeMove, 500);
    }

    let winning_king = "";

    game.history({ verbose: true }).forEach((item) => {
      if (item.color === game.turn() && item.piece === "k") {
        winning_king = item.to;
      }
    });

    const winning_king_file = winning_king.substring(0, 1);
    const winning_king_rank = winning_king.substring(1, 2);

    let target_file;
    let target_rank;

    if (files.indexOf(winning_king_file) < files.indexOf(king_file)) {
      target_file = files[files.indexOf(winning_king_file) + 1];
    } else if (files.indexOf(winning_king_file) > files.indexOf(king_file)) {
      target_file = files[files.indexOf(winning_king_file) - 1];
    } else {
      target_file = winning_king_file;
    }

    console.log(king_rank);

    if (ranks.indexOf(winning_king_rank) < ranks.indexOf(king_rank)) {
      target_rank = ranks[ranks.indexOf(winning_king_rank) + 1];
    } else if (ranks.indexOf(winning_king_rank) > ranks.indexOf(king_rank)) {
      target_rank = ranks[ranks.indexOf(winning_king_rank) - 1];
    }

    console.log(target_file + target_rank);

    game.move("K" + target_file + target_rank);
    set_position(game.fen());

    setTimeout(makeMove, 500);
  }

  function shouldKingMove(queen_pos, king_pos) {
    if (game.turn() === "w") {
      if (queen_pos === "e7" && king_pos === "g8") {
        return true;
      } else if (queen_pos === "e7" && king_pos === "h8") {
        return true;
      }
    }
  }

  function checkMateWithQueen() {
    let king_position = "";
    let queen_pos = "";

    game.history({ verbose: true }).forEach((item) => {
      if (item.color !== game.turn() && item.piece === "k") {
        king_position = item.to;
      }

      if (item.color === game.turn() && item.piece === "q") {
        queen_pos = item.to;
      }
    });

    const queen_file = files[files.indexOf(king_position.substring(0, 1)) - 2];
    const queen_rank = ranks[ranks.indexOf(king_position.substring(1, 2)) - 1];

    if (shouldKingMove(queen_pos, king_position)) {
      return getKingToKing();
    }

    if (game.moves().includes("Q" + queen_file + queen_rank)) {
      game.move("Q" + queen_file + queen_rank);
      if (!game.in_stalemate()) {
        set_position(game.fen());
        return setTimeout(makeMove, 500);
      } else {
        game.undo();
      }
    }

    set_king_moving(false);

    var possibleMoves = game.moves();
    var randomIdx = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIdx]);
    set_position(game.fen());

    setTimeout(makeMove, 500);
  }

  function canWhiteCheckmate() {
    const fen = game.fen();

    if (
      fen.includes("k") &&
      !fen.includes("q") &&
      !fen.includes("r") &&
      !fen.includes("b") &&
      !fen.includes("n") &&
      !fen.includes("p") &&
      fen.includes("Q")
    ) {
      return true;
    } else {
      return false;
    }
  }

  function canBlackCheckmate() {
    const fen = game.fen();

    if (
      fen.includes("K") &&
      !fen.includes("Q") &&
      !fen.includes("R") &&
      !fen.includes("B") &&
      !fen.includes("N") &&
      !fen.includes("P") &&
      fen.includes("q")
    ) {
      return true;
    } else {
      return false;
    }
  }

  function makeMove() {
    var isCheckmate = false;
    var checkMateMove = "";
    console.log(game.moves());
    game.moves().forEach((move) => {
      if (move.includes("#")) {
        isCheckmate = true;
        return (checkMateMove = move);
      }
    });

    console.log("Can checkmate: ", isCheckmate);

    if (!isCheckmate) {
      var played = false;
      var possibleMoves = game.moves();

      if (king_moving && game.turn() === "b" && canBlackCheckmate()) {
        return getKingToKing();
      } else if (king_moving && game.turn() === "w" && canWhiteCheckmate()) {
        return getKingToKing();
      } else if (game.turn() === "b" && canBlackCheckmate()) {
        return checkMateWithQueen();
      } else if (game.turn() === "w" && canWhiteCheckmate()) {
        return checkMateWithQueen();
      }

      if (game.game_over()) {
        set_game(new Chess());
        set_position("start");
        return setTimeout(makeMove, 2000);
      }

      for (var i = 0; i < possibleMoves.length - 1; i++) {
        if (possibleMoves[i].includes("x")) {
          game.move(possibleMoves[i]);
          set_position(game.fen());
          played = true;
          break;
        } else if (possibleMoves[i].includes("=Q")) {
          game.move(possibleMoves[i]);
          set_position(game.fen());
          played = true;
          break;
        } else if (possibleMoves[i].includes("#")) {
          game.move(possibleMoves[i]);
          set_position(game.fen());
          played = true;
          break;
        }
      }

      var randomIdx = Math.floor(Math.random() * possibleMoves.length);
      if (!played) {
        game.move(possibleMoves[randomIdx]);
        set_position(game.fen());
      }

      setTimeout(makeMove, 500);
    } else {
      game.move(checkMateMove);
      set_position(game.fen());
    }
  }

  useEffect(() => {
    set_position(game.fen());
    setTimeout(makeMove, 500);
  }, []);

  return (
    <Board color="w" isInteractive={false} position={position} game={game} />
  );
};

export default Animation;
