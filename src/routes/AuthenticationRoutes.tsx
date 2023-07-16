import { Route, Routes } from "react-router-dom";
import { Login } from "../component/Login/Login";

export default function AuthenticatonRoutes() {
  return (
    <Routes>
      <Route path="/" Component={Login} />
    </Routes>
  );
}
