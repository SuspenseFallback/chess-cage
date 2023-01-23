import "../../../css/views/Home.css";

import {
  faBullseye,
  faPuzzlePiece,
  faTrain,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeFR = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Home | The Chess Verse";
  }, []);

  const bullet = () => {
    navigate("/play?time=bullet", { replace: true });
  };

  const blitz = () => {
    navigate("/play?time=blitz", { replace: true });
  };

  const rapid = () => {
    navigate("/play?time=rapid", { replace: true });
  };

  const classical = () => {
    navigate("/play?time=classical", { replace: true });
  };

  return (
    <main>
      <div className="newgame">
        <div className="bullet" onClick={bullet}>
          <p className="title">Balle</p>
          <i className="pi pi-bolt icon"></i>
          <p className="caption">Cliquez pour jouer</p>
        </div>
        <div className="blitz" onClick={blitz}>
          <p className="title">Blitz</p>
          <i className="pi pi-forward icon"></i>
          <p className="caption">Cliquez pour jouer</p>
        </div>
        <div className="rapid" onClick={rapid}>
          <p className="title">Rapide</p>
          <FontAwesomeIcon className="icon" icon={faTrain} />
          <p className="caption">Cliquez pour jouer</p>
        </div>
        <div className="classical" onClick={classical}>
          <p className="title">Classique</p>
          <FontAwesomeIcon className="icon" icon={faWalking} />
          <p className="caption">Cliquez pour jouer</p>
        </div>
      </div>
      <div className="prevgame">
        <p className="header">Jeu précédent</p>
        <section className="you">
          <p className="title">Toi</p>
          <p className="rating">Évaluation: 1000</p>
          <p className="acc">Précision: 100%</p>
        </section>
        <section className="opp">
          <p className="title">Adversaire</p>
          <p className="rating">Rating: 1000</p>
          <p className="acc">Accuracy: 100%</p>
        </section>
        <p className="result">1/2 - 1/2</p>
      </div>
      <div className="puzzles">
        <FontAwesomeIcon className="icon" icon={faPuzzlePiece} />
        <p className="title">Puzzles</p>
        <p className="rating">Puzzles et tactique des échecs</p>
      </div>
      <div className="drills">
        <FontAwesomeIcon className="icon" icon={faBullseye} />
        <p className="title">Pratique</p>
      </div>
      <div className="analyze">
        <i className="pi pi-search icon"></i>
        <p className="title">Analyse</p>
      </div>
      <div className="lesson">
        <i className="pi pi-book icon"></i>
        <p className="title">
          Prochaine leçon: <br /> <span>Le pion</span>
        </p>
      </div>
    </main>
  );
};

export default HomeFR;
