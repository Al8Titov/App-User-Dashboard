import { useState, useEffect } from "react";

export default function Settings() {
  const [name, setName] = useState("");

  // при загрузке страницы берём имя из localStorage
  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "";
    setName(storedName);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", name);
    alert("Имя сохранено!");
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя"
          required
        />
        <button type="submit">Сохранить</button>
      </form>
      {name && <p>Текущее имя: {name}</p>}
    </div>
  );
}