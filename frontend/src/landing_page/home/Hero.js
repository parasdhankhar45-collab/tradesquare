import React from "react";
function Hero() {
  return (
    <div className="contianer p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/frontpagepp.png"
          alt="Hero Image"
          className="mb-5"
        ></img>
        <h1 className="mt-5">invest to grow</h1>
        <p>
          {" "}
          A platform to invest and keep track of your stocks , derivatives , Mf
          and more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "10%", margin: "0 auto" }}
        >
          Signup now{" "}
        </button>
      </div>
    </div>
  );
}

export default Hero;
