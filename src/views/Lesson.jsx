import "../css/views/Lessons.css";

import Board from "../components/Board";
import React from "react";

const Lesson = ({ fens, lessons, highlights, title }) => {
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
          highlightedSquares={highlights[index]}
        />
      </div>
      <div className="lesson-box">
        <h3 className="title semi-bold align-center">{title}</h3>
        <p className="text">{lessons[index]}</p>
        <button
          className="btn-block first"
          onClick={previousPage}
          disabled={index === 0}
        >
          Previous
        </button>
        <button
          className="btn-block"
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
