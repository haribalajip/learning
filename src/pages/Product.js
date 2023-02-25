import { useParams } from "react-router-dom";

export default function Product() {
  let params = useParams();
  return <h4>A sample Product with id {params.id}</h4>;
}
