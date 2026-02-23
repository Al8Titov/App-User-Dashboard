import { Outlet, Link } from "react-router-dom";


export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link> |{" "}
        <Link to="stats">Stats</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}