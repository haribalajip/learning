import { useState } from "react";

function useCounter (increment=true) {
  const [count, setCount] = useState(0);
  setTimeout(() => increment ? setCount(count+1) : setCount(count-1), 1000);
  return count;
};

export default useCounter;