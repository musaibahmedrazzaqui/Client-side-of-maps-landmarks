import React, { Component } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";
import Axios from "axios";
import { Navigate } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      landmark: "",
      Latitude: "",
      Longitude: "",
      go: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.showLocation = this.showLocation.bind(this);
  }
  login() {
    this.setState({ go: true });
    Axios.post("https://map-landmarks.herokuapp.com/submit", {
      Latitude: this.state.Latitude,
      Longitude: this.state.Longitude,
      name: this.state.username,
      NearestLandmark: this.state.landmark,
    }).then(() => {
      alert("Sucessfully submitted!");
    });
  }
  login_verifier() {
    this.setState({ go_verifier: true });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showLocation);
    }
  }
  showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    this.setState({ Latitude: latitude });
    this.setState({ Longitude: longitude });
  }

  render() {
    if (this.state.go) {
      return <Navigate to="/" />;
    }
    return (
      <div id="back">
        <div id="login">
          {/* <img class="logo_style" src={logo}></img> */}
          <div class="container">
            <div
              id="login-row"
              class="row justify-content-center align-items-center"
            >
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                  <form id="login-form" class="form">
                    <center>
                      {" "}
                      <h2> Enter the details</h2>
                    </center>
                    <hr />
                    <div class="form-group">
                      <label for="username" class="label">
                        Your Name:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        id="username"
                        class="form-control input_txt"
                        placeholder="Enter your name here
                                "
                      />
                    </div>
                    <div class="form-group">
                      <label for="landmark" class="label">
                        Nearest Landmark:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="landmark"
                        id="landmark"
                        class="form-control input_txt"
                        value={this.state.landmark}
                        onChange={this.onChange}
                        placeholder="Enter the nearest landmark"
                      />
                    </div>

                    <div class="form-group btn_section">
                      <div class="v-center">
                        <input
                          type="submit"
                          name="Submit"
                          class="btn btn-md login_btn"
                          value="Submit"
                          onClick={this.login}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
