import React from "react";
import { Button } from "primereact/button";
import { TabView, TabPanel } from "primereact/tabview";
import { InputSwitch } from "primereact/inputswitch";
import PuzzleRunnerBar from "./PuzzleRunnerBar";

const PuzzleRunnerPanel = ({
  getNewPuzzle,
  puzzle_end,
  wrong,
  start,
  active_puzzle,
  is_puzzle_wrong,
  correct_puzzles,
  wrong_puzzles,
}) => {
  const [active_index, set_active_index] = React.useState(0);
  const [puzzles_affect_rating, set_puzzles_affect_rating] =
    React.useState(true);

  return (
    <TabView
      activeIndex={active_index}
      onTabChange={(e) => set_active_index(e.index)}
      className="puzzle-box"
    >
      <TabPanel header="RUNNNER">
        <div className="user flex flex-row justify-content-between">
          <div>
            <i
              className="pi pi-box mt-4"
              style={{
                fontSize: "3rem",
              }}
            ></i>
          </div>
          <div className="flex flex-row justify-content-evenly">
            <div className="correct mr-3">
              <p
                style={{
                  fontSize: "2rem",
                  color: "green",
                }}
              >
                0{" "}
                <i
                  className="pi pi-check"
                  style={{
                    fontSize: "2rem",
                  }}
                ></i>{" "}
              </p>
            </div>
            <div className="wrong">
              <p
                style={{
                  fontSize: "2rem",
                  color: "red",
                }}
              >
                0{" "}
                <i
                  className="pi pi-times"
                  style={{
                    fontSize: "2rem",
                  }}
                ></i>{" "}
              </p>
            </div>
          </div>
        </div>
        <br />
        <PuzzleRunnerBar
          correct_puzzles={correct_puzzles}
          wrong_puzzles={wrong_puzzles}
          active_puzzle={active_puzzle}
        />
        <Button
          className="p-button-raised p-button-secondary"
          disabled={!puzzle_end || !wrong}
          style={{ width: "100%", marginTop: "15%" }}
          label={"Analysis"}
        />
        <Button
          className="p-button-raised p-button-secondary"
          disabled={!puzzle_end || !wrong}
          style={{ width: "100%", marginTop: "3%" }}
          label={"Show solution"}
        />
        <Button
          className="p-button-raised p-button-danger"
          disabled={!puzzle_end || !wrong}
          style={{ width: "100%", marginTop: "3%" }}
          label={"Retry"}
        />
        <Button
          className="p-button-raised"
          disabled={start && !puzzle_end}
          style={{ width: "100%", marginTop: "3%" }}
          label={start ? "Next" : "Start"}
          onClick={getNewPuzzle}
        />
      </TabPanel>
    </TabView>
  );
};

export default PuzzleRunnerPanel;
