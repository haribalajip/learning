import { useLoaderData, useParams } from "react-router-dom";

export default function Product() {
  let params = useParams();
  let loaderData = useLoaderData();
  console.log(loaderData); // Logs true
  return <h4>A sample Product with id {params.id}</h4>;
}
