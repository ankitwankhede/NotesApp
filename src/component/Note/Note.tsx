import { add_circle, edit } from "../../assets";
import styles from "./Note.module.css";

export default function Note() {
  return (
    <div className={styles.note}>
      <div className={styles.noteHeader}>
        <h5>Header</h5>
      </div>
      <div className={styles.noteNody}>
        <h5>note</h5>
      </div>
      <div className={styles.noteOptions}>
        <img src={edit} />
        <img src={add_circle} />
      </div>
    </div>
  );
}
