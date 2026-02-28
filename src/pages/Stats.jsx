import { useLoaderData } from "react-router-dom";

export async function statsLoader() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!res.ok) throw new Response("Failed to load stats", { status: 500 });
  return res.json();
}

export default function Stats() {
  const user = useLoaderData();

  return (
    <div>
      <h2>Stats</h2>
      <p>User: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}