export const ProductLoader = async () => {
  // Waits for this loader to resolve before loading the element.
  return await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
};
