import React, { useRef } from "react";

const InputWithAutoFocus = () => {
  const ref = useRef(null);

  useEffect(() => {
    // Focus the input on first render
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  return (
    <input
      type="text"
      ref={ref}
      autoFocus
      placeholder="This input has autofocus"
    />
  );
};

export default InputWithAutoFocus;
