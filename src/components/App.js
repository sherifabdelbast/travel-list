import { useState } from "react";
import Form from "./Form";

import PackingList from "./PackingList";
import Stats from "./Stats";
import Logo from "./Logo";
export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleResetItems() {
    // Browser Web API
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onToggleItem={handleToggleItem}
        items={items}
        onDeleteItem={handleDeleteItem}
        onResetItems={handleResetItems}
      />
      <Stats items={items} />
    </div>
  );
}
