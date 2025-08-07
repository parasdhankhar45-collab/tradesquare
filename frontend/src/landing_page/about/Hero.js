import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We are here to be best
          <br />
          we are developing our technology everyday.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            Founded in 2024, TradeSquare was born out of determination and
            resilience. Despite the hurdles, we built a platform that makes
            managing your wallet not just simple—but a piece of cake.
          </p>
          <p>
            💼 Ease of Use: From seamless transactions to intuitive design,
            TradeSquare puts your financial tools at your fingertips.
          </p>
          <p>
            🔒 Security First: Your peace of mind is our priority. We assure
            robust protection for every transaction. Whether you're just
            starting out or scaling your financial journey, TradeSquare is your
            trusted companion.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In additon founder is interted to make a world better place with tech
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
