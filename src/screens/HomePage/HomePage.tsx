import { createRef, useEffect, useState } from "react";
import Note from "../../component/Note/Note";
import { menu, menu_open } from "../../assets";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
import { SideBar } from "../../component/Sidebar/Sidebar";

export default function HomePage() {
  const [notes] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [sideBarShow, setSideBarShow] = useState<boolean>(false);
  const imgRef = createRef<HTMLImageElement>();

  useEffect(() => {
    return () => {};
  }, [sideBarShow]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar show={sideBarShow} />
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: "350px",
            height: "50px",
          }}
        >
          <img
            src={sideBarShow ? menu_open : menu}
            ref={imgRef}
            onClick={() => {
              setSideBarShow((prevState) => {
                let menuSrcRef = imgRef.current?.src;
                menuSrcRef = prevState ? menu : menu_open;
                return !prevState;
              });
            }}
          />
          <h1 onClick={() => navigate("/")} style={{ color: "white" }}>
            Notes
          </h1>
        </div>
        {location.pathname === "/" ? (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              overflowY: "auto",
              height: "550px",
            }}
          >
            {notes == 0 ? (
              <h5>not found</h5>
            ) : (
              <>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
              </>
            )}
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
