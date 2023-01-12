import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Animation from "./components/Animation";
import BoardEditor from "./views/BoardEditor";
import DrawByRepetition from "./views/lessons/ThePawn";
import Home from "./views/Home";
import LogIn from "./views/LogIn";
import Material from "./views/lessons/Material";
import MutualAgreement from "./views/lessons/MutualAgreement";
import NavBar from "./components/NavBar";
import NotFound from "./views/NotFound.jsx";
import Play from "./views/Play";
import Promotion from "./views/lessons/Promotion";
import PuzzleRunner from "./views/puzzles/PuzzleRunner.jsx";
import PuzzleTrainer from "./views/puzzles/PuzzleTrainer.jsx";
import React from "react";
import Stalemate from "./views/lessons/Stalemate";
import Stats from "./views/Stats";
import TheBishop from "./views/lessons/ThePawn";
import TheKing from "./views/lessons/TheKing";
import TheKnight from "./views/lessons/TheKnight";
import ThePawn from "./views/lessons/ThePawn";
import ThePawnDrills from "./views/drills/Drills";
import TheQueen from "./views/lessons/TheQueen";
import TheRook from "./views/lessons/TheRook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="stats" element={<Stats />} />
          <Route path="login" element={<LogIn />} />
          <Route path="animation" element={<Animation />} />
          <Route path="play">
            <Route index element={<Play />} />
          </Route>
          <Route path="puzzles">
            <Route path="trainer" element={<PuzzleTrainer />} />
            <Route path="runner" element={<PuzzleRunner />} />
          </Route>
          <Route path="lessons">
            <Route path="the-pawn" element={<ThePawn />} />
            <Route path="the-knight" element={<TheKnight />} />
            <Route path="the-bishop" element={<TheBishop />} />
            <Route path="the-rook" element={<TheRook />} />
            <Route path="the-queen" element={<TheQueen />} />
            <Route path="stalemate" element={<Stalemate />} />
            <Route path="material" element={<Material />} />
            <Route path="promotion" element={<Promotion />} />
            <Route path="draw-by-repetition" element={<DrawByRepetition />} />
            <Route path="mutual-agreement" element={<MutualAgreement />} />
            <Route path="the-king" element={<TheKing />} />
          </Route>
          <Route path="drills">
            <Route path="the-pawn" element={<ThePawnDrills />} />
          </Route>
          <Route path="tools">
            <Route path="editor" element={<BoardEditor />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
