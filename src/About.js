import React from "react";
import "./About.css";

function About() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          marginTop: "30px",
          fontFamily: "Bradley Hand, cursive",
          fontStyle: "italic",
        }}
      >
        About Us
      </h1>
      <div className="responsive-container13-block container13 bottomcontainer13">
        <img
          className="mainImg"
          src="https://cdn0.weddingwire.in/vendor/5923/3_2/960/jpg/42536974-1812885212140608-7921745707759828992-n_15_165923.jpeg"
        />
        <div className="allText bottomText">
          <p className="text-blk headingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar
            ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.
        </p>
          {/* <p className="text-blk subHeadingText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar
            ullamcorper suspendisse ac eget. Pellentesque tempus leo in
            ullamcorper quis vestibulum ligula elementum ut.
          </p> */}
          {/* <p className="text-blk description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
        </p> */}
          {/* <button className="explore">
          Explore
        </button> */}
        </div>
      </div>
    </div>
  );
}

export default About;
