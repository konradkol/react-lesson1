import { useState } from 'react';

export const Tab = ({ label, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <p onClick={() => setIsVisible(!isVisible)}>{label}</p>
      <div style={{ display: isVisible ? 'block' : 'none' }}>{children}</div>
    </div>
  );
};

// export const Tab = ({ onStateChange, label, children }) => {
//   const [isVisible, setIsVisible] = useState(false);

//   onStateChange(isVisible);

//   return (
//     <div>
//       <p onClick={() => setIsVisible(!isVisible)}>{label}</p>
//       {children}
//     </div>
//   );
// };
