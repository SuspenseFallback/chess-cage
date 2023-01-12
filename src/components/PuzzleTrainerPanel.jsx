import { TabPanel, TabView } from "primereact/tabview";

import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { MultiSelect } from "primereact/multiselect";
import React from "react";
import { Slider } from "primereact/slider";
import { UseAuth } from "../firebase/firebase";

const PuzzleTrainerPanel = ({
  getNewPuzzle,
  set_rating_min_max,
  rating_min_max,
  puzzle_end,
  theme,
  set_theme,
  start,
  retry,
}) => {
  const user = UseAuth();
  const [active_index, set_active_index] = React.useState(0);
  const [puzzles_affect_rating, set_puzzles_affect_rating] =
    React.useState(true);
  const themes = [
    { label: "Opening", value: "opening", category: "phases" },
    { label: "Middlegame", value: "middlegame", category: "phases" },
    { label: "Endgame", value: "endgame", category: "phases" },
    { label: "Pawn endgame", value: "pawnEndgame", category: "phases" },
    { label: "Knight endgame", value: "knightEndgame", category: "phases" },
    { label: "Bishop endgame", value: "bishopEndgame", category: "phases" },
    { label: "Rook endgame", value: "rookEndgame", category: "phases" },
    { label: "Queen endgame", value: "queenEndgame", category: "phases" },
    { label: "Queen and Rook", value: "queenAndRook", category: "phases" },
    { label: "Advanced pawn", value: "advancedPawn", category: "motifs" },
    {
      label: "Attacking f2 or f7",
      value: "attackingF2OrF7",
      category: "motifs",
    },
    {
      label: "Capture the defender",
      value: "captureTheDefender",
      category: "motifs",
    },
    {
      label: "Discovered attack",
      value: "discoveredAttack",
      category: "motifs",
    },
    { label: "Double check", value: "doubleCheck", category: "motifs" },
    { label: "Exposed king", value: "exposedKing", category: "motifs" },
    { label: "Fork", value: "fork", category: "motifs" },
    { label: "Hanging piece", value: "hangingPiece", category: "motifs" },
    { label: "Kingside attack", value: "kingsideAttack", category: "motifs" },
    { label: "Pin", value: "pin", category: "motifs" },
    { label: "Queenside attack", value: "queensideAttack", category: "motifs" },
    { label: "Skewer", value: "skewer", category: "motifs" },
    { label: "Sacrifice", value: "sacrifice", category: "motifs" },
    { label: "Trapped piece", value: "trappedPiece", category: "motifs" },
    { label: "Attraction", value: "attraction", category: "advanced" },
    { label: "Clearance", value: "clearance", category: "advanced" },
    { label: "Defensive move", value: "defensiveMove", category: "advanced" },
    { label: "Deflection", value: "deflection", category: "advanced" },
    { label: "Interference", value: "interference", category: "advanced" },
    { label: "Intermezzo", value: "intermezzo", category: "advanced" },
    { label: "Quiet move", value: "quietMove", category: "advanced" },
    { label: "X-Ray attack", value: "xRayAttack", category: "advanced" },
    { label: "Zugzwang", value: "zugzwang", category: "advanced" },
    { label: "Checkmate", value: "checkmate", category: "mates" },
    { label: "Mate in 1", value: "mateIn1", category: "mates" },
    { label: "Mate in 2", value: "mateIn2", category: "mates" },
    { label: "Mate in 3", value: "mateIn3", category: "mates" },
    { label: "Mate in 4", value: "mateIn4", category: "mates" },
    { label: "Mate in 5 or more", value: "mateIn5", category: "mates" },
    { label: "Anastasia's mate", value: "anastasiaMate", category: "mates" },
    { label: "Arabian mate", value: "arabianMate", category: "mates" },
    { label: "Back rank mate", value: "backRankMate", category: "mates" },
    { label: "Boden's mate", value: "bodenMate", category: "mates" },
    {
      label: "Double bishop mate",
      value: "doubleBishopMate",
      category: "mates",
    },
    { label: "Dovetail mate", value: "dovetailMate", category: "mates" },
    { label: "Hook mate", value: "hookMate", category: "mates" },
    { label: "Smothered mate", value: "smotheredMate", category: "mates" },
    { label: "Castling", value: "castling", category: "specialMoves" },
    { label: "En passant", value: "enPassant", category: "specialMoves" },
    { label: "Promotion", value: "promotion", category: "specialMoves" },
    {
      label: "Underpromotion",
      value: "underpromotion",
      category: "specialMoves",
    },
    { label: "Equality", value: "equality", category: "goal" },
    { label: "Crushing", value: "crushing", category: "goal" },
    { label: "Advantage", value: "advantage", category: "goal" },
    { label: "Short puzzle", value: "shortPuzzle", category: "length" },
    { label: "One-move puzzle", value: "oneMovePuzzle", category: "length" },
    { label: "Long puzzle", value: "longPuzzle", category: "length" },
    { label: "Very long puzzle", value: "veryLongPuzzle", category: "length" },
  ];

  return (
    <TabView
      activeIndex={active_index}
      onTabChange={(e) => set_active_index(e.index)}
      className="puzzle-box"
    >
      <TabPanel header="TRAINER">
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
          <p
            className="username"
            style={{
              float: "left",
              fontSize: "20px",
              fontFamily: "Avenir",
              fontWeight: "bold",
              marginLeft: "2%",
            }}
          >
            {user ? user.username : "Anonymous"}
          </p>

          <p
            style={{
              float: "right",
              fontSize: "16px",
              fontFamily: "Avenir",
              fontWeight: "500",
              marginTop: "5%",
            }}
          >
            {user ? user.trainer : "????"}
          </p>
        </div>
        <br />
        {/* <p
            className="subtitle"
            style={{
              marginTop: "10%",
              display: "block",
            }}
          >
            Database: <span>{database}</span>
          </p>
          <Dropdown
            value={database}
            options={databases}
            onChange={(e) => set_database(e.value)}
            placeholder="Pick a database"
            style={{
              width: "100%",
            }}
          /> */}
        <p className="subtitle" style={{ marginTop: "5%" }}>
          Themes
        </p>
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
        <p
          className="subtitle"
          style={{
            marginTop: "5%",
            display: "block",
          }}
        >
          Rating range
        </p>

        <Slider
          value={rating_min_max}
          onChange={(e) => set_rating_min_max(e.value)}
          max={2500}
          min={800}
          range
        />

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
        <Button
          className="p-button-raised p-button-secondary"
          disabled={!puzzle_end}
          style={{ width: "100%", marginTop: "15%" }}
          label={"Analysis"}
        />
        <Button
          className="p-button-raised p-button-secondary"
          disabled={!puzzle_end}
          style={{ width: "100%", marginTop: "3%" }}
          label={"Show solution"}
        />
        <Button
          className="p-button-raised p-button-danger"
          disabled={!puzzle_end}
          style={{ width: "100%", marginTop: "3%" }}
          label={"Retry"}
          onClick={retry}
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

export default PuzzleTrainerPanel;
