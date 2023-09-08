import { useState } from 'react';

export const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const changeTheme = () => setIsLight(!isLight);

  return (
    <>
      <div
        style={{
          color: isLight ? '#000' : '#fff',
          background: isLight ? '#fff' : '#000',
        }}
      >
        {children}
      </div>
      <button onClick={changeTheme}>ThemeButton</button>
    </>
  );
};
