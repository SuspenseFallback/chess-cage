import "../css/views/Lessons.css";

import React, { useState } from "react";

import Card from "../components/Card";
import wbishop from "../assets/images/pieces/wbishop.png";
import wking from "../assets/images/pieces/wking.png";
import wknight from "../assets/images/pieces/wknight.png";
import wpawn from "../assets/images/pieces/pawn.png";
import wqueen from "../assets/images/pieces/wqueen.png";
import wrook from "../assets/images/pieces/wrook.png";

const Lessons = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <>
      <div className="lessons-container">
        <div className="next-lessons">
          <p className="title">Next lessons</p>
          <div className="space-around">
            <Card
              header={"The Pawn"}
              subheader={"Learn about the smallest piece - the pawn."}
              image={wpawn}
              alt="Pawn"
              link="/chess-cage/lessons/the-pawn"
            />
            <Card
              header={"The Knight"}
              subheader={"Learn about the craftiest piece - the knight."}
              image={wknight}
              alt="Knight"
              link="/chess-cage/lessons/the-knight"
            />
          </div>
        </div>
        <div className="select">
          <ul>
            <li
              className={activeItem === 1 ? "active" : ""}
              onClick={() => setActiveItem(1)}
            >
              Beginner
            </li>
            <li
              className={activeItem === 2 ? "active" : ""}
              onClick={() => setActiveItem(2)}
            >
              Intermediate
            </li>
            <li
              className={activeItem === 3 ? "active" : ""}
              onClick={() => setActiveItem(3)}
            >
              Advanced
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="sidebar">
            {activeItem === 1 ? (
              <ul>
                <li>The Pieces</li>
              </ul>
            ) : null}
            {activeItem === 2 ? (
              <ul>
                <li>Coming soon!</li>
              </ul>
            ) : null}
            {activeItem === 3 ? (
              <ul>
                <li>Coming soon!</li>
              </ul>
            ) : null}
          </div>
          <div className="cards">
            {activeItem === 1 ? (
              <div>
                <div className="space-around">
                  <Card
                    header={"The Pawn"}
                    subheader={"Learn about the smallest piece - the pawn."}
                    image={wpawn}
                    alt="Pawn"
                    isMini
                    link="/chess-cage/lessons/the-pawn"
                  />
                  <Card
                    header={"The Knight"}
                    subheader={"Learn about the craftiest piece - the knight."}
                    image={wknight}
                    alt="Knight"
                    isMini
                    link="/chess-cage/lessons/the-knight"
                  />
                </div>
                <div className="space-around">
                  <Card
                    header={"The Bishop"}
                    subheader={"Learn about the knight's rival - the bishop."}
                    image={wbishop}
                    alt="Bishop"
                    isMini
                    link="/chess-cage/lessons/the-bishop"
                  />
                  <Card
                    header={"The Rook"}
                    subheader={"Learn about the first major piece - the rook."}
                    image={wrook}
                    alt="Rook"
                    isMini
                    link="/chess-cage/lessons/the-rook"
                  />
                </div>
                <div className="space-around">
                  <Card
                    header={"The Queen"}
                    subheader={
                      "Learn about the most powerful piece - the queen."
                    }
                    image={wqueen}
                    alt="Queen"
                    isMini
                    link="/chess-cage/lessons/the-queen"
                  />
                  <Card
                    header={"The King"}
                    subheader={
                      "Learn about the most important piece - the king."
                    }
                    image={wking}
                    alt="King"
                    isMini
                    link="/chess-cage/lessons/the-king"
                  />
                </div>
                <p className="coming-soon">More coming soon!</p>
              </div>
            ) : null}
            {activeItem === 2 ? (
              <div>
                <p className="coming-soon">Coming soon!</p>
              </div>
            ) : null}
            {activeItem === 3 ? (
              <div>
                <p className="coming-soon">Coming soon!</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lessons;
