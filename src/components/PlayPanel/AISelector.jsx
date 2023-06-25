import React, { useState } from "react";

import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";
import { Divider } from "primereact/divider";
import apple from "../../assets/images/apple.png";
import banana from "../../assets/images/banana.png";
import { confirmPopup } from "primereact/confirmpopup";
import guava from "../../assets/images/guava.png";
import { validate } from "uuid";

const AISelector = ({
  preferred_color,
  set_preferred_color,
  start_game,
  start,
  game,
  active_move,
  game_end,
  first_move,
  last_move,
  prev_move,
  next_move,
  resign,
  takeback,
  toast,
}) => {
  const [active_item, set_active_item] = useState(1);
  const computers = [
    {
      name: "Banana",
      rating: 100,
      img: banana,
      index: 1,
      description:
        "Banana has just started playing chess. However, it only knows the rules! Can you beat it? Hint: It's easy ;)",
    },
    {
      name: "Apple",
      rating: 400,
      img: apple,
      index: 2,
      description:
        "Apple also knows the rules. However, he can spot a checkmate or capture easily! Can you beat this apple? An apple a day keeps the doctor away!",
    },
    {
      name: "Guava",
      rating: 600,
      img: guava,
      index: 3,
      description: "Guava",
    },
  ];

  const renderItem = (item) => {
    return (
      <div
        className={"item" + (active_item === item.index ? " active" : "")}
        onClick={() => set_active_item(item.index)}
      >
        <p className="title">{item.name}</p>
        <p className="subtitle">Rating: {item.rating}</p>
        <img className="img" src={item.img} alt={item.name} />
      </div>
    );
  };

  const resignConfirm = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to resign?",
      icon: "pi pi-exclamation-triangle",
      accept: () => resign(),
      reject: () => {
        return false;
      },
    });
  };

  const takebackConfirm = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to request a takeback?",
      icon: "pi pi-exclamation-triangle",
      accept: () => takeback(),
      reject: () => {
        return false;
      },
    });
  };

  const drawConfirm = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to request a draw?",
      icon: "pi pi-exclamation-triangle",
      accept: () => alert("Takeback rejected"),
      reject: () => {
        return false;
      },
    });
  };

  const share = () => {
    navigator.clipboard.writeText(game.pgn());
    toast.current.show({
      severity: "info",
      summary: "Copied to clipboard",
      detail: "PGN copied to clipboard",
    });
  };

  return (
    <div className="ai-selector">
      {start ? (
        <div className="game-box-content">
          <div className="history flex justify-content-between flex-row">
            <div className="white">
              {game.history().map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <p
                      className={index === active_move - 1 ? "active" : ""}
                      key={index}
                    >
                      {item}
                    </p>
                  );
                }
              })}
            </div>
            <div className="top-seperator"></div>
            <div className="black">
              {game.history().map((item, index) => {
                if (index % 2) {
                  return (
                    <p
                      className={index === active_move - 1 ? "active" : ""}
                      key={index}
                    >
                      {item}
                    </p>
                  );
                }
              })}
            </div>
          </div>
          <div className="arrows flex align-items-center justify-content-center">
            <Button
              className="p-button-text p-button-secondary"
              icon="pi pi-angle-double-left"
              disabled={game.history().length === 0 || active_move === 1}
              onClick={first_move}
            />
            <Button
              className="p-button-text p-button-secondary"
              icon="pi pi-angle-left"
              disabled={game.history().length === 0 || active_move === 1}
              onClick={prev_move}
            />
            <Button
              className="p-button-text p-button-secondary"
              icon="pi pi-angle-right"
              disabled={
                game.history().length === 0 ||
                game.history().length === active_move
              }
              onClick={next_move}
            />
            <Button
              className="p-button-text p-button-secondary"
              icon="pi pi-angle-double-right"
              disabled={
                game.history().length === 0 ||
                game.history().length === active_move
              }
              onClick={last_move}
            />
          </div>
          <div className="options flex flex-wrap">
            <div
              className="players flex justify-content-between"
              style={{ width: "100%" }}
            >
              <div className="you">
                <p>You</p>
                <span>1000</span>
              </div>
              <p>vs</p>
              <div className="opp">
                <p>{computers[active_item - 1].name}</p>
                <span>{computers[active_item - 1].rating}</span>
              </div>
            </div>
            <div className="controls">
              <div
                className="flex flex-wrap justify-content-between"
                style={{ width: "100%" }}
              >
                <Button
                  icon="pi pi-flag"
                  className="p-button-danger"
                  tooltip="Resign"
                  onClick={resignConfirm}
                  disabled={!game_end}
                  tooltipOptions={{ position: "top" }}
                />
                <Button
                  icon="pi pi-undo"
                  className="p-button-warning takeback-offer"
                  tooltip="Takeback offer"
                  disabled={game_end || game.history().length <= 2}
                  onClick={takebackConfirm}
                  tooltipOptions={{ position: "top" }}
                />
                <Button
                  icon="pi pi-question"
                  className="p-button-info draw-offer"
                  onClick={drawConfirm}
                  tooltip="Draw offer"
                  disabled={!start}
                  tooltipOptions={{ position: "top" }}
                />
                <Button
                  icon="pi pi-comments"
                  className="p-button-secondary"
                  tooltip="Not available"
                  disabled
                  tooltipOptions={{ position: "top" }}
                />
              </div>
              <div
                className="flex flex-wrap justify-content-between"
                style={{ width: "100%", marginTop: "5%" }}
              >
                <Button
                  icon="pi pi-shield"
                  className="p-button-danger"
                  tooltipOptions={{ position: "bottom" }}
                  tooltip="Not available"
                  disabled
                />
                <Button
                  icon="pi pi-ban"
                  className="p-button-warning"
                  tooltipOptions={{ position: "bottom" }}
                  tooltip="Not available"
                  disabled
                />
                <Button
                  icon="pi pi-share-alt"
                  className="p-button-info"
                  tooltipOptions={{ position: "bottom" }}
                  tooltip="Share"
                  onClick={share}
                />
                <Button
                  icon="pi pi-user-plus"
                  className="p-button-secondary"
                  tooltipOptions={{ position: "bottom" }}
                  tooltip="Not available"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="banner">
            <p className="title">Select your preferred color: </p>
            <ul className="select">
              <li>
                <div
                  onClick={() => set_preferred_color("w")}
                  className={
                    "circle white" + (preferred_color === "w" ? " active" : "")
                  }
                ></div>
              </li>
              <li>
                <div
                  onClick={() => set_preferred_color("b")}
                  className={
                    "circle black" + (preferred_color === "b" ? " active" : "")
                  }
                ></div>
              </li>
              <li>
                <div
                  onClick={() => set_preferred_color("any")}
                  className={
                    "circle any" + (preferred_color === "any" ? " active" : "")
                  }
                ></div>
              </li>
            </ul>
          </div>
          <Divider />
          <div className="selector">
            <Carousel
              value={computers}
              itemTemplate={renderItem}
              numVisible={2}
              numScroll={2}
              header={<p style={{ fontWeight: "bold" }}>Select an AI: </p>}
            />
            <p className="description">
              {computers[active_item - 1].description}
            </p>
            <div className="btn-block" onClick={() => start_game(active_item)}>
              Play
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISelector;
