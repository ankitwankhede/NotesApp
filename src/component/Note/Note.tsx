import { add_circle, edit } from "../../assets";
import { NoteType } from "../../redux/reducers/NotesReducer";
import styles from "./Note.module.css";

type NoteProp = {
  props: NoteType;
};

export default function Note({ props }: NoteProp) {
  return (
    <div className={styles.note}>
      <div className={styles.noteHeader}>
        <h5>{props.status}</h5>
      </div>
      <div className={styles.noteBody}>
        <h5>{props.text}</h5>
      </div>
      <div className={styles.noteOptions}>
        <img src={edit} />
        <img src={add_circle} />
      </div>
    </div>
  );
}
