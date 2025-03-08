import React, { useState } from "react";
import "./Login.css";
import loginImage from "../assets/login_infographic.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [actionType, setActionType] = useState("Login");

  const handleUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    confirmPassword(e.target.value);
  };

  const handleActionType = (e) => {
    e.preventDefault();
    actionType === "Login" ? setActionType("Register") : setActionType("Login");
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside handleSubmit form");
    validateForm();

    // try{
    //     const res = await fetch("api-endpoint", {
    //         method: 'POST'
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON,stringify({
    //             username, email, password
    //         }),
    //     })
    // } catch (err){
    //     console.log("Error occured wile validating credentials\n")
    //     setError()
    // }
    // setUsername('')
    // setEmail('')
    // setPassword('')
  };

  const validateForm = () => {
    console.log("inside validate form");

    if (email.trim() === "") {
      setError("Please enter valid e-mail address");
    } else if (!emailRegex.test(email)) {
      setError("Please enter valid e-mail address");
    } else if (username.trim === "") {
      setError("Please enter username");
    } else if (password === "") {
      setError("Please enter password");
    } else if (actionType === "Register" && password !== confirmPassword) {
      setError("password is not matching!!");
    } else {
      setError("");
    }
    console.log(error);
    return;
  };

  return (
    <div className="login-card">
      <div className="login-card-left">
        <img src={loginImage} alt="" />
      </div>
      <div className="login-card-right">
        <div className="login-card-right-text">
          {actionType === "Login" ? (
            <>
              <h2>Sign In</h2>
              <p>Sign in to continue.</p>
            </>
          ) : (
            <>
              <h2>Register</h2>
              <p>and become a member of Xfer.</p>
            </>
          )}
        </div>
        <div className="login-card-right-form">
          <form action="">
            {/*<input value={username} onChange={handleUsername} type="text" placeholder='Username' required/>*/}
            <input
              value={email}
              onChange={handleEmail}
              type="text"
              placeholder="E-mail"
              required
            />

            {actionType === "Login" ? (
              <>
                <input
                  value={password}
                  onChange={handlePassword}
                  type="password"
                  placeholder="Password"
                  required
                />
                <a href="" className="right">
                  forgot password?
                </a>
              </>
            ) : (
              <>
                <input
                  value={password}
                  onChange={handlePassword}
                  type="password"
                  placeholder="Password"
                  required
                />
                <input
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </>
            )}
            <button disabled={!!error} onClick={handleSubmit} type="submit">
              {actionType === "Login" ? "Sign In" : "Register"}
              <i class="uil uil-sign-in-alt"></i>
            </button>
            <p>
              {actionType === "Login" ? "Not a member?" : "Already a member?"}
              <a href="" onClick={handleActionType}>
                {" "}
                {actionType === "Login" ? "Register" : "Login"}
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
