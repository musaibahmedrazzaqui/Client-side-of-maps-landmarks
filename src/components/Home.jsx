import React from "react";
import "./styles.css";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <div className="whole_container_home">
      <Navbar />
      <div className="text_container">
        <h1>These are the following steps:</h1>
        <br />

        <div className="button_div">
          <Link to="/map">
            <Button variant="contained">Begin!</Button>
          </Link>
        </div>
        <h3>
          1. Click the begin button <br /> 2. Tap Allow on the prompt of
          permission to use your location - you're redirected to your location{" "}
          <br /> 3. Make sure your location is turned on your device <br /> 4.
          Click the Next Step button <br /> 4. Add your name and nearest
          landmark according to your location and press submit{" "}
        </h3>
        <br />
        <h5> We thank you for helping us in our project. </h5>
      </div>
    </div>
  );
};

export default Home;
