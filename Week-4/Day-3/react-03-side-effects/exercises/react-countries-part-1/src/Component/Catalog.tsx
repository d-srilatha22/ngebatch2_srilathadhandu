import React, { useState } from "react";
import CatalogDisplay from "./CatalogDisplay";


export default function Catalog() {
  const [selectcategory, setSelectcategory] = useState("electronics");
    const categories =["electronics",
        "jewelery",
        "men's clothing",
        "women's clothing"
    ];
    const handleSelect = (selectcategory: string) => {
      console.log(selectcategory);
      setSelectcategory(selectcategory);
    };
  return (
    <div>
      <CatalogDisplay
        categories={categories}
        onSelect={handleSelect}
        selected={selectcategory}
      />
    </div>
  );
}


