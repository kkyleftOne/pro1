import React, { useState } from 'react';

import './ClickCounter.css';

const ClickCounter = ({ name }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        Click
      </button>
      <div className="message">
        {name}, You have clicked <p>{count}</p> time(s)
      </div>
    </>
  );
};

export default ClickCounter;
