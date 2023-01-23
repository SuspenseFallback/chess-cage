import "../css/views/NotFound.css";

import React, { useEffect } from "react";

import Animation from "../components/Animation";
import { Button } from "primereact/button";

const NotFound = () => {
  useEffect(() => {
    document.title = "The Chessverse | Not found";
  }, []);

  return (
    <main className="not-found-wrapper">
      <h1>Where are we?</h1>
      <div className="button">
        <Button
          label="Go back home"
          className="p-button-primary p-button-outlined p-button-raised"
          onClick={() => window.location.replace("http://localhost:3000/")}
        />
      </div>
      <div className="board-container">
        <Animation />
      </div>
    </main>
  );
};

export default NotFound;
