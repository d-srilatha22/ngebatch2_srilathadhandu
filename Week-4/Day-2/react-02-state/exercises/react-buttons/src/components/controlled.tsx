import React, { useState } from 'react'

export default function ControlledComp() {
    const[name,setName]= useState('');
    const handleInput = (e:any) =>{
        setName(e.target.value);
    }

  return (
    <div>
      <input
        type="text"
        value={name}
        onInput={(event) => handleInput(event)}
      ></input>
      <p style={{ color: name }}>Name is {name}</p>
    </div>
  );
}
