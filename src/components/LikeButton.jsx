import React, { useState } from "react";

export const LikeButton = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return <button onClick={handleClick}>LikeButton {count}</button>;
};
