import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import auth from "../../auth";
import styles from "./Login.module.css";

import {
  verifyLoginPending,
  verifyLoginSuccess,
  verifyLoginFail,
} from "../../redux/action";
const SERVER = "http://localhost:3002/";
const Login = (props) => {
  const [error, setError] = useState("");
  const res = useSelector((state) => state);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(user.email)) {
      setError("Provide Valid Email");
      return;
    }
    if (user.password == "") {
      setError("Please enter password");
      return;
    }

    dispatch(verifyLoginPending());
    const result = await fetch(SERVER + "api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user }),
    });
    if (result.status == 200) {
      dispatch(verifyLoginSuccess(result));
      props.history.push("/dashboard");
    } else {
      dispatch(verifyLoginFail({ error: "User Not Registered" }));
    }
  };
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.form_container}>
        <div>
          <h2>Login Form</h2>
        </div>
        <div className={styles.form_errors}>{error}</div>
        <div className={styles.form_parent}>
          <form className={styles.form}>
            <div className={styles.input_container}>
              <label>Email</label>
              <input name="email" onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
              <label>Email</label>
              <input name="password" type="password" onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
              <input value="submit" type="submit" onClick={handleSubmit} />
              <span onClick={() => {props.history.push('/signup')}}>New User! Sign Up here</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
