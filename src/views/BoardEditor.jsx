import { Chess } from "chess.js";

import { useEffect, useState } from "react";

import Board from "../components/Board";

const BoardEditor = () => {
  const [game, set_game] = useState(new Chess());
  const [position, set_position] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
  const [turn, set_turn] = useState("w");

  return (
    <>
      <div className="editor">
        <Board color={turn} position={position} />
      </div>
    </>
  );
};

export default BoardEditor;
