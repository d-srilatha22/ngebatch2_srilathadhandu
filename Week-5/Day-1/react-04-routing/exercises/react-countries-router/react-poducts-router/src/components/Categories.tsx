import { useEffect, useState } from "react";

export default function Categories() {
  const [cats, setCats] = useState([]);
  const [selectedcat, setSelectedcat] = useState('electronics');

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/categories");
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

  const handleselect = (e:any) => {
    const selectedCat = e.target.value;
    setSelectedcat(selectedCat);
     if (selectedCat) {
       window.location.href = `/${selectedCat}`;
     }
  }
  return (
    <div>
      <select
        value={selectedcat}
         onChange={handleselect}
      >
        {cats.map((category, index) => (
          <option key={index} value={category}>
            {" "}
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
