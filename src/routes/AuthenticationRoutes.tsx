import { Route, Routes } from "react-router-dom";

export default function AuthenticatonRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Login} />
    </Routes>
  );
}

function Login() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <h1>as</h1>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form
          onClick={(e) => {
            console.log(e.target);
          }}
          style={{
            display: "flex",
            backgroundColor: "white",
            opacity: 0.325,
            flexDirection: "column",
            padding: "10%",
          }}
        >
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" />
          <label htmlFor="pwd">Password</label>
          <input id="pwd" type="text" name="pwd" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
