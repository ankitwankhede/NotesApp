import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ASYNC_KEYS from "../constant/constant";

export default function AuthenticatonRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Login} />
    </Routes>
  );
}

function Login() {
  type FormData = {
    username: string;
    password: string;
  };

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  function onSubmitHandler(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(JSON.stringify(formData));
    localStorage.setItem(ASYNC_KEYS.LOGIN_CRED, JSON.stringify(formData));
    console.log("--- " + localStorage.getItem(ASYNC_KEYS.LOGIN_CRED));
  }

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onSubmit={onSubmitHandler}
          style={{
            display: "flex",
            backgroundColor: "white",
            opacity: 0.325,
            flexDirection: "column",
            padding: "10%",
          }}
        >
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={formData.username}
            onChange={onChangeHandler}
            name="username"
          />
          <label htmlFor="pwd">Password</label>
          <input
            id="pwd"
            type="text"
            value={formData.password}
            onChange={onChangeHandler}
            name="password"
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
