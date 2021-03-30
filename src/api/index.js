import React from 'react'
import {
  verifyLoginPending,
  verifyLoginSuccess,
  verifyLoginFail,
  verifyRegisterFail,
  verifyRegisterPending,
  verifyRegisterSuccess
} from "../redux/action";
import { useDispatch } from "react-redux";
const SERVER = "localhost:3002/";
export const VerifyLoginCred = async (userDetails) => {
  const dispatch = useDispatch();
  dispatch(verifyLoginPending());
  const result = await fetch(SERVER + "api/auth/login", {
      method: 'POST',
      body: JSON.stringify({ user: userDetails })
  });
  if(result.status == 200) {
    dispatch(verifyLoginSuccess(result));
  }else {
    dispatch(verifyLoginFail({error: "User Not Registered"}));
  }
};

export const RegisterUser = async (userDetails) => {
  const dispatch = useDispatch();
  dispatch(verifyRegisterPending());
  const result = await fetch(SERVER + "api/auth/register", {
    method: "POST",
    body: JSON.stringify({ user: userDetails }),
  });
  if (result.status == 200) {
    dispatch(verifyRegisterSuccess(result));
    return result;
  } else {
    dispatch(verifyRegisterFail({error: "User Not Registered"}));
    return "User Not Registered";
  }
};
