import { createRef, useEffect, useState } from "react";
import Note from "../../component/Note/Note";
import { menu, menu_open } from "../../assets";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SideBar } from "../../component/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ADD_NOTE, DELETE_NOTE } from "../../redux/reducers/NotesReducer";

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sideBarShow, setSideBarShow] = useState<boolean>(false);
  const imgRef = createRef<HTMLImageElement>();
  const Notes = useSelector((state: RootState) => state.noteReducer.Notes);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`-- - homepage useeffect`);
    return () => {};
  }, [Notes]);

  function change(noteId: number, modifyType: string) {
    console.log(`called - - - - ${noteId} $ ${modifyType}`);
    if (modifyType === "editNote") {
    } else if (modifyType === "deleteNote") {
      dispatch(DELETE_NOTE(noteId));
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar show={sideBarShow} />
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            let temp = {
              id: (Math.random() * 10000 + 1).toFixed(3),
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
            {Notes.length === 0 ? (
              <h1>no</h1>
            ) : (
              Notes.map((note) => (
                <Note props={note} key={note.id} modifyCallback={change} />
              ))
            )}
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
