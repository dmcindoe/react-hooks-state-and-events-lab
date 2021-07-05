import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData)
  const [isOn, setIsOn] = useState(false)

  console.log(items);

  function ModeToggle() {setIsOn((isOn) => !isOn)}


  const appClass =  isOn ? "App dark" : "App light"
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ModeToggle}>
        {isOn ?  "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
