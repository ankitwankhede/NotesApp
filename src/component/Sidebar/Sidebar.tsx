import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

export function SideBar(props: { show: boolean }) {
  return (
    <div
      className={styles.Sidebar}
      style={{
        display: props.show ? "inline-block" : "none",
      }}
    >
      <ul>
        <li>
          <Link to="/pending_task">Pending Task</Link>
        </li>
        <li>
          <Link to="/completed_task">Completed Task</Link>
        </li>
      </ul>
    </div>
  );
}
