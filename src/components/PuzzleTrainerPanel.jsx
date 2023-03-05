import { Avatar } from "primereact/avatar";
import { InputSwitch } from "primereact/inputswitch";
import { MultiSelect } from "primereact/multiselect";
import React from "react";
import { UseAuth } from "../firebase/firebase";
import themes from "../helpers/exportThemes.js";

const PuzzleTrainerPanel = ({
  getNewPuzzle,
  puzzle_end,
  theme,
  set_theme,
  start,
  retry,
}) => {
  const user = UseAuth();

  const [puzzles_affect_rating, set_puzzles_affect_rating] =
    React.useState(true);

  return (
    <div className="puzzle-box">
      {/* User and their rating */}
      <div className="user">
        <Avatar
          icon="pi pi-user"
          shape="circle"
          size="xlarge"
          style={{
            float: "left",
            position: "relative",
          }}
        />
        <p className="username">{user ? user.username : "Anonymous"}</p>

        <p className="rating-text">{user ? user.trainer : "????"}</p>
      </div>
      {/* Themes select */}
      <p className="subtitle">Themes</p>
      <MultiSelect
        style={{
          width: "100%",
        }}
        value={theme}
        options={themes}
        onChange={(e) => set_theme(e.value)}
        optionLabel="label"
        placeholder="Theme"
        tooltip="Select a theme"
        maxSelectedLabels={1}
        showSelectAll={false}
        emptyFilterMessage="No themes found."
        filter
      />
      {/* Toggle if puzzles affect rating */}
      <div className="switch-group" style={{ width: "100%", height: "50px" }}>
        <p
          style={{
            float: "left",
            marginTop: "7%",
            marginBottom: "0",
            lineHeight: "49.9%",
          }}
        >
          Puzzles affect your rating
        </p>
        <InputSwitch
          label="stop"
          name="stop-after"
          checked={puzzles_affect_rating}
          onChange={(e) => set_puzzles_affect_rating(e.value)}
          style={{
            float: "right",
            marginTop: "5%",
          }}
        />
      </div>
      {/* The button group */}
      <div className="button-group">
        <button
          className="btn-block btn-secondary"
          disabled={!puzzle_end}
          style={{ width: "100%", marginTop: "3%" }}
        >
          Show solution
        </button>
        <button
          className="btn-block btn-danger"
          disabled={!puzzle_end}
          style={{ marginTop: "3%" }}
          onClick={retry}
        >
          Retry
        </button>
        <button
          className="btn-block"
          disabled={start && !puzzle_end}
          style={{ marginTop: "3%" }}
          onClick={getNewPuzzle}
        >
          {start ? "Next" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default PuzzleTrainerPanel;
