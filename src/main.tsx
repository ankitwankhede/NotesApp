import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthenticatonRoutes from "./routes/AuthenticationRoutes.tsx";
import HomeScreenRoutes from "./routes/HomeScreenRoutes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  </React.StrictMode>
);

function LandingPage() {
  return true ? <AuthenticatonRoutes /> : <HomeScreenRoutes />;
}
