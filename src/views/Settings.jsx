import React from "react";

const Settings = () => {
  useEffect(() => {
    document.title = "The Chessverse | Settings";
  }, []);

  return (
    <main>
      <div className="sidebar">
        <div className="nav-item">Profile</div>
        <div className="nav-item">Live chess</div>
        <div className="nav-item">Themes</div>
        <div className="nav-item">Board styles</div>
        <div className="nav-item">Piece styles</div>
        <div className="nav-item">Account</div>
        <div className="nav-item">Delete account</div>
      </div>
    </main>
  );
};

export default Settings;
