import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "../styles/LoginPage.css";
function LoginPage() {
  return (
    <>
      <div className="loginpage">
        <form action="" type="submit" className="formcontainer">
          <div className="loginform">
            <img
              alt="Instagram"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
              style={{
                display: "flex",
                width: "50%",
                padding: "20px 10px",
                margin: "10px",
              }}
            />

            <div className="inputfields">
              <TextField
                id="outlined-basic"
                label="phonenumber,username, or email"
                variant="outlined"
                style={{
                  display: "flex",
                  padding: "5px 0px",
                  backgroundColor: "rgba(var(--b3f,250,250,250),1)",
                }}
              />
              <TextField
                id="outlined-basic"
                label="password"
                variant="outlined"
                style={{
                  display: "flex",

                  marginTop: "3px",
                  padding: "5px 0px",
                  backgroundColor: "rgba(var(--b3f,250,250,250),1)",
                }}
              />
            </div>
            <Button
              variant="contained"
              className="loginbutton"
              style={{
                display: "flex",
                backgroundColor: "#b2dffc",
                color: "white",
                fontWeight: "100",
                marginTop: "13px",
              }}
            >
              Log In
            </Button>

            {/* <p style={{ display: "flex", color: "#ab8e8e", fontWeight: "400" }}>
              OR
            </p> */}
            <div className="option">
              <img
                src="fb.png"
                style={{ display: "flex", width: "20px", height: "20px" }}
              ></img>
              <p
                style={{
                  display: "flex",
                  paddingLeft: "10px",
                  color: "#3851a5",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Login With Facebook
              </p>
            </div>
            <p
              style={{
                display: "flex",
                color: "#3851a5",
                fontWeight: "300",
                fontSize: "13px",
              }}
            >
              Forgot Password?
            </p>
          </div>
          <div className="thinking">
            <p>
              Don't have an account?
              <span
                style={{
                  // display: "flex",
                  // flexDirection: "row",
                  color: "#00a2f8",
                  // fontWeight: "100",
                  // fontSize: "10px",
                  // width: "100%",
                }}
              >
                Sign up
              </span>
            </p>
          </div>
          <p>Get the app.</p>
          <di className="pictures">
            <img
              src="apple.jpg"
              style={{ display: "flex", width: "20%" }}
            ></img>
            <img
              src="google.png"
              style={{ display: "flex", width: "25%", marginLeft: "10px" }}
            ></img>
          </di>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
