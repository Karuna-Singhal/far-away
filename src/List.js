import { Item } from "./ItemList";
import { useState } from "react";

export const List=({items,onDeleteItems,onToggleItems,onClearToggle})=>{
 
  const [sortBy,setSortBy]=useState("input");
  let sortedItems;
  if(sortBy==="input") sortedItems=items;
  if(sortBy==="description"){
    sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  }
  if(sortBy==="packed"){
    sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
  }
  return (
  <div className="list">
    <ul>
      {sortedItems.map((item )=>(
        <Item onToggleItems={onToggleItems} onDeleteItems={onDeleteItems} item={item} key={item.id}/>
      ))}    
    </ul>
    <div className="actions">
      <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort By Description</option>
        <option value="packed">Sort BY Packed Status</option>
      </select>
      <button onClick={onClearToggle}>Clear List</button>
    </div>
   
    
  </div>
  );
}