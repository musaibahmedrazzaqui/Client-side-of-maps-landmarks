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
        <h3>
          1. Click the begin button <br /> 2. You're redirected to your location{" "}
          <br /> 3. Click the Next Step button <br /> 4. Add your name and
          nearest landmark according to your location and press submit{" "}
        </h3>
        <br />
        <br />
        <h4> We thank you for helping us in our project. </h4>
      </div>
      <div className="button_div">
        <Link to="/map">
          <Button variant="contained">Begin!</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
