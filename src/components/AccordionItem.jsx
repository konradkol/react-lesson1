import { useState } from 'react';

export const AccordionItem = ({ title, content }) => {
  const [isHidden, setIsHidden] = useState(true);
  const handleClick = () => setIsHidden(!isHidden);
  return (
    <div>
      <h2 onClick={handleClick}>{title}</h2>
      <p style={{ display: isHidden ? 'none' : 'block' }}>{content}</p>
    </div>
  );
};
