import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Products() {
    const { category } = useParams();
    //const category='electronics';
    const [cats, setCats] = useState([]);
    //console.log(category);
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
          );
          const data = await res.json();
          setCats(data);
          console.log(typeof cats);
          console.log({ res });
          console.log({ data });
          //return res.json;
        } catch (e) {
          console.log("error", e);
        }
      };
      getData();
    }, []);
    
    return (
      <>
        <ul>
          {cats.map((c: any) => (
            <li key={c.id}>{c.title}</li>
          ))}
        </ul>
      </>
    );
  }

