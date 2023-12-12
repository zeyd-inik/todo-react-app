import { useState } from 'react';

const ListItem = ({ completed, text, id, deleteItem, editItem }) => {
  const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="list-item-comp">
      <div className="section-A">
        <input
          type="checkbox"
          checked={isChecked}
          onClick={() => {
            editItem(id);
          }}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <p className={isChecked ? 'active text' : 'text'}>{text}</p>
      </div>
      <button
        onClick={() => {
          deleteItem(id);
        }}
        type="button"
        className="btn"
      >
        Delete
      </button>
    </div>
  );
};
export default ListItem;
