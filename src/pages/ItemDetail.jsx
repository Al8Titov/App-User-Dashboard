import { useParams } from "react-router-dom";

export default function ItemDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Детальная страница элемента</h2>
      <p>ID: {id}</p>
    </div>
  );
}
