import * as Chess from "chess.js";

import React, { useEffect, useState } from "react";

import Board from "../components/Board";

const BoardEditor = () => {
  const [game, set_game] = useState(new Chess());
  const [position, set_position] = useState("start");
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
