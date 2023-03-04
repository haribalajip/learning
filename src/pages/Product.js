import { useLoaderData, useParams } from "react-router-dom";

export const Product = () => {
  let params = useParams();
  let loaderData = useLoaderData();
  return <h4>A sample Product with id {params.id}</h4>;
};

export const ProductLoader = async () => {
  // Waits for this loader to resolve before loading the element.
  return await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
};
