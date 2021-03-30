import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  verifyRegisterFail,
  verifyRegisterPending,
  verifyRegisterSuccess,
} from "../../redux/action";

import styles from "./Signup.module.css";

const SERVER = "http://localhost:3002/";
const SignUp = (props) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(user.email)) {
      setError("Provide Valid Email");
      return;
    }
    if (user.email == "" || user.password == "" || user.confirmPassword == "") {
      setError("Provide All details");
      return;
    }
    if (user.password != user.confirmPassword) {
      setError("Password and Confirm Password not matched");
      return;
    }
    dispatch(verifyRegisterPending());
    const result = await fetch(SERVER + "api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user }),
    });
    console.log(result);
    if (result.status == 200) {
      console.log(result.status);
      dispatch(verifyRegisterSuccess(result));
      props.history.push("/login");
    } else {
      dispatch(verifyRegisterFail({ error: "User Not Registered" }));
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.form_container}>
        <div>
          <h2>Sign Up Form</h2>
        </div>
        <div className={styles.form_errors}>{error}</div>
        <div className={styles.form_parent}>
          <form className={styles.form}>
            <div className={styles.input_container}>
              <label>Email</label>
              <input name="email" onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
              <label>Password</label>
              <input name="password" type="password" onChange={handleChange} />
            </div>
            <div className={styles.input_container}>
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_container}>
              <div>
                <div>
                  <input value="submit" type="submit" onClick={handleSubmit} />
                  <span
                    onClick={() => {
                      props.history.push("/login");
                    }}
                  >
                    Existing User! <strong>Login here</strong>
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
