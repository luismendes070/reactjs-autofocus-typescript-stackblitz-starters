// Bard
import { useCallback, useRef } from "react";

const InputWithAutoFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  // Utilizando as refs no React de forma avançada | Code/Drops #52
  // https://youtu.be/lA8o3kUl1TA
  const handleFocus = useCallback(() => {
    // Focus the input on first render
    if (ref.current) {
      ref.current?.focus();
    }
  }, []);

  return (
    <div className="App">
      <input
        ref={ref}
        type="text"
        autoFocus
        placeholder="This input has autofocus"
      />

      <button onClick={handleFocus}>Realizar foco</button>
    </div>
  );
};

export default InputWithAutoFocus;
