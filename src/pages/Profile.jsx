import { useState, useEffect } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName") || "Default Name";
    const storedEmail = localStorage.getItem("userEmail") || "user@example.com";
    setName(storedName);
    setEmail(storedEmail);
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      <p>Имя: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}