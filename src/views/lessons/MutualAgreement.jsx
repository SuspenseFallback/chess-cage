import React from "react";
import Board from "../../components/Board";
import "../../css/views/Lessons.css";

const MutualAgreement = () => {
  const [index, set_index] = React.useState(0);
  const fens = ["start", "start", "start", "start"];
  const lessons = [
    "Draw by mutual agreement is when the players feel like the game is draw, or when the players don't feel like playing, they agree to a draw.",
    "This also happens a lot in high-level games, as both players don't make many mistakes.",
    "Mutual agreement also happens in online chess, like in this website!",
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
        <h3 class="title">Mutual Agreement</h3>
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

export default React.memo(MutualAgreement);
