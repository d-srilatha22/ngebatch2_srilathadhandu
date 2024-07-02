import React, { useRef } from 'react'

export default function Uncontrolled() {
    const c= useRef <HTMLInputElement | null> (null);
    const handleClick = () =>{
        console.log(c?.current?.value);
    }
  return (
    <div>
      <input type='text' ref={c} onInput={handleClick}></input>
    </div>
  )
}
