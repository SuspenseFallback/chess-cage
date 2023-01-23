import "../css/views/Home.css";

import React, { useEffect } from "react";

import Animation from "../components/Animation";
import MiniLogIn from "../components/MiniLogIn";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home | The Chess Verse";
  }, []);

  useEffect(() => {
    window.onresize = () => {
      document.querySelector(".board-container").style.top =
        window.innerHeight / 2;
    };
  }, []);

  return (
    <main>
      <div className="page-1">
        <div className="box-left">
          <div className="title-container">
            <h1 className="title bold">
              Learn and play chess <span className="emp">for free.</span>
            </h1>
            <p className="subtitle">Sign up to play your first game.</p>
            <div className="btn-container">
              <button className="btn">Sign up</button>
              <button className="btn">Log in</button>
            </div>
          </div>
        </div>
        <div className="box-right">
          <div className="board-container">
            <Animation />
          </div>
        </div>
      </div>
      <div className="page-2">
        <div className="surface-0 text-center cards">
          <div className="grid">
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-ban text-4xl text-purple-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                Completely free
              </div>
              <span className="text-700 line-height-3">
                All of our products are 100% free and anyone can use them.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-bookmark text-4xl text-purple-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                Tutorials on how to play chess
              </div>
              <span className="text-700 line-height-3">
                We offer hundreds of lessons ranging from the basics of chess to
                advanced tactics.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-users text-4xl text-purple-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                Play with friends
              </div>
              <span className="text-700 line-height-3">
                Play with all your friends and share your games with others!
              </span>
            </div>
          </div>
          <h1 className="left-side">All-in-1 solution</h1>
          <h1 className="emp right-side">to play chess</h1>
        </div>
      </div>
      <div className="page-3"></div>
    </main>
  );
};

export default Home;
