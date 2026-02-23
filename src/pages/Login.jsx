import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();
  localStorage.setItem("isAuthenticated", "true");

  const formData = new FormData(e.target);
  const email = formData.get("email"); 
  localStorage.setItem("userEmail", email);

  navigate("/dashboard/profile");
};
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
  <input type="email" name="email" placeholder="Email" required />
  <input type="password" name="password" placeholder="Password" required />
  <button type="submit">Login</button>
</form>
    </div>
  );
}