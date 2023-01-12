import React from "react";
import Board from "../../components/Board";
import "../../css/views/Lessons.css";

const TheKnight = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "8/8/8/8/4N3/8/8/8 w - - 0 1",
    "8/8/8/8/4N3/8/8/8 w - - 0 1",
    "8/8/8/8/4N3/8/8/8 w - - 0 1",
    "8/8/8/4b3/4N3/8/8/8 w - - 0 1",
    "r1bqkb1r/pppp1ppp/2n1pn2/1N6/3PPB2/8/PPP2PPP/R2QKBNR w - - 0 1",
    "start",
  ];
  const lessons = [
    "The knight is the second minor piece, which can be compared to the bishop.",
    "The knight has an odd movement system - It moves in an 'L' shape.",
    "Knights can move to 'L' shapes in 8 directions, though their movements, though they can't move off the board.",
    "Knights have a special ability: They can jump over pieces, so knight attacks can't be blocked.",
    "Knights are very useful for beginners, as their movements are unpredictable and easy to forget in your calculations.",
    "Congratulations! You completed the lesson.",
  ];

  const nextPage = () => {
    set_index(index + 1);
  };

  const previousPage = () => {
    set_index(index - 1);
  };

  return (
    <>
      <Board color="w" position={fens[index]} isInteractive={false} />
      <div class="lesson-box">
        <h3 class="title">The Knight</h3>
        <p class="text">{lessons[index]}</p>
        <button class="practice">Go to exercises</button>
        <button class="prev btn" onClick={previousPage} disabled={index === 0}>
          Previous
        </button>
        <button
          class="next btn"
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

export default React.memo(TheKnight);
