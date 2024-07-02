import React, { useState } from 'react'

export default function statedemo() {
    const [click,setClick] = useState<number>(0);
    function handleClick(){
        setClick(click+1);
    }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        You have clicked {click} times!!
      </button>
      <button type="button" onClick={() =>setClick(0)}>
        Reset
      </button>
    </div>
  );
}
