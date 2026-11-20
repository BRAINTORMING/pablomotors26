import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

/** Like useState, but the value is saved in localStorage: const [name, setName] = useLocalStorage('name', ''). */
export function useLocalStorage<T>(key: string, initial: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw === null ? initial : (JSON.parse(raw) as T);
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage can be unavailable (private mode, sandbox): the value then lives only in memory.
    }
  }, [key, value]);

  return [value, setValue];
}
