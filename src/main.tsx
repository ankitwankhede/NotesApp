import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthenticatonRoutes from "./routes/AuthenticationRoutes.tsx";
import HomeScreenRoutes from "./routes/HomeScreenRoutes.tsx";
import ASYNC_KEYS from "./constant/constant.ts";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LandingPage />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

function LandingPage() {
  return !isUserValid() ? <AuthenticatonRoutes /> : <HomeScreenRoutes />;
}

function isUserValid(): boolean {
  let loginCred: string | null = localStorage.getItem(ASYNC_KEYS.LOGIN_CRED);
  return (
    JSON.parse(loginCred).username === "ankit" &&
    JSON.parse(loginCred).password === "123"
  );
}
