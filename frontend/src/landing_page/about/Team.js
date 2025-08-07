import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">From the Team</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/founderparas.png"
            style={{  width: "50%" }}
          />
          <h4 className="mt-5">Paras Dhankhar</h4>
          <h6>Founder/CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Paras, the founder of TradeSquare, is a Computer Science prodigy currently pursuing his degree at SGT University. With a relentless drive for innovation and a deep-rooted passion for software development, cybersecurity, and digital systems, he’s not just building products—he’s architecting the future </p>
          <p>
            worked with a number of tech for this project and 
            gain a strong foundation of nodejs , expressjs , , html , css , react.mongodb

           
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;