import React, { useState } from 'react'

export const ToDo = ({taskName}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = () => setIsChecked((isChecked) => !isChecked);
  
  return (
    <div style={{textDecoration: isChecked ? "line-through" : "none" }}>
    {taskName} 
    <input onClick={handleClick} type="checkbox" />
    </div>
  )
}
