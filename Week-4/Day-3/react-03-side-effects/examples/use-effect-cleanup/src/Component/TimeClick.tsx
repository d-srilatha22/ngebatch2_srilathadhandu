import React, { useEffect, useState } from 'react'

export default function TimeClick() {
    const [time,setTime] = useState(new Date());
    useEffect(() =>{
        const id=setInterval(()=>{
            setTime(new Date())
        },1000)
        return()=>{
            clearInterval(id);//unique and called only once as we have useEffect, callback is called multiple times. 
        }
    },[])
  return (
    <div>
      <h3>Time now is {time.toLocaleTimeString()}</h3>
    </div>
  )
}
