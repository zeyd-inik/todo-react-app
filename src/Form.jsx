import { useState } from 'react';
import List from './List';

const Form = ({ items, addItem, deleteItem }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(userInput);
    setUserInput('');
  };
  return (
    <section className="form-comp">
      <form onSubmit={handleSubmit}>
        <h5 className="form-title ">Grocery Bud</h5>
        <div className="input-container">
          <input
            className="form-input"
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <button type="submit" className="btn">
            Add Item
          </button>
        </div>
        <List items={items} deleteItem={deleteItem} />
      </form>
    </section>
  );
};
export default Form;
