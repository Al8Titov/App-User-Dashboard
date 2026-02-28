import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/login">Вход</Link> |{" "}
        <Link to="/category">Категория</Link> |{" "}
        <Link to="/item/1">Элемент 1</Link>
      </nav>
    </div>
  );
}