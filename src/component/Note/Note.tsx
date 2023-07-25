import { add_circle, edit } from "../../assets";
import { NoteType } from "../../redux/reducers/NotesReducer";
import styles from "./Note.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
type NoteProp = {
  props: NoteType;
  modifyCallback: (noteId: number, modifyType: string) => void;
};

export default function Note({ props, modifyCallback }: NoteProp) {
  const Notes = useSelector((state: RootState) => state.noteReducer.Notes);

  useEffect(() => {
    return () => {
      console.log(` - - notes length- ${Notes.length}`);
    };
  }, []);

  function onClickHandler(event: React.ChangeEvent<HTMLImageElement>) {
    event.preventDefault();
    modifyCallback(props.id, event.currentTarget.name);
  }

  return (
    <div className={styles.note}>
      <div className={styles.noteHeader}>
        <h5>{props.status}</h5>
      </div>
      <div className={styles.noteBody}>
        <h5>{props.text}</h5>
      </div>
      <div className={styles.noteOptions}>
        <img src={edit} name="editNote" onClick={onClickHandler} />
        <img src={add_circle} name="deleteNote" onClick={onClickHandler} />
      </div>
    </div>
  );
}
