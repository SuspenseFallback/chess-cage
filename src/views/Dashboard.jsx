import "../css/views/Dashboard.css";

import {
  faAngleRight,
  faBolt,
  faBoltLightning,
  faBook,
  faBookBookmark,
  faClock,
  faCloud,
  faCog,
  faComputer,
  faDisplay,
  faGaugeMed,
  faPuzzlePiece,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import {
  getGamesDrawn,
  getGamesLost,
  getGamesWon,
  getWinningPercentage,
} from "../helpers/userHelperFunctions";

import { Avatar } from "primereact/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SpinnerPage from "../components/SpinnerPage";
import { getUserData } from "../supabase/supabase";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeButton, setActiveButton] = useState(1);
  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    getUserData((data, err) => {
      if (err) console.error(err);

      console.log(data);
      setUserData(data.data[0]);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <SpinnerPage />
  ) : (
    <div className="dashboard-container">
      <main className="page-wrapper">
        <div className="profile">
          <Avatar
            className="avatar"
            shape="circle"
            size="xlarge"
            icon="pi pi-user"
          />
          <div className="text-container">
            <p className="data-username">
              {userData.username} <span className="online"></span>
            </p>
            <p className="fullname">
              {userData.full_name ? userData.full_name : "Enter full name here"}{" "}
              <i className="pi pi-pencil edit-icon"></i>
            </p>
            <ul className="rating">
              <li className="rating-item first">
                <FontAwesomeIcon icon={faBolt} /> {userData.bulletrating}
              </li>
              <li className="rating-item">
                <FontAwesomeIcon icon={faRocket} /> {userData.blitzrating}
              </li>
              <li className="rating-item">
                <FontAwesomeIcon icon={faGaugeMed} /> {userData.rapidrating}
              </li>
              <li className="rating-item">
                <FontAwesomeIcon icon={faClock} /> {userData.classicalrating}
              </li>
            </ul>
          </div>
        </div>
        <div className="stats">
          <div className="flex-row">
            <p className="header">Stats</p>
            <div className="button-group">
              <div
                className={"button" + (activeButton === 1 ? " active" : "")}
                onClick={() => setActiveButton(1)}
              >
                Total
              </div>
              <div
                className={"button" + (activeButton === 2 ? " active" : "")}
                onClick={() => setActiveButton(2)}
              >
                Bullet
              </div>
              <div
                className={"button" + (activeButton === 3 ? " active" : "")}
                onClick={() => setActiveButton(3)}
              >
                Blitz
              </div>
              <div
                className={"button" + (activeButton === 4 ? " active" : "")}
                onClick={() => setActiveButton(4)}
              >
                Rapid
              </div>
              <div
                className={"button" + (activeButton === 5 ? " active" : "")}
                onClick={() => setActiveButton(5)}
              >
                Classical
              </div>
            </div>
          </div>
          <div className="flex-row">
            <div className="text-container">
              <p className="subheader">
                <span>{getGamesWon(userData, activeButton)}</span>
                <span className="wins">W</span>
              </p>
              <p className="subheader">
                <span>{getGamesLost(userData, activeButton)}</span>
                <span className="losses">L</span>
              </p>
              <p className="subheader">
                <span>{getGamesDrawn(userData, activeButton)}</span>
                <span className="draws">D</span>
              </p>
            </div>
            <div className="text-container text-container-2">
              <p className="win-percentage align-center">
                <span>{getWinningPercentage(userData, activeButton)}%</span>{" "}
                winning percentage
              </p>
            </div>
          </div>
        </div>
        <div className="friends">
          <p className="header">
            Friends <FontAwesomeIcon icon={faAngleRight} />
          </p>
          <p className="content">
            {userData.friends ? "" : "You have no friends."}
          </p>
        </div>
        <div className="buttons">
          <div className="button">
            <FontAwesomeIcon className="icon" icon={faBoltLightning} />
            <p>Bullet</p>
          </div>
          <div className="button">
            <FontAwesomeIcon className="icon" icon={faRocket} />
            <p>Blitz</p>
          </div>
          <div className="button">
            <FontAwesomeIcon className="icon" icon={faGaugeMed} />
            <p>Rapid</p>
          </div>
          <div className="button">
            <FontAwesomeIcon className="icon" icon={faClock} />
            <p>Classical</p>
          </div>
          <div className="button md">
            <FontAwesomeIcon className="icon" icon={faDisplay} />
            <p>AI</p>
          </div>
          <div className="button md">
            <FontAwesomeIcon className="icon" icon={faPuzzlePiece} />
            <p>Puzzles</p>
          </div>
          <div
            className="button lg"
            onMouseOver={() => setBookmark(true)}
            onMouseOut={() => setBookmark(false)}
          >
            <FontAwesomeIcon
              className="icon"
              icon={bookmark ? faBookBookmark : faBook}
            />
            <p>Lessons</p>
          </div>
          <div className="button lg">
            <FontAwesomeIcon className="icon" icon={faCog} />
            <p>Settings</p>
          </div>
        </div>
        <div className="daily-puzzle">
          <p className="header">Daily puzzle</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
