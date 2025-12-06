import { useState } from "react"
import Form from "./components/Form"
import Logo from "./components/Logo"
import PackingList from "./components/PackingList"
import Stats from "./components/Stats"

function App() {
  const [items , setItems] = useState([])
  function handleAddItems (item){
      setItems(prevItems => [...prevItems , item ])
      }
  function handleDeleteItem(id){
      setItems((items)=>items.filter((item)=>item.id !== id));
  }
  function handleToggle(id){
      setItems(items => items.map((item)=>
            item.id !== id ? item : {...item , packed: !item.packed}
      ));
  }

  function handleClearList(){
      // prompt the user if they really want to delete the item
      // if the user chooses yes , then allow ,
      // else
      if (items.length === 0) return ;

      const confirmed = window.confirm("Are you sure , you want to delete all items ?")

      if (confirmed) setItems([]);
  }

    return (
    <div className="app">
      <Logo/>
      <Form onAddItems={handleAddItems} items={items}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggle={handleToggle} onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  )
}

export default App
