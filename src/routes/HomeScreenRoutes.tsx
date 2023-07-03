import { Route, Routes } from "react-router-dom";
import HomePage from "../screens/HomePage/HomePage";

export default function HomeScreenRoutes() {
  return (
    <Routes>
      <Route path="/" Component={HomePage}>
        <Route index path="home" Component={HomePage} />
        <Route path="pending_task" Component={PendingTask} />
        <Route path="completed_task" Component={CompletedTask} />
      </Route>
    </Routes>
  );
}

function PendingTask() {
  return (
    <div>
      <h3>Pending</h3>
    </div>
  );
}

function CompletedTask() {
  return (
    <div>
      <h3>Completed</h3>
    </div>
  );
}
