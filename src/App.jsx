import { useState } from 'react';
import Form from './Form';

import { nanoid } from 'nanoid';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (userInput) => {
    const newItem = {
      text: userInput,
      id: nanoid(),
      completed: false,
    };
    setItems([...items, newItem]);
  };

  const editItem = (itemId) => {
    const selectedItem = items.filter((item) => {
      return item.id === itemId;
    });
    selectedItem.completed = !selectedItem.completed;
    setItems([new Set(...items, selectedItem)]);
  };

  const deleteItem = (itemId) => {
    const newList = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(newList);
  };

  return (
    <main className="app">
      <Form
        items={items}
        addItem={addItem}
        editItem={editItem}
        deleteItem={deleteItem}
      />
    </main>
  );
};
export default App;
