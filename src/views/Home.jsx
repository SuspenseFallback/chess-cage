import "../css/views/Home.css";

import Animation from "../components/Animation";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.title = "Home | The Chess Verse";
  }, []);

  return (
    <main>
      <div className="page-1">
        <div className="title-container">
          <h1 className="title">
            Learn and play chess <span className="emp">for free.</span>
          </h1>
          <p className="subtitle">Join the 1,000 other users to start.</p>
          <div className="btn-container">
            <button className="btn">Sign up</button>
            <button className="btn">Log in</button>
          </div>
        </div>
        <div className="board-container">
          <Animation />
        </div>
      </div>
      <div className="page-2">
        <div className="surface-0 text-center">
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
                <i className="pi pi-lock text-4xl text-purple-500"></i>
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
                <i className="pi pi-check-circle text-4xl text-purple-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                Play with friends
              </div>
              <span className="text-700 line-height-3">
                Ornare suspendisse sed nisi lacus sed viverra tellus. Neque
                volutpat ac tincidunt vitae semper.
              </span>
            </div>
          </div>
          <h1 className="left-side">All-in-1 solution</h1>
          <h1 className="emp right-side">to play chess</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
