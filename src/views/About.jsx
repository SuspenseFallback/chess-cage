import React from "react";

const About = () => {
  useEffect(() => {
    document.title = "The Chessverse | About";
  }, []);

  return (
    <div>
      Icons made by{" "}
      <a href="https://www.freepik.com" title="Freepik">
        Freepik
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </div>
  );
};

export default About;
