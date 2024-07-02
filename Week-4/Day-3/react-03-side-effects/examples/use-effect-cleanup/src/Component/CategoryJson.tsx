import React, { useEffect, useState } from 'react'

export default function CategoryJson() {
    const [cat,setCat] = useState([]);
    const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/roducts/category");
      const data = await res.json();
      setCat(data);
      //return res.json;
    } catch (e) {
      console.log("error", e);
    }

    useEffect(() => {
    getData();
  }, []);

  return (
    <div>
    <ul>
        {cat.map((c: any) => (
          <li key={c.id}>{c.title}</li>
        ))} 
      </ul>  
    </div>
  )
}
}
