import React, { useState,FC } from "react";


const Counter:FC= () => {
  const [state, setState] = useState<number>(0);

  return (
    
    <div>
      <div>{state}</div>
      <button onClick={() => setState(state+1)}>+</button>
      <button onClick={() => setState(state-1)}>-</button>
    </div>
  );
};

export default Counter;
