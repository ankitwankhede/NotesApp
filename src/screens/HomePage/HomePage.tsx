import { createRef, useEffect, useState } from "react";
import Note from "../../component/Note/Note";
import { menu, menu_open } from "../../assets";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SideBar } from "../../component/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ADD_NOTE } from "../../redux/reducers/NotesReducer";

export default function HomePage() {
  const [notes] = useState<number>(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [sideBarShow, setSideBarShow] = useState<boolean>(false);
  const imgRef = createRef<HTMLImageElement>();
  const Notes = useSelector((state: RootState) => state.noteReducer.Notes);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(`-- - ${JSON.stringify(Notes, null, 2)}`);
    return () => {};
  }, [Notes]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar show={sideBarShow} />
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            let temp = {
              id: 10,
              text: "abcd",
              priority: "Low",
              status: "Pending",
              created_time: "",
              completed_time: "",
            };
            dispatch(ADD_NOTE(temp));
          }}
        >
          asdasdas
        </button>
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
