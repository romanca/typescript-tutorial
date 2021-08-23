import { useState, useEffect } from "react";

export default function usePersistedState<T>(lsKey: string, initialState: T) {
  const [state, setState] = useState<T>(() => {
    const foundValue = localStorage.getItem(lsKey);
    if (foundValue) {
      return JSON.parse(foundValue).value;
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(lsKey, JSON.stringify({ value: state }));
  }, [state, lsKey]);

  return [state, setState] as const;
}
