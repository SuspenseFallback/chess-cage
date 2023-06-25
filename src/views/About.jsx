import React from "react";

const About = () => {
  useEffect(() => {
    document.title = "The Chessverse | About";
  }, []);

  return (
    <>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        <a href="https://www.flaticon.com/free-icons/guava" title="guava icons">
          Guava icons created by Freepik - Flaticon
        </a>
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
      <a href="https://www.flaticon.com/free-icons/guava" title="guava icons">
        Guava icons created by Freepik - Flaticon
      </a>
    </>
  );
};

export default About;
