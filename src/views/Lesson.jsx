import "../css/views/Lessons.css";

import Board from "../components/Board";
import React from "react";

const Lesson = ({ fens, lessons, highlights }) => {
  const [index, set_index] = React.useState(0);

  const nextPage = () => {
    set_index(index + 1);
  };

  const previousPage = () => {
    set_index(index - 1);
  };

  return (
    <>
      <div className="lesson-board-container">
        <Board
          color="w"
          position={fens[index]}
          isInteractive={false}
          highlightSquares={highlights}
        />
      </div>
      <div class="lesson-box">
        <h3 class="title semi-bold align-center">The Pawn</h3>
        <p class="text">{lessons[index]}</p>
        <button
          class="btn-block first"
          onClick={previousPage}
          disabled={index === 0}
        >
          Previous
        </button>
        <button
          class="btn-block"
          onClick={nextPage}
          disabled={index === lessons.length - 1}
        >
          Next
        </button>
        <p className="progress">
          {index + 1}/{lessons.length}
        </p>
      </div>
    </>
  );
};

export default React.memo(Lesson);
