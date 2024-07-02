import React from 'react'

interface CatalogDisplayProps {
  categories: string[];
  onSelect: (selectedcategory: string) => void;
  selected: string;
}
export default function CatalogDisplay(props:CatalogDisplayProps) {
   // const {categories, onSelect, selected} = props;
  return (
    <>
      <select value ={props.selected} onChange={(event) =>props.onSelect(event.target.value) }>
        {props.categories.map((category,index)=> <option key={index} value={category}> {category}</option>)}
      </select>
      <p>You selected {props.selected}</p>
    </>
  )
}
