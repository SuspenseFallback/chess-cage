import React from "react";

const PuzzleRunnerBar = ({ wrong_puzzles, correct_puzzles, active_puzzle }) => {
  return (
    <div className="grid">
      <div className="grid-row flex flex-row" style={{ width: "100%" }}>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 0 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(0)
                ? "red"
                : correct_puzzles.includes(0)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 1 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(1)
                ? "red"
                : correct_puzzles.includes(1)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 2 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(2)
                ? "red"
                : correct_puzzles.includes(2)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 3 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(3)
                ? "red"
                : correct_puzzles.includes(3)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 4 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(4)
                ? "red"
                : correct_puzzles.includes(4)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 5 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(5)
                ? "red"
                : correct_puzzles.includes(5)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 6 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(6)
                ? "red"
                : correct_puzzles.includes(6)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 7 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(7)
                ? "red"
                : correct_puzzles.includes(7)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 8 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(8)
                ? "red"
                : correct_puzzles.includes(8)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 9 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(9)
                ? "red"
                : correct_puzzles.includes(9)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 10 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(10)
                ? "red"
                : correct_puzzles.includes(10)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 11 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(11)
                ? "red"
                : correct_puzzles.includes(11)
                ? "green"
                : "",
            }}
          ></i>
        </div>
      </div>
      <div className="grid-row flex flex-row" style={{ width: "100%" }}>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 12 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(12)
                ? "red"
                : correct_puzzles.includes(12)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 13 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(13)
                ? "red"
                : correct_puzzles.includes(13)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 14 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(14)
                ? "red"
                : correct_puzzles.includes(14)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 15 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(15)
                ? "red"
                : correct_puzzles.includes(15)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 16 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(16)
                ? "red"
                : correct_puzzles.includes(16)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 17 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(17)
                ? "red"
                : correct_puzzles.includes(17)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 18 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(18)
                ? "red"
                : correct_puzzles.includes(18)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 19 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(19)
                ? "red"
                : correct_puzzles.includes(19)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 20 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(20)
                ? "red"
                : correct_puzzles.includes(20)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 21 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(21)
                ? "red"
                : correct_puzzles.includes(21)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 22 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(22)
                ? "red"
                : correct_puzzles.includes(22)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 23 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(23)
                ? "red"
                : correct_puzzles.includes(23)
                ? "green"
                : "",
            }}
          ></i>
        </div>
      </div>
      <div className="grid-row flex flex-row" style={{ width: "100%" }}>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 24 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(24)
                ? "red"
                : correct_puzzles.includes(24)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 25 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(25)
                ? "red"
                : correct_puzzles.includes(25)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 26 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(26)
                ? "red"
                : correct_puzzles.includes(26)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 27 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(27)
                ? "red"
                : correct_puzzles.includes(27)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 28 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(28)
                ? "red"
                : correct_puzzles.includes(28)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 29 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(29)
                ? "red"
                : correct_puzzles.includes(29)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 30 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(30)
                ? "red"
                : correct_puzzles.includes(30)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 31 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(31)
                ? "red"
                : correct_puzzles.includes(31)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 32 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(32)
                ? "red"
                : correct_puzzles.includes(32)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 33 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(33)
                ? "red"
                : correct_puzzles.includes(33)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 34 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(34)
                ? "red"
                : correct_puzzles.includes(34)
                ? "green"
                : "",
            }}
          ></i>
        </div>
        <div className="col">
          <i
            className={"pi pi-circle" + (active_puzzle === 35 ? "-fill" : "")}
            style={{
              color: wrong_puzzles.includes(35)
                ? "red"
                : correct_puzzles.includes(-1)
                ? "green"
                : "",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default PuzzleRunnerBar;
