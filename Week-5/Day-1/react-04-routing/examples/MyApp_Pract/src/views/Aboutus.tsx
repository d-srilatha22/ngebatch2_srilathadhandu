import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Aboutus() {
    const navigate = useNavigate();
    const handleClick= () =>{
        navigate("/home")
    }
  return (
    <>
      <div>This is About us </div>
      <button onClick={handleClick}>Go to Home</button>
    </>
  );
}
