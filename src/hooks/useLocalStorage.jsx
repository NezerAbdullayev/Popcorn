import { useEffect, useState } from "react";

export function useLocalStorage(initilState,key){
  const [value, setValue] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    return storedValue || initilState
  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value,key]);

  return [value,setValue]
}