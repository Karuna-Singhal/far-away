import { useState } from "react";
import {Logo} from "./Logo";
import { Form } from "./Form";
import { List } from "./List";
import {Footer} from "./Footer"


function App() {
  const [items,setItems]=useState([]);

  const handleAddItems=(item)=>{
    setItems((items)=>[...items,item]);
  }

  const handleDeleteItem=(id)=>{
    setItems((items)=>items.filter(item=>item.id!==id));
  }

  const handleToggleItem=(id)=>{
    setItems((items)=>items.map(item=>item.id===id?{...item, packed:!item.packed}:item))
  }
  const handleClearList=()=>{
    const confirmed=window.confirm("Are you sure to delete all the items ?")
    if(confirmed)setItems([]);
  }

  return (
    <div className="app">
     <Logo/>
     <Form onAddItems={handleAddItems}/>
     <List items={items} onDeleteItems={handleDeleteItem} onToggleItems={handleToggleItem} onClearToggle={handleClearList}/>
     <Footer items={items}/>
    </div>
  );
}

export default App;
