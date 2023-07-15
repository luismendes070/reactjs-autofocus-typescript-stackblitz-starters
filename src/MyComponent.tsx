// Bing Chat
import { useRef, useEffect } from 'react';

export default function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
}
