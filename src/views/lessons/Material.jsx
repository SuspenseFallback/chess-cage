import React from "react";
import Board from "../../components/Board";
import "../../css/views/Lessons.css";

const Material = () => {
  const [index, set_index] = React.useState(0);
  const fens = [
    "start",
    "8/8/8/8/8/8/4P3/8 w - - 0 1",
    "8/3ppp2/8/8/8/8/8/4N3 w - - 0 1",
    "4b3/8/8/8/8/8/8/4N3 w - - 0 1",
    "8/2ppppp1/8/8/8/8/8/4R3 w - - 0 1",
    "8/3npp2/8/8/8/8/8/4R3 w - - 0 1",
    "3n1b2/8/8/8/8/8/8/4R3 w - - 0 1",
    "8/pppppppp/4p3/8/8/8/8/4Q3 w - - 0 1",
    "8/3bbn2/8/8/8/8/8/4Q3 w - - 0 1",
    "4r3/5b2/8/8/8/8/8/4Q3 w - - 0 1",
    "4k3/8/8/8/8/8/8/4K3 w - - 0 1",
    "start",
  ];
  const lessons = [
    "Material is simply how much a piece is worth, measured in points.",
    "A pawn, the weakest piece is just 1 point.",
    "The knight is worth 3 points, or 3 pawns.",
    "The knight is also worth as much as a bishop.",
    "The rook is worth 5 points, or 5 pawns.",
    "The rook is also worth a minor piece and 2 pawns.",
    "Rooks are worse than a bishop and a knight, though.",
    "Queens are worth 9 points, or 9 pawns!",
    "Queens are worth the same as 3 minor pieces.",
    "Queens are also worth the same as a rook and a bishop.",
    "Kings, though weak, are worth an infinite number of points, as trapping the king is the goal of chess.",
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
        <h3 class="title">Material</h3>
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

export default React.memo(Material);
