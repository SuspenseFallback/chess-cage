import React, { useEffect, useState } from "react";
import { TabPanel, TabView } from "primereact/tabview";
import {
  convertSecondsToMinutesAndSeconds,
  convertTimeToString,
} from "../helpers/convertTimeToString";

import AISelector from "./PlayPanel/AISelector";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Slider } from "primereact/slider";
import { UseAuth } from "../firebase/firebase";
import { confirmPopup } from "primereact/confirmpopup";
import useQuery from "../hooks/queryParams";

const PlayPanel = ({
  startGame,
  start,
  game_end,
  set_time,
  time,
  custom_increment,
  set_custom_increment,
  mode,
  set_mode,
  send_message,
  send_lobby_message,
  chat,
  lobby_chat,
  game,
  data,
  resign,
  takeback,
  next_game,
  draw_offer,
  active_move,
  first_move,
  last_move,
  prev_move,
  next_move,
  preferred_color,
  set_preferred_color,
  share,
}) => {
  const user = UseAuth();
  const query = useQuery();
  const [draw_offer_count, set_draw_offer_count] = useState(0);
  const [active, set_active] = useState(0);
  const [lobby, set_lobby] = useState("lobby");
  const [msg, set_msg] = useState("");
  const modes = [
    { label: "Bullet", value: "Bullet" },
    { label: "Blitz", value: "Blitz" },
    { label: "Rapid", value: "Rapid" },
    { label: "Classical", value: "Classical" },
  ];

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        last_move();
      } else if (e.key === "ArrowLeft") {
        next_move();
      } else if (e.key === "ArrowRight") {
        prev_move();
      } else if (e.key === "ArrowUp") {
        first_move();
      }
    });
  }, []);

  const onChat = (e) => {
    set_msg(e.target.value);
    console.log(e.target.value);
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
    set_draw_offer_count((c) => c + 1);
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to request a draw?",
      icon: "pi pi-exclamation-triangle",
      accept: () => draw_offer(),
      reject: () => {
        return false;
      },
    });
  };

  const onKeyDown = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      if (lobby === "game") {
        send_message(msg);
      } else {
        send_lobby_message(msg);
      }
      set_msg("");
    }
  };

  return (
    <TabView
      activeIndex={active}
      onTabChange={(e) => set_active(e.index)}
      className="play-box"
    >
      <TabPanel header="NEW GAME" className="new-game-box">
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
                  <p>{user ? user.username : "Anonymous"}</p>
                  <span>{user ? user[mode.toLowerCase()] : "1000"}</span>
                </div>
                <p>vs</p>
                <div className="opp">
                  <p>{data.username ? data.username : "Anonymous"}</p>
                  <span>{data ? data.rating : "1000"}</span>
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
                    disabled={game_end || game.history().length <= 20}
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
                    disabled={
                      game_end ||
                      draw_offer_count >= 3 /* || game.history().length <= 20 */
                    }
                    tooltipOptions={{ position: "top" }}
                  />
                  <Button
                    icon="pi pi-comments"
                    className="p-button-secondary"
                    tooltip="Chat"
                    onClick={() => {
                      set_active(1);
                      set_lobby("game");
                    }}
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
                    tooltip="Block"
                    disabled={!user}
                  />
                  <Button
                    icon="pi pi-ban"
                    className="p-button-warning"
                    tooltipOptions={{ position: "bottom" }}
                    tooltip="Report"
                    disabled={!user}
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
                    tooltip="Friend"
                    disabled={!user}
                  />
                  <Button
                    style={{ marginTop: "5%", width: "100%" }}
                    label="Next game"
                    disabled={!game_end}
                    onClick={next_game}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="new-game-box">
            <p className="subtitle">
              Mode: <span>{mode}</span>
            </p>
            {/* Mode select */}
            <Dropdown
              value={mode}
              options={modes}
              onChange={(e) => set_mode(e.value)}
              placeholder={query.get("time")}
              style={{
                width: "90%",
              }}
            />
            <p className="title">OR</p>
            <p className="subtitle">
              Time: <span>{convertTimeToString(time)}</span>
            </p>
            <Slider
              value={time}
              onChange={(e) => {
                set_time(e.value);
              }}
              min={60}
              max={3600}
              step={5}
            />
            <p
              className="subtitle"
              style={{
                marginTop: "5%",
              }}
            >
              Increment: <span>{custom_increment}s</span>
            </p>
            <Slider
              value={custom_increment}
              onChange={(e) => set_custom_increment(e.value)}
              min={0}
              max={180}
            />
            <p
              className="subtitle"
              style={{
                marginTop: "5%",
              }}
            >
              Color:{" "}
            </p>
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
            <button
              className="btn-block"
              onClick={() => startGame(mode.toLowerCase())}
            >
              Play
            </button>
          </div>
        )}
      </TabPanel>
      <TabPanel header="CHAT">
        <div className="chat">
          <div className="messages">
            <Dropdown
              value={lobby}
              options={[
                { label: "Lobby", value: "lobby" },
                { label: "Game", value: "game" },
              ]}
              onChange={(e) => {
                set_lobby(e.value);
              }}
              placeholder={query.get("time")}
              style={{
                width: "100%",
                position: "absolute",
                left: 0,
                top: "9%",
                borderRadius: "0",
              }}
            />
            <div className="chat-room">
              {lobby === "game"
                ? chat.map((msg, index) => {
                    if (msg.type === "system") {
                      return (
                        <p className="system-announcement" key={index}>
                          {msg.msg}
                        </p>
                      );
                    }
                    return (
                      <p key={index}>
                        <span>{msg.time}</span> {msg.username}: {msg.msg}
                      </p>
                    );
                  })
                : lobby_chat.map((msg, index) => {
                    console.log(lobby_chat);
                    return (
                      <p key={index}>
                        <span>{msg.time}</span> {msg.username}: {msg.msg}
                      </p>
                    );
                  })}
            </div>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Please enter your message here..."
              onChange={(e) => onChat(e)}
              onKeyDown={(e) => onKeyDown(e)}
              value={msg}
            />
            <Button
              icon="pi pi-send"
              style={{
                position: "absolute",
                bottom: "-1.8%",
                right: 0,
                width: "3.5vw",
                height: "3.1vw",
                borderRadius: "0",
              }}
              onClick={() => {
                if (lobby === "game") {
                  send_message(msg);
                } else {
                  send_lobby_message(msg);
                }
                set_msg("");
              }}
              disabled={(lobby === "game" && !start) || !msg || msg.length > 40}
            />
          </div>
        </div>
      </TabPanel>
    </TabView>
  );
};

export default PlayPanel;
