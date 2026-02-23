
    import { Outlet, Link, useNavigate } from "react-router-dom";

    export default function Dashboard() {
      const navigate = useNavigate();

      const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
         localStorage.removeItem("userName");
         localStorage.removeItem("userEmail");
        navigate("/login");
      };

      return (
        <div>
          <h1>Dashboard</h1>

          <button onClick={handleLogout}>Logout</button>

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