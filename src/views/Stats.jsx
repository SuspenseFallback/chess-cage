import "../css/views/Stats.css";

import React, { useEffect } from "react";

const Stats = () => {
  useEffect(() => {
    document.title = "The Chessverse | Stats";
  }, []);

  return (
    <main className="stats-wrapper">
      <div className="progress" id="stats">
        <h1 className="title">Progress</h1>
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">Games</span>
                  <div className="text-900 font-medium text-xl">
                    152{" "}
                    <span className="text-500 font-medium text-base">
                      games played
                    </span>
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-blue-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-bolt text-blue-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">24 new </span>
              <span className="text-500">since last visit</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Puzzles
                  </span>
                  <div className="text-900 font-medium text-xl">
                    257{" "}
                    <span className="text-500 font-medium text-base">
                      puzzles completed
                    </span>
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-orange-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-search text-orange-500 text-xl"></i>
                </div>
              </div>
              <span className="text-green-500 font-medium">10 </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Lessons
                  </span>
                  <div className="text-900 font-medium text-xl">
                    3{" "}
                    <span className="text-500 font-medium text-base">
                      lessons completed
                    </span>
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-book text-cyan-500 text-xl"></i>
                </div>
              </div>
              <span className="text-pink-500 font-medium">0 </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
          <div className="col-12 md:col-6 lg:col-3">
            <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
              <div className="flex justify-content-between mb-3">
                <div>
                  <span className="block text-500 font-medium mb-3">
                    Drills
                  </span>
                  <div className="text-900 font-medium text-xl">
                    12{" "}
                    <span className="text-500 font-medium text-base">
                      drills done
                    </span>
                  </div>
                </div>
                <div
                  className="flex align-items-center justify-content-center bg-purple-100 border-round"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                >
                  <i className="pi pi-desktop text-purple-500 text-xl"></i>
                </div>
              </div>
              <span className="text-pink-500 font-medium">0 </span>
              <span className="text-500">since last week</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stats;
